import Container from "components/layouts/Container"
import ReasonListItem from "components/molecules/ReasonListItem"
import SectionArticle from "components/molecules/SectionArticle"
import SvgFitToParent from "components/molecules/SvgFitToParent"
import { SvgTechnologySectionIllustration } from "svg/component/illustration"

const TechnologySection = () => {
  return (
    <section className="py-[100px]" id="technology">
      <Container>
        <div
          className={`flex flex-col gap-12 lg:gap-0 lg:flex-row items-center`}
        >
          <aside
            className="w-full lg:w-1/2 overflow-hidden"
            data-aos="fade-up-right"
          >
            <SvgFitToParent aspectRatio={0.7}>
              <SvgTechnologySectionIllustration />
            </SvgFitToParent>
          </aside>
          <aside className="w-full lg:w-1/2 flex flex-col gap-10">
            <SectionArticle
              badge="TEKNOLOGI YANG DIGUNAKAN"
              title="Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱"
              description="Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:"
              data-aos="fade-right"
            />
            <div className="flex flex-col gap-[30px]">
              <ReasonListItem
                emoticon={"😠"}
                title="Kamu Adalah Beban Kami"
                description="Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!"
                data-aos="fade-right"
              />
              <ReasonListItem
                emoticon={"🐨"}
                title="Males Buat Ngembangin"
                description="Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin."
                data-aos="fade-right"
              />
              <ReasonListItem
                emoticon={"😴"}
                title="Pokoknya Males Aja Lah"
                description="Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah."
                data-aos="fade-right"
              />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default TechnologySection
