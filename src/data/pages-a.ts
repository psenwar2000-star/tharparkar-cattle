import type { PageDoc } from "./types";

export const identityPages: PageDoc[] = [
  {
    id: "about",
    path: "/about",
    nav: "breed",
    title: { en: "About Tharparkar", hi: "थारपारकर परिचय" },
    description: {
      en: "Breed identity of Tharparkar cattle: Bos indicus, India, Rajasthan, and the ICAR-NBAGR accession.",
      hi: "थारपारकर गोवंश की पहचान: Bos indicus, भारत, राजस्थान, और ICAR-NBAGR परिग्रहण।",
    },
    kicker: { en: "Breed identity", hi: "नस्ल पहचान" },
    lede: {
      en: "Tharparkar is an Indian zebu cattle breed, Bos indicus, registered by ICAR-NBAGR with Rajasthan as its home tract. It is also described, by the National Dairy Development Board, under older regional names tied to Sindh.",
      hi: "थारपारकर भारतीय ज़ेबू गोवंश है, Bos indicus, जिसे ICAR-NBAGR ने राजस्थान को गृह क्षेत्र बताकर पंजीकृत किया है। राष्ट्रीय डेरी विकास बोर्ड इसे सिंध से जुड़े पुराने क्षेत्रीय नामों से भी वर्णित करता है।",
    },
    related: ["origin", "tract", "characteristics", "conservation"],
    blocks: [
      {
        kind: "table",
        caption: {
          en: "Identity fields used on this site, and where each one comes from.",
          hi: "इस साइट पर प्रयुक्त पहचान क्षेत्र, और हर एक का स्रोत।",
        },
        source: "nbagr-list",
        columns: ["Field", "Statement", "Source"],
        rows: [
          ["Breed name", "Tharparkar", "ICAR-NBAGR register"],
          ["Species", "Cattle", "ICAR-NBAGR cattle list"],
          ["Scientific group", "Bos indicus (zebu)", "Used by Sodhi et al. 2006 for this breed"],
          ["Country of the register", "India", "ICAR-NBAGR"],
          ["Home tract on the register", "Rajasthan", "ICAR-NBAGR"],
          ["Accession", "INDIA_CATTLE_1700_THARPARKAR_03028", "ICAR-NBAGR"],
        ],
      },
      {
        kind: "callout",
        tone: "standard",
        cites: ["nbagr-list", "sodhi-2006"],
        text: {
          en: "Bos indicus is the scientific group used in the peer-reviewed diversity paper of Sodhi and colleagues, not a phrase printed as a separate column on the NBAGR breed table. The accession number is copied from that table. Registration identifies the breed. It does not certify any individual animal.",
          hi: "Bos indicus वह वैज्ञानिक समूह है जिसका उपयोग सोधी और सहकर्मियों के समीक्षित विविधता शोधपत्र में हुआ है; यह NBAGR नस्ल तालिका का अलग स्तंभ नहीं है। परिग्रहण संख्या उस तालिका से ली गई है। पंजीकरण नस्ल की पहचान है। यह किसी एक पशु का प्रमाणपत्र नहीं है।",
        },
      },
      {
        kind: "h",
        text: { en: "Why the name points at the Thar", hi: "नाम थार की ओर क्यों इशारा करता है" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp"],
        text: {
          en: "NDDB’s Animal Breeding Group says the breed is named after the Thar Desert in Rajasthan, and that it is also known as White Sindhi, Grey Sindhi and Thari “as per the place of its actual origin (Sind, Pakistan)”. The Indian register and the NDDB origin sentence are both kept on this site. They are not collapsed into one invented founding story.",
          hi: "NDDB का पशु प्रजनन समूह कहता है कि नस्ल का नाम राजस्थान के थार मरुस्थल पर है, और इसे व्हाइट सिंधी, ग्रे सिंधी तथा थारी भी कहा जाता है — “मूल उत्पत्ति स्थान (सिंध, पाकिस्तान) के अनुसार”। भारतीय रजिस्टर और NDDB का उत्पत्ति वाक्य दोनों रखे गए हैं। इन्हें एक गढ़ी हुई स्थापना-कथा में नहीं मिलाया गया।",
        },
      },
      {
        kind: "h",
        text: { en: "Place in Indian cattle diversity", hi: "भारतीय गो-विविधता में स्थान" },
      },
      {
        kind: "p",
        cites: ["nbagr-list", "sodhi-2006", "nbagr-gene", "nbagr-somatic"],
        text: {
          en: "On the NBAGR cattle list Tharparkar is one named indigenous breed among many, not a substitute for the others. Sodhi et al. called it a major breed of Rajasthan and found substantial microsatellite diversity in a sample of 50 animals, together with a high inbreeding coefficient. The National Livestock Gene Bank lists Tharparkar among breeds with cryopreserved semen, and the somatic-cell bank listed it among 33 cattle populations on 31 March 2025. Those are conservation facts about a genetic resource. They are not a census.",
          hi: "NBAGR गोवंश सूची में थारपारकर कई देशी नस्लों में से एक नामित नस्ल है, दूसरों का विकल्प नहीं। सोधी आदि ने इसे राजस्थान की एक प्रमुख नस्ल कहा और 50 पशुओं के नमूने में पर्याप्त माइक्रोसेटेलाइट विविधता के साथ ऊँचा अंतःप्रजनन गुणांक पाया। राष्ट्रीय पशुधन जीन बैंक थारपारकर को हिमीकृत वीर्य वाली नस्लों में गिनता है, और कायिक-कोशिका बैंक ने 31 मार्च 2025 को इसे 33 गो-जनसंख्याओं में रखा। ये एक आनुवंशिक संसाधन के संरक्षण तथ्य हैं। ये जनगणना नहीं हैं।",
        },
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "A current official population figure, with a census year, was not verified while this edition was compiled. No population number is shown. The breed is not labelled endangered here, because that status was not verified from a dated official source.",
          hi: "इस संस्करण को बनाते समय जनगणना-वर्ष के साथ वर्तमान आधिकारिक पशुसंख्या सत्यापित नहीं हुई। कोई संख्या नहीं दिखाई गई है। नस्ल को यहाँ संकटग्रस्त नहीं कहा गया, क्योंकि वह स्थिति दिनांकित आधिकारिक स्रोत से सत्यापित नहीं हुई।",
        },
      },
    ],
  },
  {
    id: "origin",
    path: "/origin",
    nav: "breed",
    title: { en: "Origin and history", hi: "उत्पत्ति और इतिहास" },
    description: {
      en: "What can be said, from institutional sources, about the origin of Tharparkar cattle — and what cannot.",
      hi: "संस्थागत स्रोतों से थारपारकर की उत्पत्ति के बारे में क्या कहा जा सकता है — और क्या नहीं।",
    },
    kicker: { en: "History without invention", hi: "बिना गढ़ंत के इतिहास" },
    lede: {
      en: "There is a documented link between the breed name, the Thar, and Sindhi synonyms. There is no verified founding year. This page stops where the sources stop.",
      hi: "नस्ल के नाम, थार और सिंधी पर्यायों के बीच प्रलेखित संबंध है। कोई सत्यापित स्थापना-वर्ष नहीं है। यह पृष्ठ वहीं रुकता है जहाँ स्रोत रुकते हैं।",
    },
    related: ["about", "tract", "conservation"],
    blocks: [
      {
        kind: "h",
        text: { en: "What the name records", hi: "नाम क्या दर्ज करता है" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp", "nbagr-list"],
        text: {
          en: "NDDB states two geographical ideas at once: the breed is named after the Thar Desert in Rajasthan, and its synonyms White Sindhi, Grey Sindhi and Thari follow “the place of its actual origin (Sind, Pakistan)”. ICAR-NBAGR’s public breed table, by contrast, prints the home tract simply as Rajasthan. A careful reading is that the pastoral landscape historically crossed what is now an international border, while the Indian statutory home tract on the register is the state of Rajasthan. This site does not invent a migration date, a founding herd, or a single village of origin.",
          hi: "NDDB एक साथ दो भौगोलिक बातें कहता है: नस्ल का नाम राजस्थान के थार मरुस्थल पर है, और पर्याय व्हाइट सिंधी, ग्रे सिंधी तथा थारी “मूल उत्पत्ति स्थान (सिंध, पाकिस्तान)” का अनुसरण करते हैं। इसके विपरीत ICAR-NBAGR की सार्वजनिक तालिका गृह क्षेत्र केवल राजस्थान लिखती है। सावधानीपूर्ण पढ़त यह है कि पशुपालन का भूदृश्य ऐतिहासिक रूप से आज की अंतरराष्ट्रीय सीमा के दोनों ओर था, जबकि रजिस्टर पर भारतीय वैधानिक गृह क्षेत्र राजस्थान राज्य है। यह साइट प्रवास की तिथि, संस्थापक झुंड या उत्पत्ति का एक गाँव नहीं गढ़ती।",
        },
      },
      {
        kind: "h",
        text: { en: "Traditional use, as institutions describe it", hi: "पारंपरिक उपयोग, जैसा संस्थाएँ बताती हैं" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp"],
        text: {
          en: "NDDB calls Tharparkar a dual-purpose breed: milk, and work by the males. The portal’s own wording is “good for drought purpose”. That spelling is preserved in the citation. The ordinary livestock sense of male cattle in this sentence is draught — pulling and farm work — but the correction is labelled as a reading, not as a second quotation. The same page says the animals can live on small bushy vegetation, naming sewan grass, during drought and fodder scarcity, and still produce what the portal calls a reasonable amount of milk. No nineteenth-century herd book was verified for this edition, so traditional practice is not narrated beyond that institutional description.",
          hi: "NDDB थारपारकर को द्वि-उपयोगी नस्ल कहता है: दूध, और नरों से काम। पोर्टल के अपने शब्द हैं “good for drought purpose”। वह वर्तनी उद्धरण में ज्यों की त्यों है। इस वाक्य का सामान्य पशुधन अर्थ भारवाहन है, पर वह सुधार एक पढ़त है, दूसरा उद्धरण नहीं। वही पृष्ठ कहता है कि पशु सूखे और चारे की कमी में सेवण घास जैसी छोटी झाड़ीदार वनस्पति पर रह सकते हैं और पोर्टल के शब्दों में उचित मात्रा में दूध दे सकते हैं। इस संस्करण के लिए कोई उन्नीसवीं सदी की झुंड-पुस्तक सत्यापित नहीं हुई, इसलिए पारंपरिक प्रथा उस संस्थागत वर्णन से आगे नहीं कही गई।",
        },
      },
      {
        kind: "h",
        text: { en: "Modern scientific recognition", hi: "आधुनिक वैज्ञानिक मान्यता" },
      },
      {
        kind: "list",
        items: [
          {
            cites: ["nbagr-list"],
            text: {
              en: "Breed registration at ICAR-NBAGR under INDIA_CATTLE_1700_THARPARKAR_03028, home tract Rajasthan.",
              hi: "ICAR-NBAGR पर INDIA_CATTLE_1700_THARPARKAR_03028 के अंतर्गत नस्ल पंजीकरण, गृह क्षेत्र राजस्थान।",
            },
          },
          {
            cites: ["ndri-farm", "nddb-dkp"],
            text: {
              en: "A long-running experimental herd at ICAR-NDRI, Karnal. NDDB states that Tharparkar was used in producing the synthetic strain Karan Fries at that institute. This site does not profile Karan Fries.",
              hi: "ICAR-NDRI, करनाल में लंबे समय से प्रायोगिक झुंड। NDDB कहता है कि थारपारकर का उपयोग उसी संस्थान में संश्लिष्ट प्रभेद करण फ्रीज बनाने में हुआ। यह साइट करण फ्रीज का परिचय नहीं देती।",
            },
          },
          {
            cites: ["patel-2026"],
            text: {
              en: "An arid-zone herd at ICAR-CAZRI, Jodhpur, with lactation records from 1990 to 2020 analysed by Patel and colleagues.",
              hi: "ICAR-CAZRI, जोधपुर में शुष्क-क्षेत्र झुंड, जिसके 1990 से 2020 के ब्यांत अभिलेख पटेल और सहकर्मियों ने विश्लेषित किए।",
            },
          },
          {
            cites: ["nbagr-gene", "nbagr-somatic", "ndri-abrc"],
            text: {
              en: "Cryopreserved semen in the National Livestock Gene Bank, somatic cells in the NBAGR cell bank (list dated 31 March 2025), and Tharparkar bulls at the NDRI Artificial Breeding Research Centre.",
              hi: "राष्ट्रीय पशुधन जीन बैंक में हिमीकृत वीर्य, NBAGR कोशिका बैंक में कायिक कोशिकाएँ (सूची 31 मार्च 2025), और NDRI कृत्रिम प्रजनन अनुसंधान केन्द्र में थारपारकर सांड।",
            },
          },
        ],
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "A KVK demonstration-unit page at kvkcazrijodhpur1.org.in was requested as a geographical reference and returned an error when opened for this edition (27 September 2026). Its contents are not quoted. Conservation “history” below the institutional pages — for example a year when the breed was first declared at risk — was not verified and is omitted.",
          hi: "kvkcazrijodhpur1.org.in का प्रदर्शन-इकाई पृष्ठ भौगोलिक संदर्भ के रूप में माँगा गया था और इस संस्करण (27 सितंबर 2026) के लिए खोलने पर त्रुटि दी। उसकी सामग्री उद्धृत नहीं की गई। संस्थागत पृष्ठों से नीचे का संरक्षण “इतिहास” — जैसे नस्ल को पहली बार जोखिमग्रस्त घोषित करने का वर्ष — सत्यापित नहीं हुआ और छोड़ दिया गया है।",
        },
      },
    ],
  },
  {
    id: "tract",
    path: "/tract",
    nav: "breed",
    title: { en: "Native tract", hi: "मूल क्षेत्र" },
    description: {
      en: "The registered home tract and the districts named by NDDB, without a false population map.",
      hi: "पंजीकृत गृह क्षेत्र और NDDB द्वारा नामित जिले, बिना झूठे जनसंख्या मानचित्र के।",
    },
    kicker: { en: "Geography", hi: "भूगोल" },
    lede: {
      en: "Two official wordings exist. NBAGR prints “Rajasthan”. NDDB names three western Rajasthan districts and also Kutchchh in Gujarat, and points the older synonyms to Sindh. The map below is a coordinate sketch of those named places. It is not a population map.",
      hi: "दो आधिकारिक शब्द हैं। NBAGR “राजस्थान” लिखता है। NDDB पश्चिमी राजस्थान के तीन जिले और गुजरात का कच्छ भी नाम लेता है, और पुराने पर्यायों को सिंध की ओर इंगित करता है। नीचे का चित्र उन नामित स्थानों का निर्देशांक रेखाचित्र है। यह जनसंख्या मानचित्र नहीं है।",
    },
    related: ["origin", "about", "heat"],
    blocks: [
      { kind: "atlas" },
      {
        kind: "h",
        text: { en: "Do not read the districts as equal herds", hi: "जिलों को समान झुंड न पढ़ें" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp", "nbagr-list"],
        text: {
          en: "NDDB’s breeding-tract sentence lists Kutchchh, Barmer, Jaisalmer and Jodhpur together. It does not give animal numbers, and it does not say the breed is evenly spread. NBAGR’s home-tract cell does not mention Gujarat. Kutchchh is therefore shown as an NDDB-named district, not as part of the NBAGR home-tract cell. Sindh is shown because NDDB names it as the place attached to the synonyms, not because this site has verified a present-day census there.",
          hi: "NDDB का प्रजनन-क्षेत्र वाक्य कच्छ, बाड़मेर, जैसलमेर और जोधपुर को साथ रखता है। वह पशु संख्या नहीं देता, और यह नहीं कहता कि नस्ल समान रूप से फैली है। NBAGR की गृह-क्षेत्र कोष्ठिका गुजरात का उल्लेख नहीं करती। इसलिए कच्छ को NDDB-नामित जिला दिखाया गया है, NBAGR गृह-क्षेत्र कोष्ठिका का भाग नहीं। सिंध इसलिए दिखाया गया है क्योंकि NDDB पर्यायों से जुड़े स्थान के रूप में उसका नाम लेता है, इसलिए नहीं कि इस साइट ने वहाँ की वर्तमान गणना सत्यापित की है।",
        },
      },
      {
        kind: "h",
        text: { en: "Climate, only as far as the sources go", hi: "जलवायु, केवल जहाँ तक स्रोत जाते हैं" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp", "patel-2026"],
        text: {
          en: "NDDB places the breed in drought and fodder scarcity and names sewan grass as vegetation the animals can use. Patel and colleagues, writing on the CAZRI herd at Jodhpur, describe the setting as the arid region of Rajasthan and report that season of calving did not significantly affect the traits they analysed, which they interpret as adaptation to arid extremes. This page does not add rainfall millimetres or a temperature normal, because an India Meteorological Department normal table was not transcribed into this edition.",
          hi: "NDDB नस्ल को सूखे और चारे की कमी में रखता है और सेवण घास को उस वनस्पति के रूप में नाम देता है जिसका पशु उपयोग कर सकते हैं। जोधपुर के CAZRI झुंड पर लिखते हुए पटेल और सहयोगी परिस्थिति को राजस्थान का शुष्क क्षेत्र बताते हैं और कहते हैं कि ब्यांत के मौसम का उनके गुणों पर सार्थक प्रभाव नहीं पड़ा, जिसे वे शुष्क चरम के अनुकूलन के रूप में पढ़ते हैं। यह पृष्ठ वर्षा के मिलीमीटर या तापमान सामान्य नहीं जोड़ता, क्योंकि भारत मौसम विज्ञान विभाग की सामान्य तालिका इस संस्करण में उतारी नहीं गई।",
        },
      },
      {
        kind: "callout",
        tone: "limit",
        cites: ["patel-2026", "ndri-farm"],
        text: {
          en: "Research herds are not the tract. CAZRI Jodhpur is inside the arid west and is the closest institutional herd, among the studies compiled here, to the districts NDDB names. NDRI Karnal and IVRI Bareilly are outside that tract. Their results are about Tharparkar cattle kept there, not about village herds in Jaisalmer.",
          hi: "शोध झुंड मूल क्षेत्र नहीं हैं। CAZRI जोधपुर शुष्क पश्चिम के भीतर है और यहाँ संकलित अध्ययनों में NDDB के जिलों के सबसे निकट का संस्थागत झुंड है। NDRI करनाल और IVRI बरेली उस क्षेत्र के बाहर हैं। उनके परिणाम वहाँ रखे थारपारकर पशुओं के हैं, जैसलमेर के गाँव झुंडों के नहीं।",
        },
      },
    ],
  },
  {
    id: "characteristics",
    path: "/characteristics",
    nav: "identity",
    title: { en: "Breed characteristics", hi: "नस्ल विशेषताएँ" },
    description: {
      en: "The NDDB morphological profile of Tharparkar, separated from single-herd performance.",
      hi: "थारपारकर का NDDB रूपात्मक परिचय, एक झुंड के प्रदर्शन से अलग।",
    },
    kicker: { en: "Official profile and its limits", hi: "आधिकारिक परिचय और उसकी सीमा" },
    lede: {
      en: "The public morphological profile used here is the NDDB Dairy Knowledge Portal article. It is an institutional description. It is not a measurement paper, and it does not say that every animal is identical.",
      hi: "यहाँ प्रयुक्त सार्वजनिक रूपात्मक परिचय NDDB डेरी नॉलेज पोर्टल का लेख है। यह संस्थागत वर्णन है। यह मापन शोधपत्र नहीं है, और यह नहीं कहता कि हर पशु एक जैसा है।",
    },
    related: ["morphology", "coat", "identification", "milk"],
    blocks: [
      {
        kind: "cards",
        items: [
          {
            title: { en: "Size and build", hi: "आकार और बनावट" },
            body: {
              en: "NDDB: medium sized and compact. A verified table of wither height, body length or adult weight was not found in the institutional pages reviewed, so those numbers are not printed.",
              hi: "NDDB: मध्यम आकार और सुगठित। समीक्षित संस्थागत पृष्ठों में कंधे की ऊँचाई, शरीर की लंबाई या वयस्क भार की सत्यापित तालिका नहीं मिली, इसलिए वे संख्याएँ नहीं छपी हैं।",
            },
            cites: ["nddb-dkp"],
          },
          {
            title: { en: "Coat", hi: "रोम रंग" },
            body: {
              en: "White and light grey. Face and extremities darker than the rest of the body. In bulls, neck, hump and fore and hind quarters are also dark. Colour gets darker in winter.",
              hi: "सफेद और हल्का धूसर। चेहरा और हाथ-पैर शेष शरीर से गहरे। सांडों में गर्दन, कूबड़ और आगे-पीछे के भाग भी गहरे। सर्दियों में रंग और गहरा होता है।",
            },
            cites: ["nddb-dkp"],
          },
          {
            title: { en: "Purpose", hi: "उपयोग" },
            body: {
              en: "Described as dual-purpose. Milk figures on the same page are a stated average and range, not a guarantee. Males are described as suited to work.",
              hi: "द्वि-उपयोगी बताया गया है। उसी पृष्ठ के दुग्ध आँकड़े एक कहा गया औसत और सीमा हैं, गारंटी नहीं। नरों को काम के अनुकूल बताया गया है।",
            },
            cites: ["nddb-dkp"],
          },
          {
            title: { en: "Environment", hi: "वातावरण" },
            body: {
              en: "Described as able to use sewan and other small bushy vegetation in drought and fodder scarcity. This is not a measured intake trial.",
              hi: "सूखे और चारे की कमी में सेवण और अन्य छोटी झाड़ीदार वनस्पति के उपयोग के योग्य बताया गया। यह मापित ग्रहण परीक्षण नहीं है।",
            },
            cites: ["nddb-dkp"],
          },
        ],
      },
      {
        kind: "callout",
        tone: "limit",
        cites: ["nddb-dkp"],
        text: {
          en: "The portal also says the breed is disease resistant and was used, because of heat tolerance and disease resistance, in producing Karan Fries at NDRI. Those are institutional characterisations. Controlled comparisons compiled on the heat and health pages show physiological responses to heat, not immunity. Disease resistance is not repeated on this site as a proven exemption from any named infection.",
          hi: "पोर्टल यह भी कहता है कि नस्ल रोग-प्रतिरोधी है और ऊष्मा सहनशीलता तथा रोग प्रतिरोध के कारण NDRI में करण फ्रीज बनाने में उपयोग हुई। ये संस्थागत चरित्र-वर्णन हैं। ऊष्मा और स्वास्थ्य पृष्ठों पर संकलित नियंत्रित तुलनाएँ ऊष्मा के प्रति शारीरिक प्रतिक्रिया दिखाती हैं, मुक्ति नहीं। रोग प्रतिरोध को इस साइट पर किसी नामित संक्रमण से सिद्ध छूट के रूप में नहीं दोहराया गया।",
        },
      },
      {
        kind: "figure",
        imageId: "pavanaja-white",
      },
      {
        kind: "p",
        text: {
          en: "The photograph is one animal identified by its photographer as Tharparkar. It illustrates the white to light-grey coat described by NDDB. It is not a type specimen, and the file page does not prove purity.",
          hi: "यह फोटो एक पशु की है जिसे छायाकार ने थारपारकर बताया। यह NDDB द्वारा वर्णित सफेद से हल्के धूसर रंग को दिखाता है। यह प्ररूप नमूना नहीं है, और फाइल पृष्ठ शुद्धता सिद्ध नहीं करता।",
        },
      },
    ],
  },
  {
    id: "identification",
    path: "/identification",
    nav: "identity",
    title: { en: "Breed identification", hi: "नस्ल पहचान" },
    description: {
      en: "How Tharparkar cattle are identified — and why colour alone is not proof.",
      hi: "थारपारकर की पहचान कैसे होती है — और केवल रंग प्रमाण क्यों नहीं है।",
    },
    kicker: { en: "Four different questions", hi: "चार अलग प्रश्न" },
    lede: {
      en: "“Does this animal look like the breed profile?”, “Does it have a pedigree?”, “Is the breed registered?” and “Has this animal been genotyped?” are four different questions. This page keeps them apart.",
      hi: "“क्या यह पशु नस्ल परिचय जैसा दिखता है?”, “क्या इसकी वंशावली है?”, “क्या नस्ल पंजीकृत है?” और “क्या इस पशु का जीनोटाइप हुआ है?” — ये चार अलग प्रश्न हैं। यह पृष्ठ इन्हें अलग रखता है।",
    },
    related: ["characteristics", "coat", "genetics", "morphology"],
    blocks: [
      {
        kind: "cards",
        items: [
          {
            title: { en: "1. Visual identification", hi: "1. दृश्य पहचान" },
            body: {
              en: "Compare coat, darkening of the extremities, bull colour on the neck and hump, and general zebu build with the NDDB profile. Agreement supports a hypothesis. It does not prove purity. Crosses and other grey zebu can overlap in colour.",
              hi: "रंग, हाथ-पैर का गहरा होना, गर्दन और कूबड़ पर सांड का रंग, और सामान्य ज़ेबू बनावट की तुलना NDDB परिचय से करें। मेल एक परिकल्पना का समर्थन करता है। यह शुद्धता सिद्ध नहीं करता। संकर और अन्य धूसर ज़ेबू रंग में ओवरलैप कर सकते हैं।",
            },
            cites: ["nddb-dkp"],
          },
          {
            title: { en: "2. Pedigree and parentage", hi: "2. वंशावली और माता-पिता" },
            body: {
              en: "Institutional herds at NDRI and CAZRI keep history sheets; the production papers are based on those records. A pedigree is only as good as the recording. This site has no breeder directory and does not validate private pedigrees.",
              hi: "NDRI और CAZRI के संस्थागत झुंड इतिहास पत्र रखते हैं; उत्पादन शोधपत्र उन्हीं अभिलेखों पर आधारित हैं। वंशावली उतनी ही अच्छी है जितना लेखन। इस साइट पर प्रजनक निर्देशिका नहीं है और यह निजी वंशावली प्रमाणित नहीं करती।",
            },
            cites: ["hussain-2015", "patel-2026"],
          },
          {
            title: { en: "3. Official registration", hi: "3. आधिकारिक पंजीकरण" },
            body: {
              en: "INDIA_CATTLE_1700_THARPARKAR_03028 registers the breed with NBAGR. That accession is not stamped on a photograph. An animal is not “NBAGR pure” merely because it is grey-white.",
              hi: "INDIA_CATTLE_1700_THARPARKAR_03028 NBAGR के पास नस्ल का पंजीकरण है। वह परिग्रहण किसी फोटो पर मुद्रित नहीं है। कोई पशु केवल धूसर-सफेद होने से “NBAGR शुद्ध” नहीं हो जाता।",
            },
            cites: ["nbagr-list"],
          },
          {
            title: { en: "4. Genetic information", hi: "4. आनुवंशिक जानकारी" },
            body: {
              en: "Microsatellite and SNP studies describe populations. Sodhi et al. and Saravanan et al. did not publish a field test that declares an individual 100 percent pure Tharparkar. Marker panels can exclude some wrong parentage; they are not, in the papers compiled here, a purity certificate.",
              hi: "माइक्रोसेटेलाइट और एसएनपी अध्ययन जनसंख्या का वर्णन करते हैं। सोधी आदि और सरवानन आदि ने कोई मैदानी परीक्षा प्रकाशित नहीं की जो किसी व्यक्ति को 100 प्रतिशत शुद्ध थारपारकर घोषित करे। चिह्नक पैनल कुछ गलत माता-पिता को बाहर कर सकते हैं; यहाँ संकलित शोधपत्रों में वे शुद्धता प्रमाणपत्र नहीं हैं।",
            },
            cites: ["sodhi-2006", "saravanan-2022"],
          },
        ],
      },
      {
        kind: "callout",
        tone: "limit",
        text: {
          en: "Every animal photograph on this site carries the photographer’s identification and a warning. None is presented as a proven purebred.",
          hi: "इस साइट पर हर पशु चित्र छायाकार की पहचान और एक चेतावनी के साथ है। किसी को सिद्ध शुद्ध नस्ल के रूप में नहीं दिखाया गया।",
        },
      },
    ],
  },
  {
    id: "morphology",
    path: "/morphology",
    nav: "identity",
    title: { en: "Morphological characteristics", hi: "आकारिकी विशेषताएँ" },
    description: {
      en: "Head, horns, hump, dewlap, limbs and sex differences — sourced, not invented.",
      hi: "सिर, सींग, कूबड़, गलकंबल, पैर और लिंग अंतर — स्रोत से, गढ़े नहीं।",
    },
    kicker: { en: "What is described, and what is only visible", hi: "जो वर्णित है, और जो केवल दिखता है" },
    lede: {
      en: "Point-by-point official measurements — horn circumference, ear length, udder scores — were not printed on the NBAGR list or the NDDB article used here. The page therefore separates the NDDB text from observations of four photographs.",
      hi: "बिंदुवार आधिकारिक माप — सींग की परिधि, कान की लंबाई, थन अंक — प्रयुक्त NBAGR सूची या NDDB लेख पर नहीं छपे थे। इसलिए यह पृष्ठ NDDB पाठ को चार फोटो के अवलोकनों से अलग करता है।",
    },
    related: ["coat", "characteristics", "identification"],
    blocks: [
      {
        kind: "h",
        text: { en: "From the NDDB profile", hi: "NDDB परिचय से" },
      },
      {
        kind: "list",
        items: [
          {
            cites: ["nddb-dkp"],
            text: {
              en: "Build: medium sized, compact.",
              hi: "बनावट: मध्यम आकार, सुगठित।",
            },
          },
          {
            cites: ["nddb-dkp"],
            text: {
              en: "Face and extremities darker than the barrel. In males, neck, hump, forequarters and hindquarters also darken.",
              hi: "चेहरा और हाथ-पैर धड़ से गहरे। नरों में गर्दन, कूबड़, अग्रभाग और पश्चभाग भी गहरे होते हैं।",
            },
          },
          {
            cites: ["nddb-dkp"],
            text: {
              en: "Seasonal colour: darker in winter. The portal does not give a physiological mechanism.",
              hi: "मौसमी रंग: सर्दियों में गहरा। पोर्टल शारीरिक क्रियाविधि नहीं देता।",
            },
          },
        ],
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "Not verified in the sources compiled here, and therefore not stated as breed standards: horn length in centimetres, forehead convexity score, ear set, eye colour, hoof colour, skin pigment map, udder shape, or a male–female weight table. Blog pages that print such numbers without a primary table were not used.",
          hi: "यहाँ संकलित स्रोतों में सत्यापित नहीं, और इसलिए नस्ल मानक के रूप में नहीं कहा गया: सेंटीमीटर में सींग की लंबाई, माथे की उत्तलता अंक, कान की स्थिति, आँख का रंग, खुर का रंग, त्वचा वर्ण मानचित्र, थन का आकार, या नर-मादा भार तालिका। बिना प्राथमिक तालिका के ऐसे अंक छापने वाले ब्लॉग उपयोग नहीं हुए।",
        },
      },
      {
        kind: "h",
        text: { en: "What the photographs show — observations, not standards", hi: "फोटो क्या दिखाते हैं — अवलोकन, मानक नहीं" },
      },
      {
        kind: "figure",
        imageId: "pavanaja-white",
      },
      {
        kind: "p",
        text: {
          en: "On the white animal: a thoracic hump, a long folded dewlap, straight-looking limbs, a deep barrel and a black tail switch. Horns are not clearly readable in this side view. These are observations of one frame.",
          hi: "सफेद पशु पर: वक्षीय कूबड़, लंबा वलित गलकंबल, सीधे दिखते पैर, गहरा धड़ और काली पूँछ झालर। इस पार्श्व दृश्य में सींग स्पष्ट नहीं पढ़े जा सकते। ये एक चित्र के अवलोकन हैं।",
        },
      },
      {
        kind: "figure",
        imageId: "jogi-horns",
      },
      {
        kind: "p",
        text: {
          en: "On the Pakistan frame: horns leave the poll, rise, and curve inward, with a darker face. The horns are large. Because NDDB does not give a horn measurement on the page used here, this animal is not offered as the measuring stick for the breed. Animals of other colours share the shed and are not identified.",
          hi: "पाकिस्तान वाले चित्र पर: सींग शिरस्त्राण से निकलकर ऊपर उठते और अंदर मुड़ते हैं, चेहरा गहरा है। सींग बड़े हैं। क्योंकि प्रयुक्त पृष्ठ पर NDDB सींग का माप नहीं देता, इस पशु को नस्ल की मापक छड़ी नहीं बनाया गया। अन्य रंगों के पशु बाड़ा साझा करते हैं और पहचाने नहीं गए।",
        },
      },
      {
        kind: "h",
        text: { en: "Males and females", hi: "नर और मादा" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp"],
        text: {
          en: "The only sex difference the NDDB profile states explicitly is colour: bulls darken on the neck, hump and quarters. Zebu males generally carry a heavier hump; that general pattern is visible when the two Pavanaja frames are compared, but this site does not turn a pair of photographs into a dimorphism table. Udder shape is not specified by NDDB in the article used here.",
          hi: "NDDB परिचय जो लिंग अंतर स्पष्ट रूप से कहता है वह रंग है: सांडों की गर्दन, कूबड़ और भाग गहरे होते हैं। ज़ेबू नरों का कूबड़ सामान्यतः भारी होता है; पवनजा के दो चित्रों की तुलना में वह सामान्य पैटर्न दिखता है, पर यह साइट दो फोटो को द्विरूपता तालिका नहीं बनाती। प्रयुक्त लेख में NDDB थन का आकार निर्दिष्ट नहीं करता।",
        },
      },
    ],
  },
  {
    id: "coat",
    path: "/coat",
    nav: "identity",
    title: { en: "Coat and skin", hi: "रोम और त्वचा" },
    description: {
      en: "Coat colour of Tharparkar cattle as stated by NDDB, and what the photographs do and do not show.",
      hi: "NDDB द्वारा कथित थारपारकर का रोम रंग, और फोटो क्या दिखाते हैं तथा क्या नहीं।",
    },
    kicker: { en: "Colour is a clue, not a certificate", hi: "रंग संकेत है, प्रमाणपत्र नहीं" },
    lede: {
      en: "White or light grey, with darker points, and a further darkening on bulls and in winter: that is the NDDB account. Skin pigment maps that circulate in popular articles were not in that account and are not repeated.",
      hi: "सफेद या हल्का धूसर, गहरे छोरों के साथ, और सांडों में तथा सर्दियों में और गहरा रंग: यही NDDB का विवरण है। लोकप्रिय लेखों में घूमने वाले त्वचा-वर्ण मानचित्र उस विवरण में नहीं थे और दोहराए नहीं गए।",
    },
    related: ["characteristics", "identification", "morphology"],
    blocks: [
      {
        kind: "figure",
        imageId: "pavanaja-dark",
      },
      {
        kind: "p",
        cites: ["nddb-dkp"],
        text: {
          en: "NDDB: “The breed is medium sized compact with white and light grey coloured coat. Face and extremities are darker than rest of the body. In bulls neck, hump, and fore and hind quarters are also dark. The colour gets darker during winter.” The darker animal above is consistent with the bull sentence. Consistency is not identification. The file does not record sex, sire or dam.",
          hi: "NDDB: नस्ल मध्यम और सुगठित है, सफेद और हल्के धूसर रोम के साथ। चेहरा और हाथ-पैर शेष शरीर से गहरे हैं। सांडों में गर्दन, कूबड़ और आगे-पीछे के भाग भी गहरे हैं। सर्दियों में रंग और गहरा होता है। ऊपर का गहरा पशु सांड वाले वाक्य से मेल खाता है। मेल पहचान नहीं है। फाइल लिंग, पिता या माता दर्ज नहीं करती।",
        },
      },
      {
        kind: "callout",
        tone: "gap",
        text: {
          en: "Claims that were not in the NDDB article or in a paper compiled here, and are omitted: a yellow udder pigment as a unique test, black skin under white hair as a diagnostic rule, and any statement that coat colour changes prove purity. If a primary description of skin histology is added later, it will be cited with its sample size.",
          hi: "जो दावे NDDB लेख या यहाँ संकलित शोधपत्र में नहीं थे, वे छोड़ दिए गए: अनोखी परीक्षा के रूप में पीला थन वर्ण, निदान नियम के रूप में सफेद बाल के नीचे काली त्वचा, और यह कथन कि रोम रंग का बदलना शुद्धता सिद्ध करता है। यदि बाद में त्वचा ऊतक का प्राथमिक वर्णन जोड़ा जाएगा, तो वह अपनी पशु संख्या के साथ उद्धृत होगा।",
        },
      },
      {
        kind: "h",
        text: { en: "Why winter darkening is not a heat-tolerance score", hi: "सर्दियों का गहरा रंग ऊष्मा-अंक क्यों नहीं है" },
      },
      {
        kind: "p",
        cites: ["nddb-dkp", "bhat-2016"],
        text: {
          en: "Seasonal coat change and physiological heat response are different measurements. Bhat and colleagues recorded higher rectal temperature and respiration in summer in Tharparkar cattle. That paper does not attribute the NDDB winter colour change to the HSP70 genotype. The two facts should stay unjoined until a study joins them.",
          hi: "मौसमी रोम परिवर्तन और शारीरिक ऊष्मा प्रतिक्रिया अलग माप हैं। भट्ट और सहयोगियों ने थारपारकर पशुओं में गर्मियों में अधिक मलाशय तापमान और श्वसन दर्ज किया। वह शोधपत्र NDDB वाले सर्दियों के रंग परिवर्तन को HSP70 जीनोटाइप से नहीं जोड़ता। जब तक कोई अध्ययन इन्हें जोड़े नहीं, ये दो तथ्य अलग रहने चाहिए।",
        },
      },
    ],
  },
];
