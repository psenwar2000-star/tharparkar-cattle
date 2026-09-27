export type GalleryCategory =
  | "cows"
  | "males"
  | "head"
  | "horns"
  | "body"
  | "holding";

export type GalleryImage = {
  id: string;
  src: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  location: { en: string; hi: string };
  photographer: string;
  date: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  categories: GalleryCategory[];
};

export const galleryImages: GalleryImage[] = [
  {
    id: "pavanaja-white",
    src: "/gallery/pavanaja-02.jpg",
    title: { en: "White to light-grey animal", hi: "सफेद से हल्के धूसर रंग का पशु" },
    description: {
      en: "Photographer’s identification: Tharparkar. The frame shows a white to light-grey zebu with a large dewlap, a moderate hump, a deep barrel and a dark tail switch, standing in a dirt enclosure with thatched sheds. An udder is visible, so the animal appears to be a cow; that is an inference from the photograph, not a herd record. Coat matches the NDDB description of white or light grey more closely than the darker animal in the companion frame. This photograph is not proof of pure breeding or of official registration.",
      hi: "छायाकार की पहचान: थारपारकर। चित्र में बड़ा गलकंबल, मध्यम कूबड़, गहरा धड़ और गहरी पूँछ की झालर वाला सफेद से हल्का धूसर ज़ेबू मिट्टी के बाड़े में खड़ा है। थन दिखाई देता है, इसलिए पशु गाय प्रतीत होता है; यह फोटो से अनुमान है, झुंड अभिलेख नहीं। रंग NDDB के सफेद या हल्के धूसर वर्णन के अधिक निकट है। यह फोटो शुद्ध प्रजनन या आधिकारिक पंजीकरण का प्रमाण नहीं है।",
    },
    location: {
      en: "Not stated on the Wikimedia file page. A companion frame by the same photographer shows a sign in Kannada, so a Rajasthan desert location must not be assumed.",
      hi: "विकिमीडिया फाइल पृष्ठ पर स्थान नहीं है। उसी छायाकार के दूसरे चित्र में कन्नड़ का बोर्ड दिखता है, इसलिए राजस्थान के मरुस्थल का स्थान न मानें।",
    },
    photographer: "Pavanaja",
    date: "28 February 2014",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tharparkar_02.JPG",
    categories: ["cows", "body", "holding"],
  },
  {
    id: "pavanaja-dark",
    src: "/gallery/pavanaja-01.jpg",
    title: { en: "Light body with a dark neck and hump", hi: "गहरे गर्दन और कूबड़ वाला हल्का धड़" },
    description: {
      en: "Photographer’s identification: Tharparkar, described on Wikimedia as an Indian cow breed. The animal has a pale barrel and a markedly darker neck, hump and forequarter, which is the pattern NDDB describes for bulls. Sex is not written on the file page; the developed hump is consistent with a male but is not a record of sex. A green sign in Kannada is visible at the left edge. Purity is not established by the photograph.",
      hi: "छायाकार की पहचान: थारपारकर, विकिमीडिया पर भारतीय गोवंश के रूप में। पशु का धड़ हल्का है और गर्दन, कूबड़ तथा अग्रभाग स्पष्ट रूप से गहरे हैं — यही पैटर्न NDDB सांडों के लिए बताता है। फाइल पृष्ठ पर लिंग नहीं लिखा; विकसित कूबड़ नर से मेल खाता है, पर यह लिंग का अभिलेख नहीं। बाएँ किनारे पर कन्नड़ का हरा बोर्ड दिखता है। फोटो से शुद्धता सिद्ध नहीं होती।",
    },
    location: {
      en: "Not stated. The Kannada sign means the scene should not be captioned as the Thar native tract.",
      hi: "स्थान नहीं दिया गया। कन्नड़ बोर्ड के कारण इस दृश्य को थार का मूल क्षेत्र न लिखें।",
    },
    photographer: "Pavanaja",
    date: "28 February 2014",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tharparkar_01.JPG",
    categories: ["males", "body", "head", "holding"],
  },
  {
    id: "jogi-horns",
    src: "/gallery/jogiasad-white.jpg",
    title: { en: "Lyre horns in a mixed shed", hi: "मिश्रित बाड़े में वीणाकार सींग" },
    description: {
      en: "Photographer’s identification: Tharparkar, also called White Sindhi, Grey Sindhi and Thari. The file states the photograph was taken in Pakistan. The foreground animal has a grey-white body, a darker face and very large horns that rise and curve inward. Other animals in the same shed are brown or differently marked; they are not identified, and this site does not call them Tharparkar. Horn size here should not be treated as the official standard. NDDB describes horns only in general terms and does not publish a centimetre specification on the breed page used here.",
      hi: "छायाकार की पहचान: थारपारकर, जिसे व्हाइट सिंधी, ग्रे सिंधी और थारी भी कहा गया। फाइल कहती है कि फोटो पाकिस्तान में लिया गया। आगे का पशु धूसर-सफेद है, चेहरा गहरा है और बहुत बड़े सींग ऊपर उठकर अंदर मुड़ते हैं। उसी बाड़े के अन्य पशु भूरे या अलग चिह्न वाले हैं; उनकी पहचान नहीं है, और यह साइट उन्हें थारपारकर नहीं कहती। यहाँ की सींग लंबाई को आधिकारिक मानक न मानें। NDDB सींगों का केवल सामान्य वर्णन करता है।",
    },
    location: {
      en: "Pakistan, as stated on the file. District not specified on the page used here.",
      hi: "पाकिस्तान, जैसा फाइल पर लिखा है। इस पृष्ठ पर जिला निर्दिष्ट नहीं।",
    },
    photographer: "JogiAsad",
    date: "22 May 2024",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:White_Sindhi.jpg",
    categories: ["horns", "head", "males", "holding"],
  },
  {
    id: "jogi-side",
    src: "/gallery/jogiasad-gray.jpg",
    title: { en: "Side view in the same shed", hi: "उसी बाड़े का पार्श्व दृश्य" },
    description: {
      en: "A second frame by the same photographer, same date stamp (22 May 2024), same shed and the same identification as Tharparkar / White Sindhi. Useful for body depth and horn base. The brown animals at the manger are in the photograph but are not identified as Tharparkar. A camera watermark remains part of the original file and was not cropped out.",
      hi: "उसी छायाकार का दूसरा चित्र, वही तिथि (22 मई 2024), वही बाड़ा और वही थारपारकर / व्हाइट सिंधी पहचान। धड़ की गहराई और सींग के आधार के लिए उपयोगी। चरनी के भूरे पशु चित्र में हैं, पर थारपारकर के रूप में पहचाने नहीं गए। कैमरा watermark मूल फाइल का हिस्सा है और काटा नहीं गया।",
    },
    location: {
      en: "Pakistan, as stated by the photographer. Exact village not verified.",
      hi: "छायाकार के अनुसार पाकिस्तान। सटीक गाँव सत्यापित नहीं।",
    },
    photographer: "JogiAsad",
    date: "22 May 2024",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:White_(Gray)_Sindhi.jpg",
    categories: ["body", "horns", "holding"],
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, { en: string; hi: string }> = {
  cows: { en: "Animals appearing female", hi: "मादा प्रतीत होने वाले पशु" },
  males: { en: "Animals appearing male", hi: "नर प्रतीत होने वाले पशु" },
  head: { en: "Head and face", hi: "सिर और चेहरा" },
  horns: { en: "Horns and hump", hi: "सींग और कूबड़" },
  body: { en: "Body structure", hi: "शरीर रचना" },
  holding: { en: "Holding environment", hi: "बाड़े का वातावरण" },
};

export const absentGalleries: { en: string; hi: string }[] = [
  {
    en: "Calves — no photograph in this edition shows an animal documented as a Tharparkar calf.",
    hi: "बछड़े — इस संस्करण में कोई फोटो ऐसे पशु को नहीं दिखाता जिसे थारपारकर बछड़ा प्रलेखित किया गया हो।",
  },
  {
    en: "Native desert — none of the verified files states that it was taken in Jaisalmer, Barmer, Jodhpur or the open Thar. Farm sheds are not captioned as the native tract.",
    hi: "मूल मरुस्थल — किसी सत्यापित फाइल में जैसलमेर, बाड़मेर, जोधपुर या खुले थार का स्थान नहीं लिखा। फार्म शेड को मूल क्षेत्र नहीं कहा गया।",
  },
  {
    en: "Historical photographs — a dated historical print with a confirmed subject was not verified for inclusion.",
    hi: "ऐतिहासिक चित्र — पुष्ट विषय वाला दिनांकित ऐतिहासिक छायाचित्र शामिल करने के लिए सत्यापित नहीं हुआ।",
  },
  {
    en: "Laboratory photographs — no research-institution image with a clear licence and animal identity was available to republish.",
    hi: "प्रयोगशाला चित्र — स्पष्ट लाइसेंस और पशु पहचान वाला कोई शोध-संस्थान चित्र पुनर्प्रकाशन के लिए उपलब्ध नहीं था।",
  },
];
