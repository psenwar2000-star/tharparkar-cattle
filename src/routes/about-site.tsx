import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { SiteLink } from "@/components/site-link";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about-site")({
  head: () => ({
    meta: [
      { title: "About this website · Tharparkar Cattle" },
      {
        name: "description",
        content:
          "How the Tharparkar Cattle encyclopedia was compiled, what it refuses to invent, and how the local editorial desk works.",
      },
    ],
  }),
  component: AboutSite,
});

function AboutSite() {
  const { t } = useI18n();
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-10">
        <p className="text-sm tracking-[0.16em] text-sage uppercase">{t({ en: "Method", hi: "विधि" })}</p>
        <h1 className="mt-2 font-display text-5xl">{t({ en: "About this website", hi: "इस वेबसाइट के बारे में" })}</h1>
        <div className="mt-6 grid gap-4">
          <p>
            {t({
              en: "Tharparkar Cattle is a public research encyclopedia about one breed. It is not a market, not a breeder directory, and not a veterinary clinic. English is the language of the scientific record. Hindi follows the same claims; it does not add facts.",
              hi: "थारपारकर कैटल एक नस्ल का सार्वजनिक शोध विश्वकोश है। यह बाज़ार नहीं, प्रजनक निर्देशिका नहीं, और पशु चिकित्सालय नहीं। अंग्रेज़ी वैज्ञानिक अभिलेख की भाषा है। हिन्दी उन्हीं दावों का अनुसरण करती है; वह तथ्य नहीं जोड़ती।",
            })}
          </p>
          <p>
            {t({
              en: "The edition date is 27 September 2026. Institutional pages at ICAR-NBAGR, ICAR-NDRI and NDDB were read, along with peer-reviewed papers whose authors, samples and numbers could be checked. A KVK page that was suggested as a tract reference returned an error and is not quoted. If a popular article gave a milk yield, body weight or population without a primary table, it was dropped.",
              hi: "संस्करण तिथि 27 सितंबर 2026 है। ICAR-NBAGR, ICAR-NDRI और NDDB के संस्थागत पृष्ठ पढ़े गए, साथ ही वे समीक्षित शोधपत्र जिनके लेखक, नमूने और संख्याएँ जाँची जा सकीं। क्षेत्र संदर्भ के रूप में सुझाया गया एक केवीके पृष्ठ त्रुटि देकर आया और उद्धृत नहीं है। यदि किसी लोकप्रिय लेख ने बिना प्राथमिक तालिका के दुग्ध, भार या पशुसंख्या दी, उसे छोड़ दिया गया।",
            })}
          </p>
          <p>
            {t({
              en: "Photographs are from Wikimedia Commons under Creative Commons licences named on each caption. The uploaders identified the animals as Tharparkar. This site repeats that identification and refuses the further claim that the photograph proves purity or a desert location.",
              hi: "चित्र विकिमीडिया कॉमन्स से हैं, हर कैप्शन पर नामित क्रिएटिव कॉमन्स लाइसेंस के अंतर्गत। अपलोडर्स ने पशुओं को थारपारकर बताया। यह साइट वह पहचान दोहराती है और यह आगे का दावा अस्वीकार करती है कि फोटो शुद्धता या मरुस्थलीय स्थान सिद्ध करता है।",
            })}
          </p>
          <h2 className="mt-4 font-display text-3xl">{t({ en: "Editorial desk", hi: "संपादकीय डेस्क" })}</h2>
          <p>
            {t({
              en: "The desk stores drafts in this browser only: articles, references, dataset notes and image notes. A record moves from draft to review to published. Published desk records appear in the library with an unverified label. They never overwrite the curated sources. Export and import use a JSON file so a later database can take the same fields. There is no farmer account and no public write access to the verified corpus.",
              hi: "डेस्क मसौदे केवल इस ब्राउज़र में रखता है: लेख, संदर्भ, आँकड़ा टिप्पणियाँ और चित्र टिप्पणियाँ। अभिलेख मसौदे से समीक्षा और फिर प्रकाशन तक जाता है। प्रकाशित डेस्क अभिलेख पुस्तकालय में असत्यापित लेबल के साथ दिखते हैं। वे चयनित स्रोतों को कभी नहीं मिटाते। निर्यात और आयात JSON फाइल से होता है ताकि बाद का डेटाबेस वही क्षेत्र ले सके। कोई किसान खाता नहीं और सत्यापित संग्रह पर सार्वजनिक लेखन नहीं।",
            })}
          </p>
          <SiteLink to="/editorial" className="inline-flex min-h-12 w-fit items-center rounded-full bg-earth px-5 text-paper">
            {t({ en: "Open the editorial desk", hi: "संपादकीय डेस्क खोलें" })}
          </SiteLink>
        </div>
      </article>
    </Shell>
  );
}
