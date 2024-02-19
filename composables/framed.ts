export function useIsFramed() {
  try {
    return window.self !== window.top
  }
  catch {
    return false
  }
}
