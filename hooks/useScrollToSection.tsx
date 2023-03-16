import { useCallback } from "react"

const useScrollToSection = () => {
  return useCallback((sectionId: string) => {
    const header = document.querySelector("header")
    const sectionTarget = document.querySelector<HTMLElement>(
      `section#${sectionId}`
    )
    if (sectionTarget && header) {
      window.scrollTo({ left: 0, top: sectionTarget.offsetTop - header.clientHeight })
    }
  }, [])
}

export default useScrollToSection
