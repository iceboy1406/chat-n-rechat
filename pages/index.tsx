import Container from "components/layouts/Container"
import Footer from "components/organisms/Footer"
import Header from "components/organisms/Header"
import DownloadSection from "components/organisms/section/download"
import FAQSection from "components/organisms/section/faq"
import FeatureSection from "components/organisms/section/feature"
import HeroSection from "components/organisms/section/hero"
import TechnologySection from "components/organisms/section/technology"

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Container className="h-[1px] bg-dark/[10%]" />
      <TechnologySection />
      <DownloadSection />
      <FAQSection />
      <Footer />
    </>
  )
}

export default HomePage
