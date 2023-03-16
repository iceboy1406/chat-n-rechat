import Container from "components/layouts/Container"
import Link from "next/link"
import { SvgDownloadSectionIllustration } from "svg/component/illustration"
import { SvgAppStoreLogo, SvgPlayStoreLogo } from "svg/component/logo"

const DownloadSection = () => {
  return (
    <section className="py-[100px]" id="download">
      <Container>
        <div className="bg-primary w-full px-6 lg:px-20 py-6 lg:py-0 rounded-[10px] md:rounded-[20px] flex flex-row items-center justify-between">
          <aside className="w-full lg:w-1/2 flex flex-col gap-[45px]" data-aos="fade-right">
            <div className="flex flex-col gap-2.5">
              <article className="flex flex-col gap-4">
                <span className="text-sm font-semibold font-sourceSansPro text-white">
                  DOWNLOAD APLIKASINYA
                </span>
                <h2 className="text-xl lg:text-3xl font-normal text-white">
                  Download Aplikasi Chat n’ Rechat Di Play Store, App Store,
                  atau Symbian Store
                </h2>
              </article>
              <ul className="list-disc text-white/[60%] font-sourceSansPro font-normal ml-7">
                <li>Android Version: Mojave+</li>
                <li>iOS Version: Lolipop+</li>
                <li>Symbian: 20.04+</li>
              </ul>
            </div>
            <div className="flex items-center flex-wrap gap-2 sm:gap-4">
              <Link
                href={
                  "http://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8&fbclid=IwAR30kILqJposAMfPq2JiGQ00o5NwVDc3jvu86wtcmAwzPNCTJXLZaooUpVk"
                }
                target="_blank"
              >
                <SvgAppStoreLogo className="text-[38px] sm:text-[46px]" />
              </Link>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.whatsapp&fbclid=IwAR0PpKE_1z74sc8Q4kxnKQzFODOLmtRmNymvo8Bz6ZJOg5djNQDMvdHSt2c"
                }
                target="_blank"
              >
                <SvgPlayStoreLogo className="text-[38px] sm:text-[46px]" />
              </Link>
            </div>
          </aside>
          <aside className="hidden lg:block" data-aos="fade-up">
            <SvgDownloadSectionIllustration className="text-[540px]" />
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default DownloadSection
