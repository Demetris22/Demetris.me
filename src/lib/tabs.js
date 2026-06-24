// Roving-tabindex keyboard navigation for the tab/selector groups.
// Arrow keys move (and select) the adjacent tab; Home/End jump to the ends.
export function handleTabKeyDown(event, items, activeId, setActiveId, idPrefix) {
  const navigationKeys = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
  ]
  if (!navigationKeys.includes(event.key)) {
    return
  }

  event.preventDefault()
  const currentIndex = items.findIndex((item) => item.id === activeId)
  const lastIndex = items.length - 1
  let nextIndex = currentIndex

  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    nextIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1
  } else if (event.key === 'Home') {
    nextIndex = 0
  } else if (event.key === 'End') {
    nextIndex = lastIndex
  }

  const nextId = items[nextIndex].id
  setActiveId(nextId)
  const nextTab = document.getElementById(`${idPrefix}-tab-${nextId}`)
  if (nextTab instanceof HTMLElement) {
    nextTab.focus()
  }
}
