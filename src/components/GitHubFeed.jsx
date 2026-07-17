import { useEffect, useState } from 'react'

// Compact live strip of my most recently pushed public repos. Fails quietly:
// any error or rate limit collapses to a one-line pointer at the profile, so
// the Projects section never looks broken.
const GITHUB_USER = 'Demetris22'
const REPO_COUNT = 3

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

function GitHubFeed() {
  const [feed, setFeed] = useState({ status: 'loading', repos: [] })

  useEffect(() => {
    const controller = new AbortController()

    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=${REPO_COUNT}&type=owner`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        signal: controller.signal,
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          const rateLimited =
            response.status === 403 &&
            response.headers.get('X-RateLimit-Remaining') === '0'
          setFeed({ status: rateLimited ? 'rate-limited' : 'error', repos: [] })
          return
        }
        const repos = await response.json()
        setFeed({ status: 'ready', repos: Array.isArray(repos) ? repos : [] })
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setFeed({ status: 'error', repos: [] })
        }
      })

    return () => controller.abort()
  }, [])

  const statusText = {
    loading: 'Loading latest repositories…',
    ready:
      feed.repos.length > 0
        ? `Showing ${feed.repos.length} recently updated repositories.`
        : 'No public repositories to show yet.',
    error: 'The live GitHub feed is unavailable.',
    'rate-limited': 'The live GitHub feed is unavailable.',
  }[feed.status]

  return (
    <div className="github-feed" data-reveal>
      <div className="github-feed-head">
        <p className="github-feed-label">Latest on GitHub</p>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{GITHUB_USER}
        </a>
      </div>

      <p className="sr-only" role="status">
        {statusText}
      </p>

      {feed.status === 'loading' && (
        <div className="github-feed-grid" aria-hidden="true">
          {Array.from({ length: REPO_COUNT }, (_, index) => (
            <div className="github-repo-card github-repo-skeleton" key={index}>
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      )}

      {feed.status === 'ready' && feed.repos.length > 0 && (
        <div className="github-feed-grid">
          {feed.repos.map((repo) => (
            <a
              className="github-repo-card"
              href={repo.html_url}
              key={repo.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{repo.name}</strong>
              <span className="github-repo-desc">
                {repo.description || 'No description yet.'}
              </span>
              <span className="github-repo-meta">
                {[
                  repo.language,
                  `Updated ${dateFormatter.format(new Date(repo.pushed_at))}`,
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </span>
            </a>
          ))}
        </div>
      )}

      {feed.status === 'ready' && feed.repos.length === 0 && (
        <p className="github-feed-note">
          No public repositories to show yet — check back soon.
        </p>
      )}

      {(feed.status === 'error' || feed.status === 'rate-limited') && (
        <p className="github-feed-note">
          {feed.status === 'rate-limited'
            ? 'GitHub’s rate limit was hit, so the live feed is resting — '
            : 'The live feed couldn’t load right now — '}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            my GitHub profile
          </a>{' '}
          has the latest.
        </p>
      )}
    </div>
  )
}

export default GitHubFeed
