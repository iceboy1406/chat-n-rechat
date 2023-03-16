import Container from "components/layouts/Container"
import FAQListItem from "components/molecules/FAQListItem"
import SectionArticle from "components/molecules/SectionArticle"
import { useState } from "react"

const FAQSection = () => {
  const [openedFAQIndex, setOpenedFAQIndex] = useState(1)
  const faqList = [
    {
      question: "Apakah aplikasi ini sudah dapat izin dari MUI?",
      answer:
        "Ya udah dong. Dijamin 100% halal pokoknya deh, kalau ada yang pakai buat o*** b* atau no**** b***p langsung banned permanen. Jadi aman dari hal berbau maksiat, ngga kaya aplikasi sebelah tuh ( ͡≖ ͜ʖ ͡≖).",
    },
    {
      question: "Apakah aplikasi ini gratis?",
      answer:
        "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.",
    },
    {
      question: "Apakah data saya akan dijual ke agen khusus US?",
      answer:
        "Ya jelas dong. Lu lu pada bisa pakai nih app gratis dan gua jual ke agen US biar dapet cuan. Simbiosis mutuliasme kan ea",
    },
    {
      question: "Kenapa bumi muter? Apa karena di depan ada yang nikah?",
      answer:
        "Momentum sudut memberikan dorongan pada bumi untuk berputar dan kekekalan momentum sudut mempertahankan dorongan tersebut. Inilah yang menyebabkan bumi berotasi sejak sebelum terbentuk, hingga miliaran tahun setelah terbentuk. ~ Kompas.com",
    },
    {
      question: "Gimana caranya supaya si Rizal mau bikin konten buat Array ID?",
      answer:
        "Yaelang simpel itu mah. Tinggal kasih rubicon coy kelar. Siiuuu",
    },
    {
      question: "Pertanyaan di atas gabakal ada yang bisa jawab sih",
      answer:
        `“Sesungguhnya Tuhanmu, Dialah Yang Maha Pencipta lagi Maha Mengetahui.” (QS. Al Hijr:86)`,
    },
    {
      question: "Kenapa game epep burik, bang?",
      answer:
        "Pake nanya 🤦",
    },
  ]
  return (
    <section className="py-[100px]" id="faq">
      <Container>
        <div className="flex flex-col gap-[100px] items-center">
          <SectionArticle
            badge="BANYAK YANG NANYA"
            title="Pertanyaan Yang Sering Ditanyain"
            description="Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja siapa tau lo mau baca ‘kan."
            textAlign="center"
            className="max-w-[500px]"
            data-aos="zoom-in-up"
          />
          <div className="flex flex-col gap-4 w-full max-w-2xl" data-aos="fade-right">
            {faqList.map((faq, index) => (
              <FAQListItem
                open={openedFAQIndex === index}
                onToggle={() =>
                  setOpenedFAQIndex((prevIndex) =>
                    prevIndex === index ? -1 : index
                  )
                }
                question={faq.question}
                answer={faq.answer}
                key={faq.question}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
