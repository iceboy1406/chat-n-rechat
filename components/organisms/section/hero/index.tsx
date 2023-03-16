import Button from "components/atoms/Button"
import Container from "components/layouts/Container"
import Statistic from "components/molecules/Statistic"
import SvgFitToParent from "components/molecules/SvgFitToParent"
import useScrollToSection from "hooks/useScrollToSection"
import {
  SvgArrowRightCircleIcon,
  SvgDownloadIcon,
  SvgUserIcon,
} from "svg/component/icon"
import { SvgHeroSectionIllustration } from "svg/component/illustration"
import {
  SvgCnnLogo,
  SvgForbesLogo,
  SvgGoogleLogo,
  SvgTheNewyorkTimeLogo,
  SvgTirtoLogo,
} from "svg/component/logo"

const HeroSection = () => {
  const scrollToSection = useScrollToSection()
  return (
    <section
      className="w-full bg-gradient-to-b from-[#EEF2FF] to-[rgba(238,242,255,0)] pt-[120px] lg:pt-[170px]"
      id="hero"
    >
      <Container>
        <div
          className={`flex flex-col gap-12 lg:gap-0 lg:flex-row items-center`}
        >
          <aside className="w-full lg:w-1/2" data-aos="fade-down-right">
            <article className="flex flex-col gap-4">
              <span className="text-primary text-sm font-semibold font-sourceSansPro">
                CHAT N’ RECHAT
              </span>
              <h2 className="text-4xl font-normal text-dark">
                Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
                tidak lupa jasa pahlawan!
              </h2>
              <p className="text-lg text-dark/[60%] font-sourceSansPro">
                Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
                ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
                pake aplikasi yang ini.
              </p>
            </article>
            <div className="flex items-center gap-2 md:gap-4 mt-8 flex-wrap">
              <Button
                endIcon={<SvgArrowRightCircleIcon className="text-xl" />}
                onClick={() => {
                  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                }}
              >
                Register
              </Button>
              <Button variant="soft" onClick={() => scrollToSection("feature")}>
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-6 sm:gap-10 mt-16 flex-wrap">
              <Statistic
                icon={<SvgDownloadIcon />}
                label={"TOTAL DON’TLOUD"}
                value={"1,501,234"}
              />
              <div className="hidden sm:block w-[1px] h-[52px] bg-dark/[60%] opacity-10"></div>
              <Statistic
                icon={<SvgUserIcon />}
                label={"TOTAL USERS"}
                value={"1,318,829"}
              />
            </div>
          </aside>
          <aside className="w-full lg:w-1/2 overflow-hidden" data-aos="fade-up-left">
            <SvgFitToParent aspectRatio={1.1}>
              <SvgHeroSectionIllustration />
            </SvgFitToParent>
          </aside>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap text-3xl md:text-4xl px-6 py-14 bg-primary/[5%] rounded-[15px] mt-[75px]" data-aos="zoom-in-up">
          <SvgCnnLogo />
          <SvgTirtoLogo />
          <SvgForbesLogo />
          <SvgGoogleLogo />
          <SvgTheNewyorkTimeLogo />
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
