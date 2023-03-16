import IconButton from "components/atoms/IconButton"
import Container from "components/layouts/Container"
import useScrollToSection from "hooks/useScrollToSection"
import Link from "next/link"
import React, { useCallback } from "react"
import {
  SvgFacebookIcon,
  SvgInstagramIcon,
  SvgTwitterIcon,
} from "svg/component/icon"

const Footer = () => {
  const scrollToSection = useScrollToSection()
  return (
    <footer data-aos="zoom-in-up">
      <Container>
        <div className="p-6 sm:p-10 lg:p-20 bg-primary/[5%] rounded-md flex flex-col items-center gap-[30px] lg:flex-row">
          <aside className="flex flex-col gap-5 w-full lg:w-1/2">
            <button
              className="flex items-center gap-2.5"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="text-[30px]">👋</div>
              <div className="text-lg font-medium text-dark">
                Chat N’ Rechat
              </div>
            </button>
            <p className="text-base font-sourceSansPro font-normal text-dark/[60%]">
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
              pake aplikasi yang ini.
            </p>
            <p className="text-sm font-semibold font-sourceSansPro text-dark/[60%]">
              COPYRIGHT (C) 2021. DESIGN BY NAUVAL.
            </p>
          </aside>
          <aside className="flex gap-[50px] sm:gap-[85px] lg:gap-[145px] w-full lg:w-1/2">
            <div className="flex flex-col gap-5">
              <h3 className="text-dark text-lg font-medium">Sitemap</h3>
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    label: "Beranda",
                    sectionId: "hero",
                  },
                  {
                    label: "Fitur-fitur",
                    sectionId: "feature",
                  },
                  {
                    label: "Teknologi",
                    sectionId: "technology",
                  },
                  {
                    label: "FAQ",
                    sectionId: "faq",
                  },
                  {
                    label: "Download",
                    sectionId: "download",
                  },
                ].map((link) => (
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-base font-semibold font-sourceSansPro text-dark/[60%] text-left"
                    key={link.sectionId}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 max-w-[185px]">
              <h3 className="text-lg font-medium text-dark">Tetap Terhubung</h3>
              <p className="text-base text-dark/[60%] font-sourceSansPro font-normal">
                Lihat kami pansos di sosial media berikut:
              </p>
              <div className="flex items-center gap-2.5">
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/p/BgSlRglAKBn/?hl=en"
                    )
                  }}
                >
                  <SvgInstagramIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/watch/?v=175310064147000"
                    )
                  }}
                >
                  <SvgFacebookIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://twitter.com/search?lang=en&q=%23rickroll"
                    )
                  }}
                >
                  <SvgTwitterIcon />
                </IconButton>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
