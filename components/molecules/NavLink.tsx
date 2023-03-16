import useScrollToSection from "hooks/useScrollToSection"
import React, { useEffect, useState } from "react"
interface Props {
  sectionTargetId: string
  label: string
}
const NavLink: React.FC<Props> = ({ label, sectionTargetId }) => {
  const [isActive, setIsActive] = useState(false)
  const scrollToSection = useScrollToSection()
  useEffect(() => {
    const handler = () => {
      const header = document.querySelector("header")
      const sectionTarget = document.querySelector<HTMLElement>(
        `section#${sectionTargetId}`
      )
      if (sectionTarget && header) {
        const moreThanSectionTopBorder =
          window.scrollY >= sectionTarget.offsetTop - header.clientHeight
        const lessThanSectionBottomBorder =
          window.scrollY <
          sectionTarget.offsetTop +
            sectionTarget.clientHeight -
            header.clientHeight
        setIsActive(moreThanSectionTopBorder && lessThanSectionBottomBorder)
      }
    }
    handler()
    window.addEventListener("scroll", handler)
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [sectionTargetId])
  return (
    <button
      onClick={() => scrollToSection(sectionTargetId)}
      className={`text-base font-sourceSansPro text-dark text-left ${
        isActive ? "font-semibold" : "font-normal"
      }`}
    >
      {label}
    </button>
  )
}

export default NavLink
