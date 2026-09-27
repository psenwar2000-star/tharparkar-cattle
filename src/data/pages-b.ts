import type { PageDoc } from "./types";

export const sciencePages: PageDoc[] = [
  {
    id: "milk",
    path: "/milk",
    nav: "production",
    title: { en: "Milk production", hi: "दुग्ध उत्पादन" },
    description: {
      en: "Published lactation yields of Tharparkar cattle, herd by herd, with sample sizes.",
      hi: "थारपारकर के प्रकाशित ब्यांत उत्पादन, झुंड दर झुंड, पशु संख्या के साथ।",
    },
    kicker: { en: "Yields are herd results", hi: "उत्पादन झुंड के परिणाम हैं" },
    lede: {
      en: "There is no single lactation yield of “the Tharparkar cow”. Institutional pages and peer-reviewed studies report different means because the herds, parities, years and even the units differ. Read each row with its source.",
      hi: "“थारपारकर गाय” का कोई एक ब्यांत उत्पादन नहीं है। संस्थागत पृष्ठ और समीक्षित अध्ययन अलग माध्य बताते हैं क्योंकि झुंड, ब्यांत क्रम, वर्ष और यहाँ तक कि इकाई भी अलग हैं। हर पंक्ति अपने स्रोत के साथ पढ़ें।",
    },
    related: ["composition", "reproduction", "research"],
    blocks: [
      {
        kind: "callout",
        tone: "limit",
        text: {
          en: "A research-herd mean is not the production capacity of every animal, and it is not a village average unless the study sampled villages. The best animal in a table is not the breed.",
          hi: "शोध-झुंड का माध्य हर पशु की उत्पादन क्षमता नहीं है, और जब तक अध्ययन ने गाँवों का नमूना न लिया हो, यह गाँव औसत नहीं है। तालिका का सर्वश्रेष्ठ पशु पूरी नस्ल नहीं है।",
        },
      },
      { kind: "chart", id: "yield" },
      {
        kind: "table",
        caption: {
          en: "Published production figures. Do not average these rows.",
          hi: "प्रकाशित उत्पादन आँकड़े। इन पंक्तियों का औसत न निकालें।",
        },
        source: "nddb-dkp",
        columns: ["Source", "Herd", "What was measured", "Result", "Animals"],
        rows: [
          [
            "NDDB portal",
            "Not stated",
            "Average lactation yield, and range",
            "1749 kg (913–2147 kg). Also: some farm animals above 3000 litre",
            "Not stated",
          ],
          [
            "NDRI farm page, updated 3 Apr 2025",
            "Institute Cattle Yard, Karnal",
            "Total lactation; 305-day; wet average; herd average; best 305-day; best day",
            "2334 kg; 2104 kg; 7.3 kg; 5.2 kg; best 305-day 2894 kg; best day 19.5 kg",
            "Not stated",
          ],
          [
            "Hussain et al. 2015",
            "NDRI, 1959–2011",
            "First lactation only",
            "305-day 1618 ± 49 kg; total 1823 ± 70 kg; length 321 ± 9 days",
            "230 cows",
          ],
          [
            "George et al. 2021, IJAR",
            "NDRI, 1990–2019",
            "All parities, total milk yield",
            "1633 ± 46 kg in 273 ± 5 days; peak 10.83 ± 0.17 kg",
            "190 cows, 372 records, 38 sires",
          ],
          [
            "Patel et al. 2026",
            "CAZRI, Jodhpur, 1990–2020",
            "305-day and total, in litres",
            "1803 ± 32 L in 305 days; total 1915 ± 37 L in 313 ± 4 days; peak 10.29 ± 0.12 L",
            "95 cows, 422 records",
          ],
          [
            "Bansal et al. 2026",
            "BAIF, Udaipur region, 2025–26",
            "Test-day yield, not a lactation total",
            "5.48 ± 1.63 kg/day (range 2.06–11.61)",
            "91 cattle, 237 test days",
          ],
          [
            "Gharoor et al. 1992",
            "Rakh Ghulaman, Bhakkar, Pakistan, 1965–78",
            "Lactation yield after short lactations removed",
            "1339 ± 19 kg (range 488–3101 kg)",
            "120 cows, 506 records",
          ],
        ],
      },
      {
        kind: "h",
        text: { en: "How to read the NDRI contradiction", hi: "NDRI का अंतर कैसे पढ़ें" },
      },
      {
        kind: "p",
        cites: ["ndri-farm", "hussain-2015", "george-ijar-2021"],
        text: {
          en: "The NDRI farm page prints a total lactation yield of 2334 kg. Hussain’s first-lactation total, from the same institute over 1959–2011, is about 1823 kg. George’s all-parity total for 1990–2019 is about 1633 kg. The page does not say which years or parities sit behind 2334 kg, and it does not give a sample size. The honest statement is that NDRI has published more than one Tharparkar mean, and they are not interchangeable. The “best 305-day” figure of 2894 kg and the best single day of 19.5 kg are extremes in that farm table.",
          hi: "NDRI फार्म पृष्ठ कुल ब्यांत उत्पादन 2334 किग्रा छापता है। उसी संस्थान पर 1959–2011 के हुसैन के प्रथम-ब्यांत योग लगभग 1823 किग्रा हैं। 1990–2019 के जॉर्ज के सभी-ब्यांत योग लगभग 1633 किग्रा हैं। पृष्ठ नहीं बताता कि 2334 किग्रा के पीछे कौन से वर्ष या ब्यांत क्रम हैं, और पशु संख्या नहीं देता। ईमानदार कथन यह है कि NDRI ने एक से अधिक थारपारकर माध्य प्रकाशित किए हैं, और वे परस्पर बदले नहीं जा सकते। 2894 किग्रा का “सर्वश्रेष्ठ 305-दिन” और 19.5 किग्रा का सर्वश्रेष्ठ एक दिन उस फार्म तालिका के चरम हैं।",
        },
      },
      {
        kind: "h",
        text: { en: "Lactation shape", hi: "ब्यांत का आकार" },
      },
      {
        kind: "p",
        cites: ["george-ijds-2021", "george-ijar-2021"],
        text: {
          en: "Persistency is not extra milk; it describes how slowly yield falls after the peak. On 322 records of 138 NDRI cows (1996–2018), George and colleagues compared four formulae. Least-squares means were 149.6 ± 3.07 (ratio), 0.53 ± 0.007 (Prasad), 1.83 ± 0.05 (Sölkner–Fuchs, 200 days) and 2.28 ± 0.07 (305 days). Prasad’s index had the smallest standard error relative to its mean. Which season looked more persistent changed with the formula. A second paper, using Mahadevan’s method on 1990–2019 records, reported persistency 1.27 ± 0.02 and warned that heritability was very low. Environment, not a fixed breed score, dominated that estimate.",
          hi: "स्थिरता अतिरिक्त दूध नहीं है; वह बताती है कि चरम के बाद उत्पादन कितनी धीमी गति से गिरता है। 138 NDRI गायों के 322 अभिलेखों (1996–2018) पर जॉर्ज और सहयोगियों ने चार सूत्रों की तुलना की। न्यूनतम-वर्ग माध्य 149.6 ± 3.07 (अनुपात), 0.53 ± 0.007 (प्रसाद), 1.83 ± 0.05 (सॉल्कनर–फुक्स, 200 दिन) और 2.28 ± 0.07 (305 दिन) रहे। प्रसाद सूचकांक की माध्य के सापेक्ष मानक त्रुटि सबसे छोटी थी। कौन-सा मौसम अधिक स्थिर दिखा, यह सूत्र के साथ बदला। दूसरे शोधपत्र ने 1990–2019 के अभिलेखों पर महादेवन विधि से स्थिरता 1.27 ± 0.02 बताई और चेताया कि आनुवंशिकता बहुत कम थी। उस आकलन पर स्थिर नस्ल-अंक नहीं, पर्यावरण हावी रहा।",
        },
      },
      {
        kind: "p",
        cites: ["gharoor-1992"],
        text: {
          en: "Inside the Bhakkar herd the coefficient of variation of lactation yield was 31 percent, and the range ran from under 500 kg to over 3100 kg after short lactations had already been removed. Repeatability of lactation yield was 0.305 ± 0.03, so successive lactations of the same cow were related but far from identical. That Pakistani station is not an Indian tract estimate. It is included because it is a real Tharparkar dataset and because it shows, with numbers, that one breed name covers wide individual variation.",
          hi: "भक्कर झुंड में ब्यांत उत्पादन का विचरण गुणांक 31 प्रतिशत था, और छोटे ब्यांत हटा देने के बाद भी सीमा 500 किग्रा से कम से 3100 किग्रा से अधिक तक गई। ब्यांत उत्पादन की पुनरावृत्ति 0.305 ± 0.03 रही, इसलिए एक ही गाय के क्रमिक ब्यांत संबंधित थे पर एक जैसे नहीं। वह पाकिस्तानी स्टेशन भारतीय क्षेत्र का अनुमान नहीं है। इसे इसलिए रखा गया है क्योंकि यह वास्तविक थारपारकर आँकड़ा है और क्योंकि यह संख्याओं से दिखाता है कि एक नस्ल नाम के नीचे व्यापक व्यक्तिगत भिन्नता है।",
        },
      },
    ],
  },
  {
    id: "composition",
    path: "/composition",
    nav: "production",
    title: { en: "Milk composition", hi: "दुग्ध संरचना" },
    description: {
      en: "Fat, SNF, protein and lactose figures published for Tharparkar milk, study by study.",
      hi: "थारपारकर दुग्ध के लिए प्रकाशित वसा, एसएनएफ, प्रोटीन और लैक्टोज आँकड़े, अध्ययन दर अध्ययन।",
    },
    kicker: { en: "Composition depends on the sample", hi: "संरचना नमूने पर निर्भर है" },
    lede: {
      en: "Two verified sources report composition, and they do not match. That is expected. One is an undated farm-page average from NDRI. The other is a 2025–26 set of test-day samples from 91 animals.",
      hi: "दो सत्यापित स्रोत संरचना बताते हैं, और वे मेल नहीं खाते। यह अपेक्षित है। एक NDRI का बिना तिथि वाला फार्म-पृष्ठ औसत है। दूसरा 91 पशुओं के 2025–26 परीक्षण-दिवस नमूनों का समूह है।",
    },
    related: ["milk", "nutrition"],
    blocks: [
      {
        kind: "table",
        caption: {
          en: "Composition figures that were actually printed in the sources.",
          hi: "संरचना आँकड़े जो स्रोतों में वास्तव में छपे थे।",
        },
        source: "ndri-farm",
        columns: ["Source", "Fat %", "SNF %", "Protein %", "Lactose %", "Sample"],
        rows: [
          ["NDRI farm page", "5.3", "9.1", "Not stated", "Not stated", "Not stated"],
          [
            "Bansal et al. 2026, test-day means",
            "4.10",
            "8.80",
            "3.27",
            "4.88",
            "91 animals; about 232–237 samples",
          ],
        ],
      },
      {
        kind: "p",
        cites: ["bansal-2026"],
        text: {
          en: "In the BAIF test-day set, fat ranged from 2.20 to 6.68 percent and SNF from 5.82 to 10.09 percent. Mean fat by lactation class ran from 3.93 percent (first) to 4.30 percent (fourth). The authors report that the lactation-number effect on milk yield was not significant. They also state that feed, days in milk, suckling, season, body condition and health were not available, so the percentages cannot be explained away as a diet effect. They can only be reported.",
          hi: "BAIF परीक्षण-दिवस समूह में वसा 2.20 से 6.68 प्रतिशत और एसएनएफ 5.82 से 10.09 प्रतिशत तक रही। ब्यांत वर्ग के अनुसार औसत वसा प्रथम में 3.93 प्रतिशत से चौथे में 4.30 प्रतिशत तक रही। लेखक बताते हैं कि दुग्ध मात्रा पर ब्यांत संख्या का प्रभाव सार्थक नहीं था। वे यह भी कहते हैं कि आहार, दुग्ध-दिन, स्तनपान, मौसम, शारीरिक स्थिति और स्वास्थ्य उपलब्ध नहीं थे, इसलिए प्रतिशत को आहार प्रभाव कहकर खारिज नहीं किया जा सकता। उन्हें केवल रिपोर्ट किया जा सकता है।",
        },
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "A2 beta-casein status of Tharparkar milk was not verified from a primary paper during compilation. It is not stated. Fatty-acid profiles, somatic cell counts and mineral composition are likewise omitted until a citable study is added through the editorial desk or a later reviewed edition.",
          hi: "संकलन के दौरान थारपारकर दुग्ध की A2 बीटा-केसीन स्थिति किसी प्राथमिक शोधपत्र से सत्यापित नहीं हुई। वह नहीं कही गई। वसीय-अम्ल प्रोफाइल, कायिक कोशिका गणना और खनिज संरचना भी तब तक छोड़ दी गई हैं जब तक उद्धरणीय अध्ययन संपादकीय डेस्क या बाद के समीक्षित संस्करण से न जुड़ जाए।",
        },
      },
    ],
  },
  {
    id: "reproduction",
    path: "/reproduction",
    nav: "production",
    title: { en: "Reproductive characteristics", hi: "प्रजनन विशेषताएँ" },
    description: {
      en: "Age at puberty, gestation, calving interval and related traits from named Tharparkar herds.",
      hi: "नामित थारपारकर झुंडों से यौवन आयु, गर्भकाल, ब्यांत अंतराल और संबंधित गुण।",
    },
    kicker: { en: "No universal reproductive benchmark", hi: "कोई सार्वभौमिक प्रजनन मानक नहीं" },
    lede: {
      en: "Puberty, first calving and calving interval shift with herd and with the years inside a herd. The numbers below are study results. They are not targets this site recommends to farmers, and this site does not give breeding advice as a service.",
      hi: "यौवन, प्रथम ब्यांत और ब्यांत अंतराल झुंड के साथ और झुंड के भीतर वर्षों के साथ बदलते हैं। नीचे की संख्याएँ अध्ययन परिणाम हैं। वे लक्ष्य नहीं हैं जिन्हें यह साइट पशुपालकों को सुझाती हो, और यह साइट सेवा के रूप में प्रजनन सलाह नहीं देती।",
    },
    related: ["milk", "genetics", "health"],
    blocks: [
      {
        kind: "table",
        caption: {
          en: "Reproductive means. Definitions and places differ; do not pick a favourite and call it the breed.",
          hi: "प्रजनन माध्य। परिभाषाएँ और स्थान अलग हैं; किसी एक को चुनकर नस्ल न कहें।",
        },
        source: "balamurugan-2020",
        columns: ["Trait", "Result", "Where", "Sample"],
        rows: [
          ["Age at puberty", "616.56 ± 17.55 days", "IVRI farm, 2011–2015", "55 Tharparkar"],
          ["Age at maturity", "26.0 months", "NDRI farm page", "Not stated"],
          ["Age at first calving", "42.4 months", "NDRI farm page", "Not stated"],
          ["Gestation", "286.8 ± 1.92 days", "IVRI farm, 2011–2015", "67"],
          ["Service period", "118.34 ± 5.04 days", "IVRI, 2011–2015", "132"],
          ["Service period", "136 days", "NDRI farm page", "Not stated"],
          ["First service period", "151.13 ± 16.27 days", "NDRI, first lactation, 1959–2011", "230 cows"],
          ["Calving interval", "407.05 ± 8.75 days", "IVRI, 2011–2015", "67"],
          ["Calving interval", "410 days", "NDRI farm page", "Not stated"],
          ["First calving interval", "436.75 ± 16.18 days", "NDRI, first lactation, 1959–2011", "230 cows"],
          ["Calving interval", "427.01 ± 5.49 days", "CAZRI Jodhpur, 1990–2020", "95 cows, 422 records"],
          ["Dry period", "114 days", "NDRI farm page", "Not stated"],
          ["Dry period", "114.23 ± 4.81 days", "CAZRI, 1990–2020", "95 cows"],
          ["First dry period", "99.80 ± 10.62 days", "NDRI, first lactation", "230 cows"],
          ["Inseminations per conception", "1.94", "NDRI farm page", "Not stated"],
          ["Lactation length", "330 days; also 273 to 321 days in papers", "See milk page", "Differs by study"],
        ],
      },
      {
        kind: "p",
        cites: ["balamurugan-2020", "ndri-farm", "hussain-2015", "patel-2026"],
        text: {
          en: "Age at puberty and age at maturity are not the same trait, and neither is age at first calving. IVRI’s puberty mean is about 20.3 months. NDRI’s farm page lists maturity at 26.0 months and first calving at 42.4 months. Those can sit together biologically — puberty, then a wait, then a gestation near 287 days — but only if one remembers they come from different farms and, for the NDRI page, from an unstated sample. First-lactation calving intervals at NDRI (about 437 days in Hussain’s series) are longer than the farm page’s overall 410 days. Patel’s arid-zone herd sits near 427 days. Season of calving did not significantly move first-lactation traits in Hussain’s analysis, nor the traits Patel analysed. Period of calving did matter in the long NDRI series: management and years are part of reproduction, not noise to be ignored.",
          hi: "यौवन आयु और परिपक्वता आयु एक गुण नहीं हैं, और प्रथम ब्यांत आयु भी अलग है। IVRI का यौवन माध्य लगभग 20.3 माह है। NDRI का फार्म पृष्ठ परिपक्वता 26.0 माह और प्रथम ब्यांत 42.4 माह लिखता है। जैविक रूप से ये साथ बैठ सकते हैं — यौवन, फिर प्रतीक्षा, फिर लगभग 287 दिन का गर्भ — बशर्ते याद रहे कि वे अलग फार्मों से हैं और NDRI पृष्ठ का नमूना अज्ञात है। NDRI पर प्रथम-ब्यांत अंतराल (हुसैन श्रृंखला में लगभग 437 दिन) फार्म पृष्ठ के समग्र 410 दिनों से लंबे हैं। पटेल का शुष्क-क्षेत्र झुंड लगभग 427 दिनों के पास है। हुसैन के विश्लेषण में ब्यांत के मौसम ने प्रथम-ब्यांत गुणों को सार्थक रूप से नहीं हिलाया, न पटेल के गुणों को। लंबी NDRI श्रृंखला में ब्यांत की अवधि मायने रखती थी: प्रबंधन और वर्ष प्रजनन का हिस्सा हैं, अनदेखा करने योग्य शोर नहीं।",
        },
      },
      {
        kind: "h",
        text: { en: "Artificial insemination infrastructure", hi: "कृत्रिम गर्भाधान की संरचना" },
      },
      {
        kind: "p",
        cites: ["ndri-abrc", "nbagr-gene"],
        text: {
          en: "NDRI’s Artificial Breeding Research Centre states that it maintains Tharparkar bulls and produces frozen semen, and it lists bull numbers. NBAGR’s gene bank lists Tharparkar among cattle breeds with cryopreserved semen. Neither page, in the text used here, reports a conception-rate trial that would let this site quote an AI success percentage for the breed. The NDRI farm page’s 1.94 inseminations per conception is a herd average without a printed sample size. It is not a national AI result.",
          hi: "NDRI का कृत्रिम प्रजनन अनुसंधान केन्द्र कहता है कि वह थारपारकर सांड रखता है और हिमीकृत वीर्य बनाता है, तथा सांड संख्या सूचीबद्ध करता है। NBAGR का जीन बैंक थारपारकर को हिमीकृत वीर्य वाले गोवंशों में गिनता है। प्रयुक्त पाठ में कोई भी पृष्ठ ऐसा गर्भधारण-दर परीक्षण नहीं बताता जिससे यह साइट नस्ल का कृत्रिम गर्भाधान सफलता प्रतिशत उद्धृत कर सके। NDRI फार्म पृष्ठ का 1.94 वीर्यसेचन प्रति गर्भधारण बिना छपी पशु संख्या का झुंड औसत है। यह राष्ट्रीय कृत्रिम गर्भाधान परिणाम नहीं है।",
        },
      },
    ],
  },
  {
    id: "genetics",
    path: "/genetics",
    nav: "science",
    title: { en: "Genetics and genomics", hi: "आनुवंशिकी और जीनोमिक्स" },
    description: {
      en: "Diversity, inbreeding and SNP catalogues in Tharparkar cattle, with sample sizes and plain-language terms.",
      hi: "थारपारकर में विविधता, अंतःप्रजनन और एसएनपी सूचियाँ, पशु संख्या और सरल शब्दों के साथ।",
    },
    kicker: { en: "Statistics are not breed scores", hi: "आँकड़े नस्ल-अंक नहीं हैं" },
    lede: {
      en: "Tharparkar is a Bos indicus population with measured genetic variation. The estimates depend on the marker system and on how many animals were typed. None of them is a quality mark that can be stamped on the breed.",
      hi: "थारपारकर एक Bos indicus जनसंख्या है जिसमें मापित आनुवंशिक भिन्नता है। आकलन चिह्नक प्रणाली और जाँचे गए पशुओं की संख्या पर निर्भर करते हैं। इनमें से कोई भी गुणवत्ता चिह्न नहीं है जिसे नस्ल पर लगा दिया जाए।",
    },
    related: ["conservation", "heat", "identification"],
    blocks: [
      {
        kind: "cards",
        items: [
          {
            title: { en: "Heterozygosity", hi: "विषमयुग्मता" },
            body: {
              en: "The share of individuals, or of marker sites, that carry two different versions. Higher is often read as more diversity. Microsatellite and SNP-chip values are not on the same scale.",
              hi: "उन व्यक्तियों या चिह्नक स्थलों का हिस्सा जो दो अलग रूप रखते हैं। अधिक को अक्सर अधिक विविधता पढ़ा जाता है। माइक्रोसेटेलाइट और एसएनपी-चिप मान एक ही पैमाने पर नहीं हैं।",
            },
          },
          {
            title: { en: "Inbreeding coefficient", hi: "अंतःप्रजनन गुणांक" },
            body: {
              en: "A measure of how much more homozygous a sample is than a reference expectation. FIS, FROH, FHOM, FGRM and FUNI are different formulae. In one Tharparkar SNP study they did not even rank the same.",
              hi: "यह माप कि एक नमूना संदर्भ अपेक्षा से कितना अधिक समयुग्मी है। FIS, FROH, FHOM, FGRM और FUNI अलग सूत्र हैं। एक थारपारकर एसएनपी अध्ययन में वे एक जैसा क्रम भी नहीं देते।",
            },
          },
          {
            title: { en: "Effective population size", hi: "प्रभावी जनसंख्या आकार" },
            body: {
              en: "Not a head count. A genetic idealisation of how fast diversity is being lost. A decline is a management signal. It is not, by itself, an endangered-species listing.",
              hi: "यह सिरों की गिनती नहीं। इस बात का आनुवंशिक आदर्शीकरण कि विविधता कितनी तेजी से खो रही है। गिरावट प्रबंधन संकेत है। वह स्वयं संकटग्रस्त-प्रजाति सूची नहीं है।",
            },
          },
          {
            title: { en: "SNP annotation", hi: "एसएनपी टिप्पणी" },
            body: {
              en: "A variant that falls inside a gene previously linked to a trait. It is a map reference. It is not proof that the variant changes milk or heat tolerance in this breed.",
              hi: "एक भिन्नरूप जो पहले किसी गुण से जुड़े जीन के भीतर पड़ता है। यह मानचित्र संदर्भ है। यह प्रमाण नहीं कि वह भिन्नरूप इस नस्ल में दूध या ऊष्मा सहनशीलता बदलता है।",
            },
          },
        ],
      },
      {
        kind: "h",
        text: { en: "Microsatellites, 2006", hi: "माइक्रोसेटेलाइट, 2006" },
      },
      {
        kind: "p",
        cites: ["sodhi-2006"],
        text: {
          en: "Sodhi, Mukesh, Prakash, Ahlawat and Sobti typed 50 animals at 25 microsatellites. They found 4 to 11 alleles per locus (mean 6.20), observed heterozygosity 0.57, expected heterozygosity 0.67 and mean polymorphism information content 0.60. Mean FIS was 0.39. The authors’ own reading was substantial variability despite accumulated inbreeding, and no recent bottleneck in the sampled population. FIS of 0.39 is high for a livestock interpretation, and it belongs to that sample and marker set. It is not a 2026 breed score.",
          hi: "सोधी, मुकेश, प्रकाश, अहलावत और सोबती ने 50 पशुओं को 25 माइक्रोसेटेलाइट पर जाँचा। प्रति लोकस 4 से 11 एलील (माध्य 6.20), प्रेक्षित विषमयुग्मता 0.57, अपेक्षित 0.67 और औसत बहुरूपता सूचना मात्रा 0.60 मिली। औसत FIS 0.39 था। लेखकों की अपनी पढ़त थी: संचित अंतःप्रजनन के बावजूद पर्याप्त विविधता, और नमूना जनसंख्या में हाल का बॉटलनेक नहीं। 0.39 का FIS पशुधन व्याख्या में ऊँचा है, और वह उस नमूने तथा चिह्नक समूह का है। वह 2026 का नस्ल-अंक नहीं है।",
        },
      },
      {
        kind: "h",
        text: { en: "A 50K SNP array, 24 animals", hi: "50K एसएनपी ऐरे, 24 पशु" },
      },
      {
        kind: "p",
        cites: ["saravanan-2022"],
        text: {
          en: "Saravanan and colleagues genotyped 24 Tharparkar animals on the Illumina BovineSNP50 chip and kept 22,825 SNPs after quality control. Mean observed heterozygosity was 0.339 ± 0.156 and expected heterozygosity 0.325 ± 0.129. They counted 1,832 runs of homozygosity, with the greatest autosomal coverage (13.87 percent) on chromosome 23. Four genomic inbreeding estimates were FROH 0.0589, FHOM 0.0215, FGRM 0.0532 and FUNI 0.0160. Mean linkage disequilibrium was D′ 0.6452 and r² 0.1339 across 133,532 SNP pairs. They also describe a gradual decline in effective population size over past generations. Twenty-four animals cannot represent every herd in the tract. The chip was designed largely around taurine variation, so these heterozygosity figures must not be subtracted from Sodhi’s microsatellite figures and called a “loss of diversity”.",
          hi: "सरवानन और सहयोगियों ने 24 थारपारकर पशुओं का इल्यूमिना बोवाइनएसएनपी50 चिप पर जीनोटाइप किया और गुणवत्ता नियंत्रण के बाद 22,825 एसएनपी रखे। औसत प्रेक्षित विषमयुग्मता 0.339 ± 0.156 और अपेक्षित 0.325 ± 0.129 रही। उन्होंने होमोजाइगोसिटी के 1,832 रन गिने, सबसे अधिक ऑटोसोमल कवरेज (13.87 प्रतिशत) गुणसूत्र 23 पर। चार जीनोमिक अंतःप्रजनन आकलन FROH 0.0589, FHOM 0.0215, FGRM 0.0532 और FUNI 0.0160 रहे। 1,33,532 एसएनपी युग्मों पर औसत लिंकेज डिसइक्विलिब्रियम D′ 0.6452 और r² 0.1339 था। वे पिछली पीढ़ियों में प्रभावी जनसंख्या आकार की क्रमिक गिरावट भी बताते हैं। चौबीस पशु क्षेत्र के हर झुंड का प्रतिनिधित्व नहीं कर सकते। चिप अधिकतर टॉरीन भिन्नता के आसपास डिज़ाइन हुई थी, इसलिए इन विषमयुग्मता आँकड़ों को सोधी के माइक्रोसेटेलाइट आँकड़ों से घटाकर “विविधता की हानि” नहीं कहा जाना चाहिए।",
        },
      },
      {
        kind: "h",
        text: { en: "A SNP catalogue is not a gene test for merit", hi: "एसएनपी सूची योग्यता की जीन परीक्षा नहीं है" },
      },
      {
        kind: "p",
        cites: ["devadasan-2020"],
        text: {
          en: "Devadasan and colleagues, at NDRI and NBAGR, reported 146,011 SNPs against a Bos taurus reference (10,519 called novel) and 87,047 against a Bos indicus reference. Of the indicine calls, 2,871 SNPs fell in 383 genes previously connected with milk, fertility, carcass, immune response or adaptability. They also reported 2,571 microsatellites. Data were deposited as NCBI BioProject PRJNA633222. The abstract used here does not state the number of animals, so this site does not guess it. A SNP “associated” by falling inside a candidate gene has not been shown, in that paper’s abstract, to change a measured trait in Tharparkar.",
          hi: "देवदासन और सहयोगियों ने NDRI और NBAGR में Bos taurus संदर्भ के विरुद्ध 1,46,011 एसएनपी (10,519 नए कहे गए) और Bos indicus संदर्भ के विरुद्ध 87,047 बताए। इंडिकाइन कॉल्स में से 2,871 एसएनपी उन 383 जीनों में पड़े जो पहले दूध, प्रजनन, शव, प्रतिरक्षा प्रतिक्रिया या अनुकूलन से जुड़े थे। उन्होंने 2,571 माइक्रोसेटेलाइट भी बताए। डेटा NCBI बायोप्रोजेक्ट PRJNA633222 के रूप में जमा हैं। प्रयुक्त सार पशु संख्या नहीं बताता, इसलिए यह साइट अनुमान नहीं लगाती। किसी अभ्यर्थी जीन के भीतर पड़ने से “संबंधित” एसएनपी को उस शोधपत्र के सार में थारपारकर के मापित गुण को बदलते हुए नहीं दिखाया गया।",
        },
      },
      {
        kind: "p",
        cites: ["gharoor-1992", "george-ijar-2021"],
        text: {
          en: "On the breeding side, repeatability of lactation yield in the 1992 Bhakkar study was moderate (0.30), while George’s later NDRI analysis found very low heritability for lactation persistency. Selection on persistency alone was not supported by that heritability. This is not a review of every breeding-value paper; it is a warning against turning one genetic statistic into a programme.",
          hi: "प्रजनन पक्ष पर, 1992 के भक्कर अध्ययन में ब्यांत उत्पादन की पुनरावृत्ति मध्यम (0.30) थी, जबकि जॉर्ज के बाद के NDRI विश्लेषण में दुग्ध स्थिरता की आनुवंशिकता बहुत कम मिली। केवल स्थिरता पर चयन को उस आनुवंशिकता ने समर्थन नहीं दिया। यह हर प्रजनन-मूल्य शोधपत्र की समीक्षा नहीं है; यह चेतावनी है कि एक आनुवंशिक आँकड़े को कार्यक्रम न बना दें।",
        },
      },
    ],
  },
  {
    id: "heat",
    path: "/heat",
    nav: "science",
    title: { en: "Heat tolerance and climate adaptation", hi: "ऊष्मा सहनशीलता और जलवायु अनुकूलन" },
    description: {
      en: "Controlled and seasonal studies of how Tharparkar cattle respond to heat, including later published chamber, fibroblast and transcriptome articles.",
      hi: "थारपारकर पशु ऊष्मा पर कैसे प्रतिक्रिया करते हैं, इसके नियंत्रित और मौसमी अध्ययन, बाद में प्रकाशित कक्ष, तंतुकोशिका और ट्रांसक्रिप्टोम लेखों सहित।",
    },
    kicker: { en: "Adapted is not immune", hi: "अनुकूलित का अर्थ मुक्त नहीं" },
    lede: {
      en: "Tharparkar cattle are studied as a hot-climate zebu. The experiments show smaller physiological shifts than some comparison groups. They also show that rectal temperature and respiration still rise in summer and in climate chambers. That is heat strain, not immunity.",
      hi: "थारपारकर पशुओं का अध्ययन गर्म जलवायु के ज़ेबू के रूप में होता है। प्रयोग कुछ तुलना समूहों की अपेक्षा छोटे शारीरिक बदलाव दिखाते हैं। वे यह भी दिखाते हैं कि गर्मियों में और जलवायु कक्ष में मलाशय तापमान और श्वसन फिर भी बढ़ते हैं। यह ऊष्मा का तनाव है, मुक्ति नहीं।",
    },
    related: ["genetics", "health", "nutrition", "tract"],
    blocks: [
      { kind: "chart", id: "heat" },
      {
        kind: "p",
        cites: ["bhat-2016"],
        text: {
          en: "Bhat and colleagues followed 64 Tharparkar cattle across winter, spring and summer, recording rectal temperature and respiration at 10:00 and 14:00 for three days each season. Average rectal temperature moved from 38.39 ± 0.03 °C in winter to 38.89 ± 0.03 °C in summer. Respiration moved from 14.88 ± 0.09 to 17.3 ± 0.11 breaths per minute. Their heat-tolerance coefficient, defined as 100 minus ten times the excess of average rectal temperature over 38.3 °C, fell from 99.05 ± 0.29 to 94.13 ± 0.29. The coefficient is a rescaling of temperature. It is useful for comparing genotypes inside the study. It is not a percentage of immunity.",
          hi: "भट्ट और सहयोगियों ने 64 थारपारकर पशुओं को सर्दी, बसंत और गर्मी में देखा, हर मौसम में तीन दिन 10:00 और 14:00 बजे मलाशय तापमान और श्वसन दर्ज किया। औसत मलाशय तापमान सर्दी के 38.39 ± 0.03 °C से गर्मी में 38.89 ± 0.03 °C हुआ। श्वसन 14.88 ± 0.09 से 17.3 ± 0.11 श्वास प्रति मिनट हुआ। उनका ऊष्मा-सहिष्णुता गुणांक — औसत मलाशय तापमान के 38.3 °C से ऊपर के अंश का दस गुना, 100 में से घटाकर — 99.05 ± 0.29 से 94.13 ± 0.29 रह गया। गुणांक तापमान का पुनर्मापन है। अध्ययन के भीतर जीनोटाइप की तुलना के लिए उपयोगी है। वह मुक्ति का प्रतिशत नहीं है।",
        },
      },
      {
        kind: "h",
        text: { en: "One HSP70 variant inside that sample", hi: "उसी नमूने में एक HSP70 भिन्नरूप" },
      },
      {
        kind: "p",
        cites: ["bhat-2016"],
        text: {
          en: "A 295 base-pair fragment of HSP70 showed a coding polymorphism. Across seasons, genotype AA kept a lower average rectal temperature (38.48 ± 0.03 °C) and a higher coefficient (98.22 ± 0.28) than AB (96.58 ± 0.27) and BB (95.22 ± 0.29). Summer respiration was 16.74 ± 0.22, 17.24 ± 0.21 and 17.93 ± 0.23 breaths per minute for AA, AB and BB. The authors call allele A favourable and say the locus may help selection, after validation in other breeds and a larger population. That caveat is part of the result. An AA genotype in this panel is not a universal heat-proof certificate, and the paper does not show that it raises milk yield.",
          hi: "HSP70 के 295 क्षार-युग्म खंड में एक कोडिंग बहुरूपता मिली। सभी मौसमों में जीनोटाइप AA का औसत मलाशय तापमान (38.48 ± 0.03 °C) और गुणांक (98.22 ± 0.28) AB (96.58 ± 0.27) तथा BB (95.22 ± 0.29) से बेहतर रहा। गर्मियों की श्वसन दर AA, AB और BB के लिए 16.74 ± 0.22, 17.24 ± 0.21 और 17.93 ± 0.23 श्वास प्रति मिनट रही। लेखक एलील A को अनुकूल कहते हैं और कहते हैं कि अन्य नस्लों तथा बड़े नमूने में पुष्टि के बाद यह लोकस चयन में सहायक हो सकता है। वह चेतावनी परिणाम का हिस्सा है। इस पैनल का AA जीनोटाइप सार्वभौमिक ऊष्मा-मुक्त प्रमाणपत्र नहीं है, और शोधपत्र नहीं दिखाता कि यह दुग्ध बढ़ाता है।",
        },
      },
      {
        kind: "h",
        text: { en: "Chambers, calves, and a crossbred comparison", hi: "कक्ष, बछड़े, और एक संकर तुलना" },
      },
      {
        kind: "p",
        cites: ["jose-2022", "jose-2020"],
        text: {
          en: "At IVRI, Jose and colleagues compared six Tharparkar and six crossbred male calves, 5–6 months old, under induced heat. In the 2022 chamber paper they report smaller displacements of rectal temperature and respiration in the Tharparkar calves at moderate and severe heat, lower serum T3 which they read as lower metabolic load, higher eNOS expression which they read as better heat dissipation, and a pattern of lower HSP70 with higher HSP90 mRNA. A 2020 exposure series at 25, 31 and 37 °C found that dry-matter intake fell in both groups while the rise in water intake was relatively larger in the crossbred calves. Interleukin-1β and interleukin-10 expression did not differ significantly. These are calf studies, six animals on the Tharparkar side, in Bareilly rather than in the Thar, against a crossbred group rather than against Sahiwal or Kankrej. “More thermo-tolerant than these crossbred calves, in this chamber” is the claim the papers support. Complete immunity is not.",
          hi: "IVRI में जोस और सहयोगियों ने प्रेरित ऊष्मा में छह थारपारकर और छह संकर नर बछड़ों, 5–6 माह, की तुलना की। 2022 के कक्ष शोधपत्र में वे थारपारकर बछड़ों में मध्यम और तीव्र ऊष्मा पर मलाशय तापमान तथा श्वसन का छोटा विस्थापन, कम सीरम T3 जिसे वे कम चयापचय भार पढ़ते हैं, अधिक eNOS अभिव्यक्ति जिसे वे बेहतर ऊष्मा अपव्यय पढ़ते हैं, और कम HSP70 के साथ अधिक HSP90 mRNA का पैटर्न बताते हैं। 2020 की 25, 31 और 37 °C श्रृंखला में दोनों समूहों का शुष्क-पदार्थ ग्रहण गिरा, जबकि जल ग्रहण की वृद्धि संकर बछड़ों में अपेक्षाकृत बड़ी रही। इंटरल्यूकिन-1β और इंटरल्यूकिन-10 की अभिव्यक्ति में सार्थक अंतर नहीं था। ये बछड़ों के अध्ययन हैं, थारपारकर पक्ष पर छह पशु, थार के बजाय बरेली में, साहीवाल या कांकरेज के बजाय एक संकर समूह के विरुद्ध। “इस कक्ष में इन संकर बछड़ों से अधिक ऊष्मा-सहिष्णु” वह दावा है जिसका शोधपत्र समर्थन करते हैं। पूर्ण मुक्ति नहीं।",
        },
      },
      {
        kind: "p",
        cites: ["patel-2026", "nddb-dkp"],
        text: {
          en: "A field-side echo, not a physiology trial: in the CAZRI Jodhpur herd, season of calving was non-significant for the production and reproduction traits Patel analysed, and the authors offer that as a sign of adaptation to arid extremes. NDDB’s breed page states the climatic reputation directly, including use of sewan in drought. Reputation, a non-significant season effect, and a chamber difference are three grades of evidence. They point the same way. They are not the same fact.",
          hi: "मैदान की एक प्रतिध्वनि, शरीरक्रिया परीक्षण नहीं: CAZRI जोधपुर झुंड में ब्यांत का मौसम पटेल द्वारा विश्लेषित उत्पादन और प्रजनन गुणों के लिए असार्थक रहा, और लेखक इसे शुष्क चरम के अनुकूलन का संकेत मानते हैं। NDDB का नस्ल पृष्ठ जलवायु प्रतिष्ठा सीधे कहता है, जिसमें सूखे में सेवण का उपयोग शामिल है। प्रतिष्ठा, असार्थक मौसम प्रभाव, और कक्ष अंतर — प्रमाण के तीन स्तर हैं। वे एक दिशा में इशारा करते हैं। वे एक ही तथ्य नहीं हैं।",
        },
      },
      {
        kind: "h",
        text: { en: "Further published articles", hi: "और प्रकाशित शोधपत्र" },
      },
      {
        kind: "p",
        text: {
          en: "The studies below were added after the seasonal panel and the calf-chamber papers already on this page. Each one is a published article with its own sample. None of them replaces Bhat’s Celsius series on the chart, and none of them is a Thar walking trial.",
          hi: "नीचे के अध्ययन इस पृष्ठ पर पहले से मौजूद मौसमी पैनल और बछड़ा-कक्ष शोधपत्रों के बाद जोड़े गए हैं। हर एक अपने नमूने वाला प्रकाशित लेख है। कोई भी चार्ट की भट्ट वाली सेल्सियस श्रृंखला को नहीं बदलता, और कोई भी थार में चलने का परीक्षण नहीं है।",
        },
      },
      {
        kind: "list",
        items: [
          {
            cites: ["bharati-hsp70-2017"],
            text: {
              en: "Bharati and colleagues, 2017, International Journal of Biometeorology. Six males aged 2–3 years at IVRI: 15 days thermoneutral, then up to 23 days at 42 °C, then 12 days of recovery. HSP70 mRNA, cell protein and serum HSP70 rose, with peaks on day 17 and day 32 (the 2nd and 17th days of the heat challenge). Expression after 10 days was higher than in the first 5 days. The authors call the second peak a possible second window of protection. Six males are not a breed constant, and a chaperone curve is not a milk result.",
              hi: "भारती और सहयोगी, 2017, इंटरनेशनल जर्नल ऑफ बायोमेटियोरोलॉजी। IVRI में 2–3 वर्ष के छह नर: 15 दिन ताप-तटस्थ, फिर 23 दिन तक 42 °C, फिर 12 दिन पुनर्प्राप्ति। HSP70 mRNA, कोशिका प्रोटीन और सीरम HSP70 बढ़े, शिखर दिन 17 और दिन 32 पर (ऊष्मा चुनौती का दूसरा और सत्रहवाँ दिन)। दस दिन बाद की अभिव्यक्ति पहले पाँच दिनों से अधिक रही। लेखक दूसरे शिखर को सुरक्षा की संभावित दूसरी खिड़की कहते हैं। छह नर नस्ल-स्थिरांक नहीं, और चैपरोन वक्र दुग्ध परिणाम नहीं।",
            },
          },
          {
            cites: ["bharati-tlr-2017", "bharati-hsp70-2017"],
            text: {
              en: "The same group’s 2017 Journal of Thermal Biology paper measures Toll-like receptors and interleukins on a matching design: six males, 2–3 years, 42 °C for 6 hours a day, up to 23 days. TLR2 rose only in the short-term window and then returned toward baseline. TLR4 stayed up through the long-term window. IL-2 and IL-6 rose short-term and eased later. Because the design matches the HSP70 paper, this site does not count a second herd. Cytokine transcripts are not disease resistance.",
              hi: "उसी समूह का 2017 का जर्नल ऑफ थर्मल बायोलॉजी शोधपत्र मेल खाती रूपरेखा पर टोल-जैसे ग्राही और इंटरल्यूकिन मापता है: छह नर, 2–3 वर्ष, प्रतिदिन 6 घंटे 42 °C, 23 दिन तक। TLR2 केवल अल्पकालिक खिड़की में बढ़ा और फिर आधार रेखा की ओर लौटा। TLR4 दीर्घकालिक खिड़की तक बढ़ा रहा। IL-2 और IL-6 अल्पकाल में बढ़े और बाद में ढीले पड़े। रूपरेखा HSP70 शोधपत्र से मेल खाती है, इसलिए यह साइट दूसरा झुंड नहीं गिनती। साइटोकाइन प्रतिलेख रोग-प्रतिरोध नहीं हैं।",
            },
          },
          {
            cites: ["pandey-2017"],
            text: {
              en: "Pandey, Hooda and Kumar, 2017, Veterinary World. Tharparkar and Karan Fries heifers, 4 hours a day for 5 days, at 40 °C and 42 °C with 500 or 600 ppm carbon dioxide, against a 25 °C and 400 ppm control. Respiration, pulse and rectal temperature rose in both breeds and were higher in Karan Fries. Red cells, haemoglobin and packed cell volume rose; leukocyte counts did not change significantly. The abstract does not give the number of heifers or the degree values, so neither is printed here. Heat and extra CO2 were applied together.",
              hi: "पांडे, हुड्डा और कुमार, 2017, वेटेरिनरी वर्ल्ड। थारपारकर और करण फ्रीज बछड़ियाँ, 5 दिन तक प्रतिदिन 4 घंटे, 40 °C और 42 °C पर 500 या 600 ppm कार्बन डाइऑक्साइड के साथ, 25 °C और 400 ppm नियंत्रण के विरुद्ध। श्वसन, नाड़ी और मलाशय तापमान दोनों नस्लों में बढ़े और करण फ्रीज में अधिक रहे। लाल कोशिकाएँ, हीमोग्लोबिन और संकुल कोशिका आयतन बढ़े; श्वेत कोशिका गणना सार्थक रूप से नहीं बदली। सार बछड़ियों की संख्या या डिग्री मान नहीं देता, इसलिए यहाँ नहीं छपे। ऊष्मा और अतिरिक्त CO2 साथ दिए गए।",
            },
          },
          {
            cites: ["singh-ak-2020"],
            text: {
              en: "A.K. Singh and colleagues, 2020, Cell Stress and Chaperones, open access. Cultured skin fibroblasts, not whole animals. At a twofold cutoff, 11,183 transcripts moved in Tharparkar cells and 8,126 in Karan Fries cells. A PCR check agreed with the array on 83.33% of a random subset. Upregulated pathways included protein processing and NOD-like receptors; downregulated pathways included cell cycle, metabolism and protein transport. The abstract does not say how many donors were biopsied. A dish is not a cow, and more genes moving is not by itself more tolerance.",
              hi: "ए.के. सिंह और सहयोगी, 2020, सेल स्ट्रेस एंड चैपरोन्स, खुली पहुँच। संवर्धित त्वचा तंतुकोशिकाएँ, पूरे पशु नहीं। दुगुनी सीमा पर थारपारकर कोशिकाओं में 11,183 प्रतिलेख हिले और करण फ्रीज में 8,126। यादृच्छिक उपसमुच्चय पर पीसीआर जाँच सारणी से 83.33% मिली। बढ़े मार्गों में प्रोटीन प्रसंस्करण और NOD-जैसे ग्राही; घटे मार्गों में कोशिका चक्र, चयापचय और प्रोटीन परिवहन। सार नहीं कहता कि कितने दाताओं की बायोप्सी हुई। प्लेट गाय नहीं है, और अधिक जीनों का हिलना अपने आप अधिक सहनशीलता नहीं।",
            },
          },
          {
            cites: ["anjali-2023", "anjali-thyroid-2023"],
            text: {
              en: "Anjali and colleagues, 2023, two papers on one series: five Tharparkar and five Sahiwal, at 35 °C and 42 °C (the hormone paper also includes 25 °C). In Livestock Science, AST, ALT, ALP and cholesterol were higher in Sahiwal, as were HSP70, TLR2, TLR4, IL-1, IL-10 and TNF-α transcripts. HSP90 and eNOS were higher in Tharparkar. In Tropical Animal Health and Production, thyroxine fell more and cortisol rose more in Sahiwal; the breed difference in T3 was not significant. Five versus five is a chamber contrast with Sahiwal, not a verdict on every Sahiwal herd, and the two papers are not two replications.",
              hi: "अंजलि और सहयोगी, 2023, एक श्रृंखला पर दो शोधपत्र: पाँच थारपारकर और पाँच साहीवाल, 35 °C और 42 °C पर (हार्मोन शोधपत्र में 25 °C भी)। लाइवस्टॉक साइंस में AST, ALT, ALP और कोलेस्ट्रॉल साहीवाल में अधिक रहे, वैसे ही HSP70, TLR2, TLR4, IL-1, IL-10 और TNF-α प्रतिलेख। HSP90 और eNOS थारपारकर में अधिक रहे। ट्रॉपिकल एनिमल हेल्थ एंड प्रोडक्शन में थायरॉक्सिन साहीवाल में अधिक गिरा और कोर्टिसोल अधिक बढ़ा; T3 में नस्ल अंतर सार्थक नहीं था। पाँच बनाम पाँच साहीवाल से कक्ष तुलना है, हर साहीवाल झुंड का फ़ैसला नहीं, और दोनों शोधपत्र दो पुनरावृत्तियाँ नहीं हैं।",
            },
          },
          {
            cites: ["singh-ayushi-2024"],
            text: {
              en: "Ayushi Singh and colleagues, 2024, 3 Biotech, NDRI Karnal. Five Tharparkar heifers: blood from two in March (THI 72) and from three different heifers in August (THI 80). About 3,280 genes differed (|log2 fold change| ≥ 1, P ≤ 0.05): 1,207 up, 2,073 down. Up included insulin activation, interferons, potassium transport and chemokine signalling. Down included RNA processing, translation and ubiquitination. Named examples include NPFFR1, ROBO3, KCNG2 and ATP1A2 among activated calls, and EIF4A, EIF4B, VPS4B and PEX13 among downregulated calls. Different animals in the two seasons, and five libraries in total, make this a hypothesis list. It does not report milk loss.",
              hi: "आयुषी सिंह और सहयोगी, 2024, 3 बायोटेक, NDRI करनाल। पाँच थारपारकर बछड़ियाँ: मार्च में दो का रक्त (THI 72) और अगस्त में तीन अन्य बछड़ियों का (THI 80)। लगभग 3,280 जीन भिन्न रहे (|log2 गुना बदलाव| ≥ 1, P ≤ 0.05): 1,207 बढ़े, 2,073 घटे। बढ़े में इंसुलिन सक्रियण, इंटरफेरॉन, पोटैशियम परिवहन और केमोकाइन संकेत। घटे में आरएनए प्रसंस्करण, अनुवाद और यूबिक्विटिनेशन। सक्रिय कॉल्स में उदाहरण NPFFR1, ROBO3, KCNG2 और ATP1A2; घटे कॉल्स में EIF4A, EIF4B, VPS4B और PEX13। दोनों मौसमों में अलग पशु, और कुल पाँच लाइब्रेरी, इसे परिकल्पना-सूची बनाते हैं। यह दुग्ध हानि नहीं बताता।",
            },
          },
          {
            cites: ["vaishnav-2025"],
            text: {
              en: "Vaishnav and colleagues, 2025, International Journal of Veterinary Sciences and Animal Husbandry. Three adult Tharparkar and three adult Vrindavani at IVRI. After a November baseline (THI 53.6–67.5), animals spent 6 hours a day at 40 °C for 7 days (THI 85.24–88.12). Tharparkar rectal temperature went from 100.5 ± 0.66 °F to 103.1 ± 0.50 °F and respiration from 27.3 ± 0.58 to 40.0 ± 1.0 breaths/min. Vrindavani went from 102.3 ± 0.45 °F to 104.0 ± 0.20 °F and from 36.0 ± 1.0 to 52.3 ± 0.58 breaths/min. Creatinine rose from 0.91 ± 0.16 to 1.27 ± 0.09 mg/dL versus 1.15 ± 0.10 to 1.64 ± 0.24 mg/dL. Cortisol rose from 4.03 ± 0.31 to 6.07 ± 0.45 ng/mL versus 5.1 ± 0.3 to 10.33 ± 0.71 ng/mL, which the authors call a 102.5% surge in the crossbred. Temperatures stay in Fahrenheit so they are not silently merged with Bhat’s chart. Three animals cannot support a breed-promotion claim.",
              hi: "वैष्णव और सहयोगी, 2025, इंटरनेशनल जर्नल ऑफ वेटेरिनरी साइंसेज एंड एनिमल हस्बेंड्री। IVRI में तीन वयस्क थारपारकर और तीन वयस्क वृंदावनी। नवंबर की आधार रेखा (THI 53.6–67.5) के बाद पशु 7 दिन तक प्रतिदिन 6 घंटे 40 °C पर रहे (THI 85.24–88.12)। थारपारकर का मलाशय तापमान 100.5 ± 0.66 °F से 103.1 ± 0.50 °F और श्वसन 27.3 ± 0.58 से 40.0 ± 1.0 श्वास/मिनट हुआ। वृंदावनी 102.3 ± 0.45 °F से 104.0 ± 0.20 °F और 36.0 ± 1.0 से 52.3 ± 0.58 श्वास/मिनट। क्रिएटिनिन 0.91 ± 0.16 से 1.27 ± 0.09 mg/dL बनाम 1.15 ± 0.10 से 1.64 ± 0.24 mg/dL बढ़ा। कोर्टिसोल 4.03 ± 0.31 से 6.07 ± 0.45 ng/mL बनाम 5.1 ± 0.3 से 10.33 ± 0.71 ng/mL बढ़ा, जिसे लेखक संकर में 102.5% उछाल कहते हैं। तापमान फ़ारेनहाइट में रखे गए हैं ताकि वे चुपचाप भट्ट के चार्ट में न मिल जाएँ। तीन पशु नस्ल-प्रचार का दावा नहीं उठा सकते।",
            },
          },
        ],
      },
      {
        kind: "callout",
        tone: "limit",
        cites: ["bharati-hsp70-2017", "anjali-2023", "singh-ayushi-2024", "vaishnav-2025"],
        text: {
          en: "Read together, these articles say Tharparkar cattle in the sampled herds shifted less than Karan Fries, Vrindavani or Sahiwal under the stated chamber or seasonal contrasts, while still showing a real stress response: hotter bodies, faster breathing, HSP70 induction, and large gene-expression changes. They do not say every Tharparkar cow is equally tolerant, and they do not measure animals walking for water in the Thar.",
          hi: "साथ पढ़ें तो ये लेख कहते हैं कि नमूना झुंडों के थारपारकर पशु बताई कक्ष या मौसमी तुलना में करण फ्रीज, वृंदावनी या साहीवाल से कम हिले, और फिर भी वास्तविक तनाव-प्रतिक्रिया दिखाते हैं: गर्म शरीर, तेज़ श्वसन, HSP70 प्रेरण, और बड़े जीन-अभिव्यक्ति बदलाव। वे नहीं कहते कि हर थारपारकर गाय समान रूप से सहनशील है, और वे थार में पानी के लिए चलते पशुओं को नहीं मापते।",
        },
      },
    ],
  },
  {
    id: "nutrition",
    path: "/nutrition",
    nav: "science",
    title: { en: "Nutrition and management research", hi: "पोषण और प्रबंधन अनुसंधान" },
    description: {
      en: "What is known from Tharparkar studies about feeding, and what must not be invented as a breed ration.",
      hi: "आहार के बारे में थारपारकर अध्ययनों से क्या ज्ञात है, और नस्ल राशन के रूप में क्या नहीं गढ़ना चाहिए।",
    },
    kicker: { en: "Breed findings separated from general cattle feeding", hi: "सामान्य गो-आहार से अलग नस्ल निष्कर्ष" },
    lede: {
      en: "A Tharparkar-specific nutrient requirement table — dry matter, protein and energy by body weight and stage — was not found in the sources reviewed for this edition. General cattle rations are therefore not relabelled as Tharparkar standards.",
      hi: "शरीर भार और अवस्था के अनुसार शुष्क पदार्थ, प्रोटीन और ऊर्जा की थारपारकर-विशिष्ट पोषक आवश्यकता तालिका इस संस्करण के समीक्षित स्रोतों में नहीं मिली। इसलिए सामान्य गो-राशन को थारपारकर मानक का नाम नहीं दिया गया।",
    },
    related: ["milk", "heat", "health"],
    blocks: [
      {
        kind: "h",
        text: { en: "What can be cited", hi: "जो उद्धृत किया जा सकता है" },
      },
      {
        kind: "list",
        items: [
          {
            cites: ["nddb-dkp"],
            text: {
              en: "NDDB states that the animals can thrive on small bushy vegetation, naming sewan grass, during drought and fodder scarcity, and still produce the milk quantity discussed on the milk page. The page gives no intake in kilograms and no chemical composition of the grass.",
              hi: "NDDB कहता है कि पशु सूखे और चारे की कमी में छोटी झाड़ीदार वनस्पति, जिसका नाम सेवण घास है, पर टिक सकते हैं और फिर भी दुग्ध पृष्ठ पर चर्चित मात्रा दे सकते हैं। पृष्ठ किलोग्राम में ग्रहण या घास का रासायनिक संघटन नहीं देता।",
            },
          },
          {
            cites: ["nddb-dkp"],
            text: {
              en: "The same portal says that good animals with high nutrition have exceeded 3000 litres per lactation in farm conditions. “High nutrition” is not defined as a ration.",
              hi: "वही पोर्टल कहता है कि अच्छी खुराक वाले अच्छे पशुओं ने फार्म अवस्था में प्रति ब्यांत 3000 लीटर से अधिक दिया है। “अच्छी खुराक” को राशन के रूप में परिभाषित नहीं किया गया।",
            },
          },
          {
            cites: ["jose-2020"],
            text: {
              en: "In Tharparkar and crossbred calves at IVRI, dry-matter intake declined when chamber temperature was raised to 31 °C and 37 °C, and water intake rose, relatively more so in the crossbred calves. Kilogram values were not printed in the summary used here and are not invented.",
              hi: "IVRI के थारपारकर और संकर बछड़ों में कक्ष तापमान 31 °C और 37 °C करने पर शुष्क-पदार्थ ग्रहण गिरा और जल ग्रहण बढ़ा, संकर बछड़ों में अपेक्षाकृत अधिक। प्रयुक्त सार में किलोग्राम मान नहीं छपे और गढ़े नहीं गए।",
            },
          },
          {
            cites: ["patel-2026", "hussain-2015"],
            text: {
              en: "Authors of the long herd analyses attribute part of the change in milk across decades to management, including feeding, but they do not publish the rations behind the means.",
              hi: "लंबे झुंड विश्लेषणों के लेखक दशकों में दुग्ध परिवर्तन का एक हिस्सा प्रबंधन, जिसमें आहार शामिल है, को देते हैं, पर वे माध्यों के पीछे के राशन प्रकाशित नहीं करते।",
            },
          },
        ],
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "Not included, because a Tharparkar-specific primary source was not verified: green-fodder kilograms, concentrate schedules for pregnancy or lactation, mineral premixes, calf starter formulae, and body-condition targets. ICAR and NDDB handbooks contain general cattle guidance. Copying them onto this breed page would pretend they had been measured in Tharparkar. They were not, in the documents compiled here.",
          hi: "शामिल नहीं, क्योंकि थारपारकर-विशिष्ट प्राथमिक स्रोत सत्यापित नहीं हुआ: हरे चारे के किलोग्राम, गर्भावस्था या दुग्धकाल की दाना सारणियाँ, खनिज प्रिमिक्स, बछड़ा स्टार्टर सूत्र, और शारीरिक-स्थिति लक्ष्य। ICAR और NDDB पुस्तिकाओं में सामान्य गो-मार्गदर्शन है। उन्हें इस नस्ल पृष्ठ पर उतारना यह नाटक होगा कि वे थारपारकर में मापे गए थे। यहाँ संकलित दस्तावेजों में वे नहीं मापे गए।",
        },
      },
      {
        kind: "p",
        cites: ["bansal-2026"],
        text: {
          en: "The 2026 test-day composition study is explicit about this hole: without feed intake, the authors could not analyse nutrition as a cause of the yields they measured. That limitation is why this page refuses to explain their 5.48 kg test-day mean as a feeding success or a feeding failure.",
          hi: "2026 का परीक्षण-दिवस संरचना अध्ययन इस कमी को स्पष्ट कहता है: आहार ग्रहण के बिना लेखक अपने मापे उत्पादन का कारण पोषण को नहीं बना सके। इसी सीमा के कारण यह पृष्ठ उनके 5.48 किग्रा परीक्षण-दिवस माध्य को आहार की सफलता या असफलता नहीं बताता।",
        },
      },
    ],
  },
  {
    id: "health",
    path: "/health",
    nav: "science",
    title: { en: "Health and disease research", hi: "स्वास्थ्य और रोग अनुसंधान" },
    description: {
      en: "Health-related Tharparkar research that was verified, and disease claims that were not.",
      hi: "सत्यापित थारपारकर स्वास्थ्य शोध, और रोग दावे जो सत्यापित नहीं हुए।",
    },
    kicker: { en: "No immunity claims", hi: "मुक्ति के दावे नहीं" },
    lede: {
      en: "NDDB’s breed page uses the words “disease resistant”. The experimental papers compiled here are mostly about heat strain and stress-related gene expression. They do not show that Tharparkar cattle are immune to any named disease. This page does not prescribe treatments.",
      hi: "NDDB का नस्ल पृष्ठ “disease resistant” शब्द इस्तेमाल करता है। यहाँ संकलित प्रायोगिक शोधपत्र अधिकतर ऊष्मा तनाव और तनाव-संबंधी जीन अभिव्यक्ति के बारे में हैं। वे नहीं दिखाते कि थारपारकर पशु किसी नामित रोग से मुक्त हैं। यह पृष्ठ उपचार नहीं लिखता।",
    },
    related: ["heat", "genetics", "nutrition"],
    blocks: [
      {
        kind: "callout",
        tone: "standard",
        cites: ["nddb-dkp"],
        text: {
          en: "Institutional characterisation, not a trial: the Dairy Knowledge Portal calls Tharparkar disease resistant and links that reputation, with heat tolerance, to its use in developing Karan Fries. A characterisation can be a hypothesis worth testing. It is not a result with a pathogen, a sample size and a case definition.",
          hi: "संस्थागत चरित्र-वर्णन, परीक्षण नहीं: डेरी नॉलेज पोर्टल थारपारकर को रोग-प्रतिरोधी कहता है और उस प्रतिष्ठा को, ऊष्मा सहनशीलता के साथ, करण फ्रीज के विकास में उसके उपयोग से जोड़ता है। चरित्र-वर्णन परीक्षण के योग्य परिकल्पना हो सकता है। वह रोगाणु, पशु संख्या और रोग-परिभाषा वाला परिणाम नहीं है।",
        },
      },
      {
        kind: "h",
        text: { en: "What the verified studies actually measured", hi: "सत्यापित अध्ययनों ने वास्तव में क्या मापा" },
      },
      {
        kind: "list",
        items: [
          {
            cites: ["bhat-2016"],
            text: {
              en: "Seasonal heat strain. Summer raised rectal temperature and respiration in 64 animals. That is evidence of physiological cost, which is the opposite of a claim that heat is harmless.",
              hi: "मौसमी ऊष्मा तनाव। गर्मी ने 64 पशुओं में मलाशय तापमान और श्वसन बढ़ाया। यह शारीरिक लागत का प्रमाण है, जो इस दावे के विपरीत है कि ऊष्मा हानिरहित है।",
            },
          },
          {
            cites: ["jose-2022"],
            text: {
              en: "Cellular stress markers in calves. HSP70, HSP90 and eNOS expression, plus serum enzymes and thyroid hormone, differed in pattern from crossbred calves under chamber heat. These are stress-response measurements. They are not antibody titres against a disease.",
              hi: "बछड़ों में कोशिकीय तनाव चिह्नक। HSP70, HSP90 और eNOS अभिव्यक्ति, साथ ही सीरम एंजाइम और थायरॉइड हार्मोन, कक्ष ऊष्मा में संकर बछड़ों से पैटर्न में भिन्न रहे। ये तनाव-प्रतिक्रिया माप हैं। वे किसी रोग के प्रति प्रतिरक्षी टिटर नहीं हैं।",
            },
          },
          {
            cites: ["jose-2020"],
            text: {
              en: "Two cytokine transcripts, IL-1β and IL-10, did not differ significantly between Tharparkar and crossbred calves in that exposure series. A non-difference is not resistance.",
              hi: "उस एक्सपोजर श्रृंखला में दो साइटोकाइन प्रतिलेख, IL-1β और IL-10, थारपारकर और संकर बछड़ों के बीच सार्थक रूप से भिन्न नहीं रहे। अंतर का न होना प्रतिरोध नहीं है।",
            },
          },
          {
            cites: ["devadasan-2020"],
            text: {
              en: "SNP annotation placed some variants inside genes previously discussed for immune response. Annotation is not a challenge experiment.",
              hi: "एसएनपी टिप्पणी ने कुछ भिन्नरूपों को उन जीनों के भीतर रखा जिनकी पहले प्रतिरक्षा प्रतिक्रिया के लिए चर्चा हुई। टिप्पणी चुनौती प्रयोग नहीं है।",
            },
          },
        ],
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "A primary study of a named parasitic, bacterial or viral disease in Tharparkar cattle — with cases, controls and a stated outcome — was not verified for this edition. No such result is displayed. No drug, vaccine schedule or home remedy is recommended. Reproductive-health numbers live on the reproduction page and are herd performance, not disease prevalence.",
          hi: "थारपारकर पशुओं में किसी नामित परजीवी, जीवाणु या विषाणु रोग का प्राथमिक अध्ययन — मामलों, नियंत्रणों और कथित परिणाम के साथ — इस संस्करण के लिए सत्यापित नहीं हुआ। ऐसा कोई परिणाम नहीं दिखाया गया। कोई दवा, टीका सारणी या घरेलू उपचार अनुशंसित नहीं है। प्रजनन-स्वास्थ्य संख्याएँ प्रजनन पृष्ठ पर हैं और झुंड प्रदर्शन हैं, रोग प्रसार नहीं।",
        },
      },
    ],
  },
  {
    id: "conservation",
    path: "/conservation",
    nav: "steward",
    title: { en: "Breed conservation", hi: "नस्ल संरक्षण" },
    description: {
      en: "Why Tharparkar genetic resources are conserved, and which ICAR inventories actually name the breed.",
      hi: "थारपारकर आनुवंशिक संसाधनों का संरक्षण क्यों होता है, और कौन-सी ICAR सूचियाँ वास्तव में नस्ल का नाम लेती हैं।",
    },
    kicker: { en: "Inventories, not slogans", hi: "सूचियाँ, नारे नहीं" },
    lede: {
      en: "Indigenous breeds are conserved because their diversity cannot be rebuilt once it is lost. For Tharparkar, the verified actions are registration, living institutional herds, cryopreserved semen and cryopreserved somatic cells. A current head count was not verified, so none is printed.",
      hi: "देशी नस्लों का संरक्षण इसलिए होता है क्योंकि उनकी विविधता खोने के बाद फिर नहीं बनती। थारपारकर के लिए सत्यापित कार्य हैं पंजीकरण, जीवित संस्थागत झुंड, हिमीकृत वीर्य और हिमीकृत कायिक कोशिकाएँ। वर्तमान सिर-गिनती सत्यापित नहीं हुई, इसलिए कोई छपी नहीं है।",
    },
    related: ["genetics", "about", "origin"],
    blocks: [
      {
        kind: "cards",
        items: [
          {
            title: { en: "The breed register", hi: "नस्ल रजिस्टर" },
            body: {
              en: "ICAR-NBAGR lists Tharparkar with home tract Rajasthan and accession INDIA_CATTLE_1700_THARPARKAR_03028. Registration makes the population a named genetic resource. It does not freeze the population in time.",
              hi: "ICAR-NBAGR थारपारकर को गृह क्षेत्र राजस्थान और परिग्रहण INDIA_CATTLE_1700_THARPARKAR_03028 के साथ सूचीबद्ध करता है। पंजीकरण जनसंख्या को नामित आनुवंशिक संसाधन बनाता है। वह जनसंख्या को समय में जमा नहीं देता।",
            },
            cites: ["nbagr-list"],
          },
          {
            title: { en: "Semen bank", hi: "वीर्य बैंक" },
            body: {
              en: "The National Livestock Gene Bank names Tharparkar among cattle breeds with cryopreserved semen. The page total of 306,948 doses and 590 males covers 63 breeds of seven species. It is not a Tharparkar dose count.",
              hi: "राष्ट्रीय पशुधन जीन बैंक थारपारकर को हिमीकृत वीर्य वाले गोवंशों में नाम देता है। पृष्ठ का योग 3,06,948 डोज और 590 नर सात प्रजातियों की 63 नस्लों का है। वह थारपारकर डोज गिनती नहीं है।",
            },
            cites: ["nbagr-gene"],
          },
          {
            title: { en: "Somatic cells", hi: "कायिक कोशिकाएँ" },
            body: {
              en: "As of 31 March 2025, NBAGR listed Tharparkar among 33 cattle populations in the somatic-cell bank begun in 2015. The bank is described as a diploid-genome reserve for future research, including the possibility of somatic-cell nuclear transfer. The page does not say Tharparkar animals have been cloned.",
              hi: "31 मार्च 2025 की स्थिति में NBAGR ने 2015 में शुरू बैंक में 33 गो-जनसंख्याओं के बीच थारपारकर को रखा। बैंक को भविष्य के शोध के लिए द्विगुणित-जीनोम रिज़र्व बताया गया है, जिसमें कायिक-कोशिका नाभिकीय स्थानांतरण की संभावना शामिल है। पृष्ठ नहीं कहता कि थारपारकर पशु क्लोन किए जा चुके हैं।",
            },
            cites: ["nbagr-somatic"],
          },
          {
            title: { en: "Living herds and bulls", hi: "जीवित झुंड और सांड" },
            body: {
              en: "NDRI Karnal and CAZRI Jodhpur have published multi-decade Tharparkar records, so those herds are documented breeding populations, whatever their present size. NDRI’s breeding centre lists Tharparkar bulls used for frozen semen. This site is not a place to order that semen.",
              hi: "NDRI करनाल और CAZRI जोधपुर ने कई दशकों के थारपारकर अभिलेख प्रकाशित किए हैं, इसलिए वे झुंड प्रलेखित प्रजनन जनसंख्याएँ हैं, उनका वर्तमान आकार जो भी हो। NDRI का प्रजनन केन्द्र हिमीकृत वीर्य के लिए प्रयुक्त थारपारकर सांडों की सूची देता है। यह साइट वह वीर्य मँगवाने का स्थान नहीं है।",
            },
            cites: ["ndri-farm", "patel-2026", "ndri-abrc"],
          },
        ],
      },
      {
        kind: "h",
        text: { en: "What the genetic studies imply for conservation", hi: "आनुवंशिक अध्ययन संरक्षण के लिए क्या कहते हैं" },
      },
      {
        kind: "p",
        cites: ["sodhi-2006", "saravanan-2022"],
        text: {
          en: "Sodhi’s sample still carried substantial microsatellite diversity and, on their test, no recent bottleneck, while FIS indicated inbreeding. Saravanan’s 24-animal SNP sample showed multiple inbreeding estimators above zero and a declining trajectory of effective population size. Together they justify keeping both living breeding and a gene bank: there is diversity left to conserve, and there are signs it can narrow. They do not justify a precise risk category. Effective population size is not a census, and this edition did not verify one.",
          hi: "सोधी के नमूने में अभी भी पर्याप्त माइक्रोसेटेलाइट विविधता थी और उनके परीक्षण पर हाल का बॉटलनेक नहीं था, जबकि FIS ने अंतःप्रजनन इंगित किया। सरवानन के 24-पशु एसएनपी नमूने ने शून्य से ऊपर कई अंतःप्रजनन आकलक और प्रभावी जनसंख्या आकार की घटती प्रवृत्ति दिखाई। साथ में वे जीवित प्रजनन और जीन बैंक दोनों को रखने का औचित्य देते हैं: संरक्षित करने योग्य विविधता बची है, और संकेत हैं कि वह सिकुड़ सकती है। वे एक सटीक जोखिम श्रेणी का औचित्य नहीं देते। प्रभावी जनसंख्या आकार जनगणना नहीं है, और इस संस्करण ने कोई जनगणना सत्यापित नहीं की।",
        },
      },
      {
        kind: "h",
        text: { en: "Threats that are documented, and threats that are not", hi: "जो खतरे प्रलेखित हैं, और जो नहीं" },
      },
      {
        kind: "list",
        items: [
          {
            cites: ["saravanan-2022", "sodhi-2006"],
            text: {
              en: "Documented inside samples: inbreeding signals, and a reported decline in effective population size.",
              hi: "नमूनों के भीतर प्रलेखित: अंतःप्रजनन संकेत, और प्रभावी जनसंख्या आकार की बताई गई गिरावट।",
            },
          },
          {
            cites: ["nddb-dkp"],
            text: {
              en: "Documented as crossbreeding history, not as a measured loss: NDDB states Tharparkar was used to produce Karan Fries. Use in a synthetic strain is not automatically the erasure of the parent breed. A replacement rate in the villages was not verified.",
              hi: "संकरण इतिहास के रूप में प्रलेखित, मापित हानि के रूप में नहीं: NDDB कहता है कि थारपारकर का उपयोग करण फ्रीज बनाने में हुआ। संश्लिष्ट प्रभेद में उपयोग अपने आप मूल नस्ल का मिटना नहीं है। गाँवों में प्रतिस्थापन दर सत्यापित नहीं हुई।",
            },
          },
          {
            text: {
              en: "Not verified, and not stated: a present population, a percentage decline since a named census, or an official endangered or at-risk category with a date.",
              hi: "सत्यापित नहीं, और कहा नहीं गया: वर्तमान पशुसंख्या, किसी नामित गणना के बाद प्रतिशत गिरावट, या तिथि के साथ आधिकारिक संकटग्रस्त या जोखिम श्रेणी।",
            },
          },
        ],
      },
      {
        kind: "callout",
        tone: "finding",
        text: {
          en: "Research priorities that follow from the gaps, not from a slogan: a dated census or breed survey with a public method; a Tharparkar-only semen inventory (doses and number of bulls) next to the gene-bank total; and diversity estimates that state the sampling district. Those are missing pieces. They are not implied results.",
          hi: "जो प्राथमिकताएँ कमियों से निकलती हैं, नारे से नहीं: सार्वजनिक विधि के साथ दिनांकित गणना या नस्ल सर्वेक्षण; जीन-बैंक योग के पास केवल थारपारकर की वीर्य सूची (डोज और सांड संख्या); और ऐसे विविधता आकलन जो नमूना जिला बताएँ। ये छूटे हुए टुकड़े हैं। ये निहित परिणाम नहीं हैं।",
        },
      },
    ],
  },
];
