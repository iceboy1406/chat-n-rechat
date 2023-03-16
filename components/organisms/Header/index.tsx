import Button from "components/atoms/Button"
import Container from "components/layouts/Container"
import NavLink from "components/molecules/NavLink"
import useScrollToSection from "hooks/useScrollToSection"
import { useEffect, useState } from "react"
import { SvgHamburgerIcon, SvgXIcon } from "svg/component/icon"

const Header = () => {
  const scrollToSection = useScrollToSection()
  const [isScrolling, setIsScrolling] = useState(false)
  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 82) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
    handler()
    window.addEventListener("scroll", handler)
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [])

  const [openNavItem, setOpenNavItem] = useState(false)
  return (
    <header
      className={`fixed top-0 left-0 w-full py-5 z-[999] ${
        isScrolling || openNavItem ? "bg-light/[80%] backdrop-blur-md" : ""
      }`}
    >
      <Container>
        <nav className="flex justify-between items-center">
          <div className="text-[30px] cursor-pointer" onClick={() => scrollToSection("hero")}>
            👋
          </div>
          <div className="hidden lg:flex lg:gap-16">
            <NavLink label="Beranda" sectionTargetId="hero" />
            <NavLink label="Fitur-fitur" sectionTargetId="feature" />
            <NavLink label="Teknologi" sectionTargetId="technology" />
            <NavLink label="FAQ" sectionTargetId="faq" />
          </div>
          <Button
            size="small"
            onClick={() => scrollToSection("download")}
            className="hidden lg:block"
          >
            Download
          </Button>
          <button
            className="text-2xl text-dark lg:hidden"
            onClick={() => setOpenNavItem((prevState) => !prevState)}
          >
            {openNavItem ? <SvgXIcon /> : <SvgHamburgerIcon />}
          </button>
        </nav>
        {openNavItem && (
          <div className="flex flex-col gap-2 lg:hidden mt-4">
            <NavLink label="Beranda" sectionTargetId="hero" />
            <NavLink label="Fitur-fitur" sectionTargetId="feature" />
            <NavLink label="Teknologi" sectionTargetId="technology" />
            <NavLink label="FAQ" sectionTargetId="faq" />
            <Button
              size="small"
              onClick={() => scrollToSection("download")}
              className="w-fit"
            >
              Download
            </Button>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
