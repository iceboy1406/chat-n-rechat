import Container from "components/layouts/Container"
import SectionArticle from "components/molecules/SectionArticle"
import Feature from "components/molecules/Feature"
import {
  SvgKeepInTouchIllustration,
  SvgSimpleReliableMessagingIllustration,
  SvgSpeakFreelyIllustration,
} from "svg/component/illustration"

const FeatureSection = () => {
  return (
    <section className="py-[100px] bg-radiantGradient" id="feature">
      <Container>
        <div className="flex flex-col gap-20 items-center">
          <SectionArticle
            badge="NGGAK HARUS SIH SEBENERNYA"
            title="Kenapa Harus Pakai Chat N’ Rechat?"
            description="Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp."
            textAlign="center"
            className="max-w-[500px]"
            data-aos="zoom-in-up"
          />
          <div className="w-full flex flex-col gap-[30px] md:grid md:grid-cols-3">
            <Feature
              illustration={<SvgKeepInTouchIllustration />}
              title="Groups to keep in touch"
              description="Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos."
              data-aos="fade-up"
            />
            <Feature
              illustration={<SvgSimpleReliableMessagingIllustration />}
              title="Simple, Reliable Messaging"
              description="Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees."
              data-aos="fade-up"
            />
            <Feature
              illustration={<SvgSpeakFreelyIllustration />}
              title="Speak Freely"
              description="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations."
              data-aos="fade-up"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeatureSection
