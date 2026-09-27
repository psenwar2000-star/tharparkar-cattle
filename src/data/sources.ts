export type SourceCategory =
  | "genetics"
  | "milk"
  | "reproduction"
  | "heat"
  | "nutrition"
  | "morphology"
  | "conservation"
  | "health"
  | "identity"
  | "history";

export type Source = {
  id: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  institution: string;
  category: SourceCategory[];
  summary: string;
  summaryHi: string;
  method: string;
  methodHi: string;
  findings: string;
  findingsHi: string;
  limitations: string;
  limitationsHi: string;
  doi?: string;
  url: string;
  pdf?: string;
  kind: "institution" | "paper";
};

export const sources: Source[] = [
  {
    id: "nbagr-list",
    title: "Cattle breeds of India",
    authors: "ICAR-National Bureau of Animal Genetic Resources",
    year: "Accessed 2026",
    journal: "Institutional breed register",
    institution: "ICAR-NBAGR, Karnal",
    category: ["identity", "conservation", "history"],
    summary:
      "Official register of Indian cattle breeds. Tharparkar is listed with home tract Rajasthan and accession number INDIA_CATTLE_1700_THARPARKAR_03028.",
    summaryHi:
      "भारतीय गोवंशों की आधिकारिक सूची। थारपारकर का गृह क्षेत्र राजस्थान और परिग्रहण संख्या INDIA_CATTLE_1700_THARPARKAR_03028 दर्ज है।",
    method:
      "Breed registration list published by ICAR-NBAGR. The public table gives serial number, breed, home tract and accession number. It does not print a morphological scorecard on this page.",
    methodHi:
      "ICAR-NBAGR की नस्ल पंजीकरण सूची। सार्वजनिक तालिका में क्रमांक, नस्ल, गृह क्षेत्र और परिग्रहण संख्या है। इस पृष्ठ पर रूपात्मक मानक तालिका नहीं छपी है।",
    findings:
      "Tharparkar appears as breed entry 28. Home tract column: Rajasthan. Accession: INDIA_CATTLE_1700_THARPARKAR_03028.",
    findingsHi:
      "थारपारकर प्रविष्टि 28 है। गृह क्षेत्र: राजस्थान। परिग्रहण: INDIA_CATTLE_1700_THARPARKAR_03028।",
    limitations:
      "The table does not give district-wise population, milk yield or a statement that every animal in Rajasthan is Tharparkar. Registration of the breed is not a purity certificate for any photographed animal.",
    limitationsHi:
      "तालिका में जिलावार संख्या, दुग्ध उत्पादन या यह दावा नहीं है कि राजस्थान का हर पशु थारपारकर है। नस्ल का पंजीकरण किसी फोटो के पशु की शुद्धता प्रमाणपत्र नहीं है।",
    url: "https://nbagr.res.in/cattle-breed",
    kind: "institution",
  },
  {
    id: "nddb-dkp",
    title: "Tharparkar",
    authors: "Animal Breeding Group, National Dairy Development Board",
    year: "Accessed 2026",
    journal: "Dairy Knowledge Portal",
    institution: "NDDB",
    category: ["identity", "morphology", "milk", "history", "nutrition"],
    summary:
      "Institutional breed profile: synonyms, breeding tract, coat description, a lactation-yield range, and a note that Tharparkar was used in developing Karan Fries at NDRI.",
    summaryHi:
      "संस्थागत नस्ल परिचय: पर्याय नाम, प्रजनन क्षेत्र, रंग का विवरण, एक दुग्ध-उत्पादन सीमा, और यह टिप्पणी कि थारपारकर का उपयोग NDRI में करण फ्रीज बनाने में हुआ।",
    method:
      "Breed article on the NDDB Dairy Knowledge Portal. Sample size, year of the yield figures and measurement protocol are not stated on the page.",
    methodHi:
      "NDDB डेरी नॉलेज पोर्टल का नस्ल लेख। पृष्ठ पर पशु संख्या, उत्पादन आँकड़ों का वर्ष और मापन विधि नहीं दी गई है।",
    findings:
      "Names the breed after the Thar Desert in Rajasthan and also as White Sindhi, Grey Sindhi and Thari, “as per the place of its actual origin (Sind, Pakistan)”. Breeding tract named: Kutchchh district of Gujarat and Barmer, Jaisalmer and Jodhpur districts of Rajasthan. Coat: medium sized, compact, white and light grey; face and extremities darker; in bulls the neck, hump and fore and hind quarters are also dark; colour darkens in winter. Average yield stated as 1749 kg per lactation, ranging from 913 to 2147 kg. The page also says well-fed animals have produced even higher than 3000 litre per lactation in farm condition, and that animals can thrive on small bushy vegetation (sewan grass) in drought and fodder scarcity. Males are described as useful for work (the portal text says “drought purpose”).",
    findingsHi:
      "नस्ल का नाम राजस्थान के थार मरुस्थल से जोड़ा गया है, और इसे व्हाइट सिंधी, ग्रे सिंधी तथा थारी भी कहा गया है — “मूल उत्पत्ति स्थान (सिंध, पाकिस्तान) के अनुसार”। प्रजनन क्षेत्र: गुजरात का कच्छ जिला तथा राजस्थान के बाड़मेर, जैसलमेर और जोधपुर जिले। आकार मध्यम और सुगठित; रंग सफेद और हल्का धूसर; चेहरा और हाथ-पैर अधिक गहरे; सांडों में गर्दन, कूबड़ और आगे-पीछे के भाग भी गहरे; सर्दियों में रंग और गहरा होता है। औसत उत्पादन 1749 किग्रा प्रति ब्यांत, सीमा 913 से 2147 किग्रा। अच्छी खुराक पर फार्म में 3000 लीटर से अधिक प्रति ब्यांत का उल्लेख है। सूखे में सेवण घास जैसी छोटी झाड़ीदार वनस्पति पर टिकने का विवरण है।",
    limitations:
      "This is a breed profile, not a peer-reviewed methods paper. The 1749 kg figure must not be read as the yield of every cow. “Disease resistant” on this page is not evidence of immunity to any named disease. Districts are a described tract, not a claim of equal population. The word “drought” in “good for drought purpose” is printed as such; draught work is the likely intended sense, but that correction is an editorial note, not a second quotation.",
    limitationsHi:
      "यह नस्ल परिचय है, समीक्षित शोधपत्र नहीं। 1749 किग्रा को हर गाय का उत्पादन न पढ़ें। “रोग-प्रतिरोधी” शब्द किसी नामित रोग से पूर्ण मुक्ति का प्रमाण नहीं है। जिले प्रजनन क्षेत्र का वर्णन हैं, समान पशुसंख्या का दावा नहीं।",
    url: "https://www.dairyknowledge.in/article/tharparkar",
    kind: "institution",
  },
  {
    id: "ndri-farm",
    title: "Livestock farm — Institute Cattle Yard performance table",
    authors: "ICAR-National Dairy Research Institute",
    year: "Page updated 3 April 2025; accessed 2026",
    journal: "Institutional herd report",
    institution: "ICAR-NDRI, Karnal",
    category: ["milk", "reproduction"],
    summary:
      "Herd averages for the Tharparkar cattle maintained at the NDRI Institute Cattle Yard, published beside Sahiwal, Karan Swiss, Karan Fries and Murrah.",
    summaryHi:
      "NDRI संस्थान पशुशाला में रखे थारपारकर पशुओं के झुंड औसत, साहीवाल, करण स्विस, करण फ्रीज और मुर्रा के साथ प्रकाशित।",
    method:
      "Averages printed on the official livestock-farm page. The page does not state the number of animals, the years covered or whether figures are least-squares means.",
    methodHi:
      "आधिकारिक लाइवस्टॉक फार्म पृष्ठ पर छपे औसत। पशु संख्या, वर्ष या यह कि आँकड़े न्यूनतम-वर्ग माध्य हैं, पृष्ठ पर नहीं दिया गया।",
    findings:
      "Tharparkar column: age at maturity 26.0 months; age at first calving 42.4 months; total lactation yield 2334.0 kg; lactation length 330 days; 305-day lactation yield 2104.0 kg; dry period 114 days; calving interval 410 days; best 305-day lactation yield 2894.0 kg; service period 136 days; inseminations per conception 1.94; wet average 7.3 kg; herd average 5.2 kg; fat 5.3%; SNF 9.1%; best yield in a day 19.5 kg.",
    findingsHi:
      "थारपारकर स्तंभ: परिपक्वता आयु 26.0 माह; प्रथम ब्यांत आयु 42.4 माह; कुल ब्यांत उत्पादन 2334.0 किग्रा; ब्यांत अवधि 330 दिन; 305-दिन उत्पादन 2104.0 किग्रा; शुष्क अवधि 114 दिन; ब्यांत अंतराल 410 दिन; सर्वश्रेष्ठ 305-दिन उत्पादन 2894.0 किग्रा; सेवा अवधि 136 दिन; गर्भधारण हेतु वीर्यसेचन 1.94; वेट औसत 7.3 किग्रा; झुंड औसत 5.2 किग्रा; वसा 5.3%; एसएनएफ 9.1%; एक दिन का सर्वश्रेष्ठ उत्पादन 19.5 किग्रा।",
    limitations:
      "These are one organised herd under Karnal management, not a universal breed capacity. “Best” rows are extremes in that table, not means. No sample size is printed. Do not average this table with other studies into a single breed constant.",
    limitationsHi:
      "ये करनाल के एक संगठित झुंड के आँकड़े हैं, पूरी नस्ल की क्षमता नहीं। “सर्वश्रेष्ठ” पंक्तियाँ माध्य नहीं हैं। पशु संख्या नहीं छपी। इन्हें अन्य अध्ययनों के साथ मिलाकर एक नस्ल-स्थिरांक न बनाएँ।",
    url: "https://ndri.res.in/livestock-farm",
    kind: "institution",
  },
  {
    id: "ndri-abrc",
    title: "Artificial Breeding Research Centre",
    authors: "ICAR-National Dairy Research Institute",
    year: "Accessed 2026",
    journal: "Institutional page",
    institution: "ICAR-NDRI, Karnal",
    category: ["reproduction", "conservation"],
    summary:
      "NDRI states that its Artificial Breeding Research Centre maintains breeding bulls of Sahiwal, Tharparkar, Karan Fries and Karan Swiss cattle and Murrah buffalo, and produces frozen semen.",
    summaryHi:
      "NDRI बताता है कि उसका कृत्रिम प्रजनन अनुसंधान केन्द्र साहीवाल, थारपारकर, करण फ्रीज, करण स्विस और मुर्रा के प्रजनन सांड रखता है तथा हिमीकृत वीर्य बनाता है।",
    method: "Descriptive institutional page listing maintained Tharparkar bulls by number.",
    methodHi: "संस्थागत वर्णनात्मक पृष्ठ, जिसमें थारपारकर सांडों की संख्या दी गई है।",
    findings:
      "Tharparkar is one of the cattle strains whose bulls are kept for semen production at NDRI Karnal. The page lists individual bull numbers. This site does not sell semen and does not reproduce the price list.",
    findingsHi:
      "थारपारकर उन गोवंशों में है जिनके सांड NDRI करनाल में वीर्य उत्पादन के लिए रखे जाते हैं। पृष्ठ पर अलग-अलग सांड संख्या है। यह वेबसाइट वीर्य नहीं बेचती और मूल्य सूची नहीं दोहराती।",
    limitations:
      "A list of bulls is not a population census and not a genetic evaluation of the breed.",
    limitationsHi:
      "सांडों की सूची जनगणना नहीं और नस्ल का आनुवंशिक मूल्यांकन नहीं है।",
    url: "https://ndri.res.in/artificial-breeding-research-center",
    kind: "institution",
  },
  {
    id: "nbagr-gene",
    title: "National Livestock Gene Bank — semen cryopreservation",
    authors: "ICAR-National Bureau of Animal Genetic Resources",
    year: "Accessed 2026",
    journal: "Institutional conservation inventory",
    institution: "ICAR-NBAGR, Karnal",
    category: ["conservation", "genetics"],
    summary:
      "Tharparkar is named among cattle breeds whose semen is cryopreserved in the National Livestock Gene Bank.",
    summaryHi:
      "थारपारकर उन गोवंशों में गिना गया है जिनका वीर्य राष्ट्रीय पशुधन जीन बैंक में हिमीकृत संरक्षित है।",
    method:
      "Public inventory. Totals on the page cover all listed species and breeds together.",
    methodHi:
      "सार्वजनिक सूची। पृष्ठ के योग सभी सूचीबद्ध प्रजातियों और नस्लों के मिलाकर हैं।",
    findings:
      "Cattle breeds listed include Tharparkar. The same page reports, for the gene bank as a whole, 306,948 deep-frozen semen doses from 590 breeding males of 63 breeds across seven species. Those totals are not a Tharparkar-only count.",
    findingsHi:
      "गोवंश सूची में थारपारकर शामिल है। उसी पृष्ठ पर पूरे जीन बैंक के लिए 7 प्रजातियों की 63 नस्लों के 590 प्रजनन नरों की 3,06,948 हिमीकृत वीर्य डोज लिखी हैं। यह योग केवल थारपारकर का नहीं है।",
    limitations:
      "No Tharparkar-specific dose count, bull count or collection year is printed in the breed list. Absence of a number is not evidence of absence of doses, nor a population size.",
    limitationsHi:
      "नस्ल सूची में थारपारकर-विशिष्ट डोज, सांड संख्या या संग्रह वर्ष नहीं छपा। संख्या का न होना न तो डोज की अनुपस्थिति है और न पशुसंख्या।",
    url: "https://nbagr.res.in/gene-bank",
    kind: "institution",
  },
  {
    id: "nbagr-somatic",
    title: "Somatic cell bank",
    authors: "ICAR-National Bureau of Animal Genetic Resources",
    year: "Status as on 31 March 2025; accessed 2026",
    journal: "Institutional conservation inventory",
    institution: "ICAR-NBAGR, Karnal",
    category: ["conservation", "genetics"],
    summary:
      "Tharparkar is listed among cattle populations whose somatic cells have been cryopreserved at ICAR-NBAGR.",
    summaryHi:
      "थारपारकर उन गो-जनसंख्याओं में है जिनकी कायिक कोशिकाएँ ICAR-NBAGR में हिमीकृत संरक्षित की गई हैं।",
    method:
      "The somatic-cell bank programme is described as having started in 2015. The breed table is dated 31 March 2025.",
    methodHi:
      "कायिक कोशिका बैंक कार्यक्रम 2015 में शुरू बताया गया है। नस्ल तालिका 31 मार्च 2025 की स्थिति है।",
    findings:
      "Cattle entry lists 33 populations, and the names begin with Tharparkar. The page states that 125 indigenous populations of 10 livestock species had been cryoconserved. It describes possible future use in somatic-cell nuclear transfer and genomic research. That is a conservation method, not a claim that animals have been reconstructed.",
    findingsHi:
      "गोवंश प्रविष्टि में 33 जनसंख्याएँ हैं और नामों की शुरुआत थारपारकर से होती है। पृष्ठ कहता है कि 10 पशुधन प्रजातियों की 125 देशी जनसंख्याएँ क्रायोसंरक्षित की गईं। भविष्य में कायिक-कोशिका नाभिकीय स्थानांतरण और जीनोमिक शोध का उल्लेख है। यह संरक्षण विधि है, यह दावा नहीं कि पशु पुनर्रचित किए जा चुके हैं।",
    limitations:
      "The page does not give the number of Tharparkar donors. The 2015 date is the start of the bank, not a verified date for the first Tharparkar sample.",
    limitationsHi:
      "पृष्ठ थारपारकर दाताओं की संख्या नहीं देता। 2015 बैंक की शुरुआत है, पहले थारपारकर नमूने की सत्यापित तिथि नहीं।",
    url: "https://nbagr.res.in/somatic-bank",
    kind: "institution",
  },
  {
    id: "hussain-2015",
    title:
      "Effect of non-genetic factors on first lactation production and reproduction traits in Tharparkar cattle",
    authors: "Altaf Hussain, A.K. Gupta, S.K. Dash, M. Manoj and Shahid Ahmad",
    year: "2015",
    journal: "Indian Journal of Animal Research 49(4): 438–441",
    institution: "ICAR-NDRI, Karnal",
    category: ["milk", "reproduction"],
    summary:
      "First-lactation appraisal of 230 Tharparkar cows at NDRI over 1959–2011.",
    summaryHi:
      "NDRI पर 1959–2011 के दौरान 230 थारपारकर गायों के प्रथम ब्यांत का मूल्यांकन।",
    method:
      "Records of 230 cows across 50 years. Least-squares means for first-lactation production and reproduction. Season and period of calving were tested.",
    methodHi:
      "50 वर्षों में 230 गायों के अभिलेख। प्रथम ब्यांत के उत्पादन और प्रजनन के न्यूनतम-वर्ग माध्य। ब्यांत के मौसम और अवधि का परीक्षण।",
    findings:
      "Least-squares means: first-lactation 305-day milk yield 1618.47 ± 49.39 kg; first-lactation total milk yield 1822.65 ± 70.2 kg; first lactation length 321.47 ± 8.87 days; milk per day of lactation length 5.65 ± 0.16 kg; first dry period 99.80 ± 10.62 days; first service period 151.13 ± 16.27 days; first calving interval 436.75 ± 16.18 days; milk per day of calving interval 4.59 ± 0.20 kg. Season of calving was not significant; period of calving was significant.",
    findingsHi:
      "न्यूनतम-वर्ग माध्य: प्रथम ब्यांत 305-दिन दुग्ध 1618.47 ± 49.39 किग्रा; प्रथम ब्यांत कुल दुग्ध 1822.65 ± 70.2 किग्रा; प्रथम ब्यांत अवधि 321.47 ± 8.87 दिन; ब्यांत-अवधि प्रति दिन दुग्ध 5.65 ± 0.16 किग्रा; प्रथम शुष्क अवधि 99.80 ± 10.62 दिन; प्रथम सेवा अवधि 151.13 ± 16.27 दिन; प्रथम ब्यांत अंतराल 436.75 ± 16.18 दिन; ब्यांत-अंतराल प्रति दिन दुग्ध 4.59 ± 0.20 किग्रा। ब्यांत का मौसम सार्थक नहीं रहा; ब्यांत की अवधि सार्थक रही।",
    limitations:
      "First lactation only, one institutional herd, and a 50-year span in which management changed. Not a village survey of the native tract.",
    limitationsHi:
      "केवल प्रथम ब्यांत, एक संस्थागत झुंड, और 50 वर्ष जिनमें प्रबंधन बदला। यह मूल क्षेत्र का गाँव सर्वेक्षण नहीं है।",
    doi: "10.5958/0976-0555.2015.00096.5",
    url: "https://doi.org/10.5958/0976-0555.2015.00096.5",
    kind: "paper",
  },
  {
    id: "george-ijds-2021",
    title: "Estimation and comparison of different lactation persistency methods in Tharparkar cattle",
    authors:
      "Linda George, I.D. Gupta, A.K. Gupta, M.R. Vineeth, Jaismon P. Achankunju and Aruna T.S.",
    year: "2021",
    journal: "Indian Journal of Dairy Science 74(3)",
    institution: "ICAR-NDRI, Karnal",
    category: ["milk"],
    summary:
      "Compares four persistency indices on 322 lactation records of 138 Tharparkar cattle at NDRI, 1996–2018.",
    summaryHi:
      "NDRI पर 1996–2018 की 138 थारपारकर गायों के 322 ब्यांत अभिलेखों पर चार दुग्ध-स्थिरता सूचकांकों की तुलना।",
    method:
      "Ratio method (P1), Prasad method (P2), and Sölkner and Fuchs variation in 200 days (P3) and 305 days (P4). Methods ranked by standard error as a percentage of the mean.",
    methodHi:
      "अनुपात विधि (P1), प्रसाद विधि (P2), तथा 200 दिन (P3) और 305 दिन (P4) पर सॉल्कनर-फुक्स रूप। विधियों की रैंकिंग माध्य के प्रतिशत के रूप में मानक त्रुटि से।",
    findings:
      "Least-squares means: P1 149.6 ± 3.07; P2 0.53 ± 0.007; P3 1.83 ± 0.05; P4 2.28 ± 0.07. Prasad’s method had the smallest standard error as a percentage of the mean (1.1%). Which calving season looked “more persistent” depended on the index used.",
    findingsHi:
      "न्यूनतम-वर्ग माध्य: P1 149.6 ± 3.07; P2 0.53 ± 0.007; P3 1.83 ± 0.05; P4 2.28 ± 0.07। प्रसाद विधि में माध्य के प्रतिशत के रूप में मानक त्रुटि सबसे कम (1.1%) रही। कौन-सा ब्यांत मौसम “अधिक स्थिर” दिखा, यह चुने गए सूचकांक पर निर्भर था।",
    limitations:
      "Persistency indices are not themselves lactation yields. They describe shape of the lactation curve in this herd. Rankings changed with the formula, so no single index should be treated as the breed’s persistency.",
    limitationsHi:
      "स्थिरता सूचकांक स्वयं दुग्ध मात्रा नहीं हैं। वे इस झुंड में ब्यांत वक्र का आकार बताते हैं। सूत्र बदलने पर क्रम बदला, इसलिए एक सूचकांक को नस्ल की स्थिरता न मानें।",
    doi: "10.33785/ijds.2021.v74i03.008",
    url: "https://doi.org/10.33785/ijds.2021.v74i03.008",
    kind: "paper",
  },
  {
    id: "george-ijar-2021",
    title:
      "Enhancement of production performance of Tharparkar cattle using lactation persistency as a selection tool",
    authors:
      "Linda George, I.D. Gupta, P.B. Nandhini, Archana Verma and Jaismon P. Achankunju",
    year: "2021",
    journal: "Indian Journal of Animal Research",
    institution: "ICAR-NDRI, Karnal; biostatistics link with ICAR-IVRI",
    category: ["milk", "genetics"],
    summary:
      "All-parity production means and Mahadevan persistency for the NDRI Tharparkar herd, 1990–2019.",
    summaryHi:
      "1990–2019 के NDRI थारपारकर झुंड के सभी ब्यांतों के उत्पादन माध्य और महादेवन स्थिरता।",
    method:
      "372 daily milk-yield records of all parities from 190 Tharparkar cattle sired by 38 bulls. Least-squares analysis (Harvey model) for non-genetic factors. Persistency by Mahadevan’s method.",
    methodHi:
      "38 सांडों की 190 थारपारकर गायों के सभी ब्यांतों के 372 दैनिक दुग्ध अभिलेख। गैर-आनुवंशिक कारकों के लिए न्यूनतम-वर्ग विश्लेषण। स्थिरता महादेवन विधि से।",
    findings:
      "Least-squares means: total milk yield 1633.40 ± 45.79 kg; lactation length 272.55 ± 4.64 days; peak yield 10.83 ± 0.17 kg; days to attain peak 41.48 ± 2.34; lactation persistency 1.27 ± 0.02.",
    findingsHi:
      "न्यूनतम-वर्ग माध्य: कुल दुग्ध 1633.40 ± 45.79 किग्रा; ब्यांत अवधि 272.55 ± 4.64 दिन; चरम उत्पादन 10.83 ± 0.17 किग्रा; चरम तक दिन 41.48 ± 2.34; दुग्ध स्थिरता 1.27 ± 0.02।",
    limitations:
      "The paper itself notes a very low heritability estimate for persistency with a high standard error, which points to large environmental influence. Unequal subclass frequencies and 29 years of management change limit interpretation. One herd.",
    limitationsHi:
      "शोधपत्र स्वयं कहता है कि स्थिरता की आनुवंशिकता बहुत कम और मानक त्रुटि बड़ी थी, जो पर्यावरण के बड़े प्रभाव की ओर इशारा करती है। असमान उपवर्ग और 29 वर्षों का प्रबंधन परिवर्तन व्याख्या को सीमित करते हैं। एक झुंड।",
    doi: "10.18805/ijar.B-4439",
    url: "https://doi.org/10.18805/ijar.B-4439",
    kind: "paper",
  },
  {
    id: "patel-2026",
    title:
      "Effects of non-genetic factors on production and reproduction traits in Tharparkar cattle under arid region of Rajasthan",
    authors: "A.K. Patel, S.C. Kachhawah, N.V. Patil and Ashish Chopra",
    year: "2026",
    journal: "Indian Journal of Animal Research",
    institution: "ICAR-Central Arid Zone Research Institute, Jodhpur",
    category: ["milk", "reproduction", "heat"],
    summary:
      "Thirty years of lactation records from the CAZRI Tharparkar herd at Jodhpur, in the arid region.",
    summaryHi:
      "जोधपुर के शुष्क क्षेत्र में CAZRI थारपारकर झुंड के तीस वर्षों के ब्यांत अभिलेख।",
    method:
      "422 lactation records of 95 cows, 1990–2020, analysed with a linear mixed model. Records with abortion, illness or lactation length under 100 days were excluded.",
    methodHi:
      "1990–2020 में 95 गायों के 422 ब्यांत अभिलेख, रैखिक मिश्रित मॉडल से। गर्भपात, बीमारी या 100 दिन से छोटी ब्यांत अवधि वाले अभिलेख हटाए गए।",
    findings:
      "Least-squares means: 305-day lactation yield 1803.05 ± 31.59 litre; total lactation yield 1915.38 ± 36.87 litre; lactation length 313.12 ± 4.28 days; peak yield 10.29 ± 0.12 litre; days to peak 68.12 ± 2.16; milk per day of lactation length 6.07 ± 0.08 litre; milk per day of calving interval 4.62 ± 0.09 litre; dry period 114.23 ± 4.81 days; calving interval 427.01 ± 5.49 days. Season of calving was reported as non-significant, which the authors read as an adaptive character under arid extremes. They also report improvement over time and attribute it, as a possibility, to selection and management.",
    findingsHi:
      "न्यूनतम-वर्ग माध्य: 305-दिन उत्पादन 1803.05 ± 31.59 लीटर; कुल ब्यांत उत्पादन 1915.38 ± 36.87 लीटर; ब्यांत अवधि 313.12 ± 4.28 दिन; चरम उत्पादन 10.29 ± 0.12 लीटर; चरम तक दिन 68.12 ± 2.16; ब्यांत-अवधि प्रति दिन 6.07 ± 0.08 लीटर; ब्यांत-अंतराल प्रति दिन 4.62 ± 0.09 लीटर; शुष्क अवधि 114.23 ± 4.81 दिन; ब्यांत अंतराल 427.01 ± 5.49 दिन। ब्यांत के मौसम को असार्थक बताया गया, जिसे लेखकों ने शुष्क चरम के अनुकूल चरित्र के रूप में पढ़ा। समय के साथ सुधार को उन्होंने चयन और प्रबंधन से जोड़ा — एक संभावना के रूप में।",
    limitations:
      "Units are litres, not kilograms. Sick and very short lactations were removed, so means describe the edited herd, not every calving. Authors’ suggestion that improvement was caused by selection is an interpretation. One arid-zone institutional herd; not a district census.",
    limitationsHi:
      "इकाई लीटर है, किलोग्राम नहीं। बीमार और बहुत छोटी ब्यांतें हटाई गईं, इसलिए माध्य संपादित झुंड के हैं। सुधार को चयन से जोड़ने की बात व्याख्या है। एक शुष्क-क्षेत्र संस्थागत झुंड; जिला जनगणना नहीं।",
    doi: "10.18805/ijar.B-4906",
    url: "https://doi.org/10.18805/ijar.B-4906",
    kind: "paper",
  },
  {
    id: "bansal-2026",
    title: "Assessment of test-day milk yield and milk composition in Tharparkar cattle",
    authors: "Santosh Bansal, Mahendra Gupta, Anuj Dixit, Pawan Patidar and Surendra Verdia",
    year: "2026",
    journal: "International Journal of Agriculture and Food Science",
    institution: "BAIF Institute for Sustainable Livelihoods and Development, Udaipur",
    category: ["milk"],
    summary:
      "Observational test-day yields and composition from 91 Tharparkar cattle, March 2025–July 2026.",
    summaryHi:
      "मार्च 2025 से जुलाई 2026 तक 91 थारपारकर पशुओं के प्रेक्षणात्मक परीक्षण-दिवस उत्पादन और दुग्ध संरचना।",
    method:
      "237 test-day milk records (composition on slightly fewer samples). Lactations 1 to 4, with and without calf suckling. Not a full lactation total.",
    methodHi:
      "237 परीक्षण-दिवस दुग्ध अभिलेख (संरचना कुछ कम नमूनों पर)। ब्यांत 1 से 4, बछड़े के दूध पीने सहित और रहित। यह पूर्ण ब्यांत योग नहीं है।",
    findings:
      "Overall mean test-day yield 5.48 ± 1.63 kg/day (range 2.06–11.61). Mean fat 4.10%, protein 3.27%, SNF 8.80%, lactose 4.88%. Lactation-number effect on yield was not statistically significant (F = 1.12, P = 0.343) in the authors’ test.",
    findingsHi:
      "औसत परीक्षण-दिवस उत्पादन 5.48 ± 1.63 किग्रा/दिन (सीमा 2.06–11.61)। औसत वसा 4.10%, प्रोटीन 3.27%, एसएनएफ 8.80%, लैक्टोज 4.88%। लेखकों के परीक्षण में ब्यांत संख्या का उत्पादन पर सार्थक प्रभाव नहीं रहा (F = 1.12, P = 0.343)।",
    limitations:
      "Authors state the design is observational, records are repeated unequally, and feed intake, days in milk, suckling intensity, season, body condition and health events were not available for a robust analysis. Test-day means are not 305-day lactation yields. Fat here is not interchangeable with the NDRI farm-page fat percentage.",
    limitationsHi:
      "लेखक कहते हैं कि डिज़ाइन प्रेक्षणात्मक है, अभिलेख असमान रूप से दोहराए गए हैं, और आहार, दुग्ध-दिन, बछड़ा-स्तनपान, मौसम, शारीरिक स्थिति और स्वास्थ्य घटनाएँ ठोस विश्लेषण के लिए उपलब्ध नहीं थीं। परीक्षण-दिवस माध्य 305-दिन ब्यांत उत्पादन नहीं है। यहाँ की वसा NDRI फार्म-पृष्ठ की वसा प्रतिशत से बदली नहीं जा सकती।",
    doi: "10.33545/2664844X.2026.v8.i9b.1862",
    url: "https://www.doi.org/10.33545/2664844X.2026.v8.i9b.1862",
    pdf: "https://www.agriculturaljournals.com/archives/2026/vol8issue9/PartB/8-9-14-764.pdf",
    kind: "paper",
  },
  {
    id: "balamurugan-2020",
    title:
      "Studies on age at puberty, service period, gestation period and calving interval in Vrindavani, Tharparkar cattle and Murrah buffalo",
    authors: "B. Balamurugan, S. Mehrotra, Vinod Kumar and M. Ramamoorthy",
    year: "2020",
    journal: "The Pharma Innovation Journal 9(2): 186–190",
    institution: "ICAR-Indian Veterinary Research Institute, Izatnagar",
    category: ["reproduction"],
    summary:
      "Reproductive means for Tharparkar cattle at the IVRI farm, observed 2011–2015, reported beside Vrindavani and Murrah.",
    summaryHi:
      "2011–2015 में IVRI फार्म के थारपारकर पशुओं के प्रजनन माध्य, वृंदावनी और मुर्रा के साथ।",
    method:
      "Farm records. Tharparkar sample sizes differ by trait: puberty n = 55, service period n = 132, calving interval n = 67, gestation n = 67.",
    methodHi:
      "फार्म अभिलेख। थारपारकर की संख्या गुण के अनुसार अलग है: यौवन n = 55, सेवा अवधि n = 132, ब्यांत अंतराल n = 67, गर्भकाल n = 67।",
    findings:
      "Tharparkar means: age at puberty 616.56 ± 17.55 days (n = 55); service period 118.34 ± 5.04 days (n = 132); calving interval 407.05 ± 8.75 days (n = 67); gestation 286.8 ± 1.92 days (n = 67).",
    findingsHi:
      "थारपारकर माध्य: यौवन आयु 616.56 ± 17.55 दिन (n = 55); सेवा अवधि 118.34 ± 5.04 दिन (n = 132); ब्यांत अंतराल 407.05 ± 8.75 दिन (n = 67); गर्भकाल 286.8 ± 1.92 दिन (n = 67)।",
    limitations:
      "IVRI Izatnagar is not the Thar desert. Means are herd-specific and trait sample sizes are unequal. The paper also cites older gestation figures that are lower; those secondary citations are not re-analysed here. Not a native-tract benchmark.",
    limitationsHi:
      "IVRI इज्जतनगर थार मरुस्थल नहीं है। माध्य झुंड-विशिष्ट हैं और गुणों की संख्या असमान है। शोधपत्र पुराने कम गर्भकाल आँकड़े भी उद्धृत करता है; उनका पुनः विश्लेषण यहाँ नहीं है। यह मूल क्षेत्र का मानक नहीं है।",
    url: "https://www.thepharmajournal.com/archives/2020/vol9issue2/PartD/9-1-74-910.pdf",
    pdf: "https://www.thepharmajournal.com/archives/2020/vol9issue2/PartD/9-1-74-910.pdf",
    kind: "paper",
  },
  {
    id: "bhat-2016",
    title: "Effect of heat shock protein 70 polymorphism on thermotolerance in Tharparkar cattle",
    authors:
      "Sandip Bhat, Pushpendra Kumar, Neeraj Kashyap, Bharti Deshmukh, Mahesh Shivanand Dige, Bharat Bhushan, Anuj Chauhan, Amit Kumar and Gyanendra Singh",
    year: "2016",
    journal: "Veterinary World 9(2): 113–117",
    institution: "ICAR-IVRI, Izatnagar",
    category: ["heat", "genetics", "health"],
    summary:
      "Associates an HSP70 coding polymorphism with rectal temperature, respiration rate and a heat-tolerance coefficient in 64 Tharparkar cattle.",
    summaryHi:
      "64 थारपारकर पशुओं में HSP70 बहुरूपता को मलाशय तापमान, श्वसन दर और ऊष्मा-सहिष्णुता गुणांक से जोड़ता है।",
    method:
      "A 295 bp HSP70 fragment was screened by PCR-SSCP and sequenced. Rectal temperature and respiration were taken at 10:00 and 14:00 on three consecutive days in winter, spring and summer. Heat tolerance coefficient = 100 − 10 × (average rectal temperature − 38.3). Genotype and season were fitted in a general linear model.",
    methodHi:
      "295 क्षार-युग्म HSP70 खंड का PCR-SSCP और अनुक्रमण। सर्दी, बसंत और गर्मी में लगातार तीन दिन 10:00 और 14:00 बजे मलाशय तापमान और श्वसन दर। ऊष्मा-सहिष्णुता गुणांक = 100 − 10 × (औसत मलाशय तापमान − 38.3)। सामान्य रैखिक मॉडल में जीनोटाइप और मौसम।",
    findings:
      "Seasonal average rectal temperature rose from 38.39 ± 0.03 °C in winter to 38.89 ± 0.03 °C in summer. Respiration rose from 14.88 ± 0.09 to 17.3 ± 0.11 breaths/min. Heat tolerance coefficient fell from 99.05 ± 0.29 in winter to 94.13 ± 0.29 in summer. Across seasons, genotype AA had a lower average rectal temperature (38.48 ± 0.03 °C) and a higher heat tolerance coefficient (98.22 ± 0.28) than AB and BB. The authors describe allele A as favourable in this sample. Summer values show that the animals were not physiologically unchanged by heat.",
    findingsHi:
      "मौसमी औसत मलाशय तापमान सर्दी में 38.39 ± 0.03 °C से गर्मी में 38.89 ± 0.03 °C तक बढ़ा। श्वसन 14.88 ± 0.09 से 17.3 ± 0.11 श्वास/मिनट हुआ। ऊष्मा-सहिष्णुता गुणांक सर्दी के 99.05 ± 0.29 से गर्मी में 94.13 ± 0.29 रह गया। सभी मौसमों में जीनोटाइप AA का औसत मलाशय तापमान (38.48 ± 0.03 °C) AB और BB से कम और ऊष्मा-सहिष्णुता गुणांक (98.22 ± 0.28) अधिक रहा। लेखक इस नमूने में एलील A को अनुकूल बताते हैं। गर्मियों के मान दिखाते हैं कि पशु ऊष्मा से शारीरिक रूप से अपरिवर्तित नहीं रहे।",
    limitations:
      "Sixty-four animals, one locus, and a coefficient that is a rescaling of rectal temperature rather than a field survival score. The authors note that validation in other breeds and a larger population is needed before practical use. Association is not proof that selecting AA will raise milk yield. The study does not claim immunity to heat or disease.",
    limitationsHi:
      "चौंसठ पशु, एक लोकस, और एक गुणांक जो मलाशय तापमान का पुनर्मापन है, मैदानी उत्तरजीविता अंक नहीं। लेखक कहते हैं कि व्यावहारिक उपयोग से पहले अन्य नस्लों और बड़े नमूने में पुष्टि चाहिए। संबंध इस बात का प्रमाण नहीं कि AA चुनने से दूध बढ़ेगा। अध्ययन ऊष्मा या रोग से मुक्ति का दावा नहीं करता।",
    doi: "10.14202/vetworld.2016.113-117",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4819358/",
    pdf: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4819358/pdf/VetWorld-9-113.pdf",
    kind: "paper",
  },
  {
    id: "jose-2022",
    title:
      "Evaluation of thermo-adaptability between Tharparkar (Bos indicus) and crossbred (Bos indicus × Bos taurus) calves in a controlled environment",
    authors:
      "Bosco Jose, Hari Abdul Samad, Jaya Bharati, V. Tejaswi, Pranay Konda, Khan Sharun, Manoj K. Tripathi, Sai Kumar, Meeti Punetha, Divya Mohan, V. Verma, Vikrant Singh Chouhan, V.P. Maurya, G. Taru Sharma, Puneet Kumar, Mihir Sarkar and Gyanendra Singh",
    year: "2022",
    journal: "Journal of Thermal Biology 110: 103381",
    institution: "ICAR-IVRI, Physiology and Climatology Division, Bareilly",
    category: ["heat", "health", "genetics"],
    summary:
      "Climatic-chamber comparison of six Tharparkar and six crossbred male calves under induced heat.",
    summaryHi:
      "प्रेरित ऊष्मा में छह थारपारकर और छह संकर नर बछड़ों की जलवायु-कक्ष तुलना।",
    method:
      "Twelve apparently healthy male calves, 5–6 months old, six per group. Controlled heat at IVRI (28°22′ N, 79°24′ E). Rectal temperature, respiration, serum chemistry and mRNA for HSP70, HSP90, iNOS and eNOS.",
    methodHi:
      "बारह स्वस्थ दिखने वाले नर बछड़े, 5–6 माह, प्रत्येक समूह में छह। IVRI (28°22′ उ., 79°24′ पू.) पर नियंत्रित ऊष्मा। मलाशय तापमान, श्वसन, सीरम रसायन और HSP70, HSP90, iNOS तथा eNOS का mRNA।",
    findings:
      "The authors report breed differences in the shift of rectal temperature and respiration at moderate and severe heat, a lower serum T3 response interpreted as adaptability, higher eNOS expression read as heat-dissipation capacity, and lower HSP70 with higher HSP90 mRNA in Tharparkar calves than in the crossbred calves. They conclude greater thermo-tolerance of these Tharparkar calves under chamber conditions.",
    findingsHi:
      "लेखक मध्यम और तीव्र ऊष्मा पर मलाशय तापमान व श्वसन के बदलाव में नस्ल अंतर, अनुकूलन के रूप में पढ़ी गई कम सीरम T3 प्रतिक्रिया, ऊष्मा-अपव्यय क्षमता के रूप में अधिक eNOS अभिव्यक्ति, और संकर बछड़ों की तुलना में थारपारकर बछड़ों में कम HSP70 तथा अधिक HSP90 mRNA बताते हैं। वे कक्ष स्थितियों में इन थारपारकर बछड़ों की अधिक ऊष्मा-सहिष्णुता का निष्कर्ष निकालते हैं।",
    limitations:
      "Six calves per group. Males only, not lactating cows. The crossbred group is not a second indigenous breed. A chamber is not the Thar. “Greater thermo-tolerance than this crossbred group” is not immunity to heat stress, and it is not a ranking of all Indian breeds.",
    limitationsHi:
      "प्रत्येक समूह में छह बछड़े। केवल नर, दुधारू गायें नहीं। संकर समूह कोई दूसरी देशी नस्ल नहीं है। कक्ष थार नहीं है। “इस संकर समूह से अधिक ऊष्मा-सहिष्णुता” ऊष्मा से मुक्ति नहीं, और सभी भारतीय नस्लों की रैंकिंग नहीं।",
    doi: "10.1016/j.jtherbio.2022.103381",
    url: "https://doi.org/10.1016/j.jtherbio.2022.103381",
    kind: "paper",
  },
  {
    id: "jose-2020",
    title: "Appraisal of thermo-adaptability among Tharparkar and crossbred cattle calves",
    authors:
      "Bosco Jose, Pranay Kumar Konda, Manoj Kumar Tripathi, Khan Sharun, Shyam Kumar, Gyanendra Singh, Mihir Sarkar and Puneet Kumar",
    year: "2020",
    journal: "International Journal of Current Microbiology and Applied Sciences 9(11): 1588–1594",
    institution: "ICAR-IVRI, Izatnagar",
    category: ["heat", "nutrition", "health"],
    summary:
      "Chamber study of feed and water intake and selected cytokines in Tharparkar versus crossbred calves.",
    summaryHi:
      "थारपारकर बनाम संकर बछड़ों में आहार व जल ग्रहण और कुछ साइटोकाइन का कक्ष अध्ययन।",
    method:
      "Seven days of acclimatisation and 21 days of exposure at 25 °C, 31 °C and 37 °C for 6 hours a day, with 9–10 days of recovery between exposures. Crossbred calves are described as Hariana (25 or 50%) and exotic (50 or 75%).",
    methodHi:
      "सात दिन अनुकूलन और 21 दिन तक 25 °C, 31 °C तथा 37 °C पर प्रतिदिन 6 घंटे, बीच में 9–10 दिन की पुनर्प्राप्ति। संकर बछड़ों को हरियाणा (25 या 50%) और विदेशी (50 या 75%) बताया गया है।",
    findings:
      "Dry-matter intake of both groups fell at 31 °C and 37 °C. The increase in water intake was relatively greater in crossbred calves than in Tharparkar calves. Relative expression of IL-1β and IL-10 did not differ significantly between the groups.",
    findingsHi:
      "दोनों समूहों का शुष्क-पदार्थ ग्रहण 31 °C और 37 °C पर गिरा। जल ग्रहण में वृद्धि संकर बछड़ों में थारपारकर बछड़ों की अपेक्षा अधिक रही। IL-1β और IL-10 की सापेक्ष अभिव्यक्ति में समूहों के बीच सार्थक अंतर नहीं मिला।",
    limitations:
      "The open summary does not print kilogram intakes, so this site does not invent them. Calf chamber data are not a lactating-cow ration. A non-significant cytokine contrast is not evidence of disease resistance.",
    limitationsHi:
      "खुले सार में किलोग्राम ग्रहण नहीं छपा, इसलिए यह साइट उसे गढ़ती नहीं। बछड़ों का कक्ष आँकड़ा दुधारू गाय का राशन नहीं है। असार्थक साइटोकाइन अंतर रोग-प्रतिरोध का प्रमाण नहीं।",
    doi: "10.20546/ijcmas.2020.911.188",
    url: "https://ijcmas.com/9-11-2020/Bosco%20Jose,%20et%20al.pdf",
    pdf: "https://ijcmas.com/9-11-2020/Bosco%20Jose,%20et%20al.pdf",
    kind: "paper",
  },
  {
    id: "sodhi-2006",
    title:
      "Microsatellite DNA typing for assessment of genetic variability in Tharparkar breed of Indian zebu (Bos indicus) cattle, a major breed of Rajasthan",
    authors: "M. Sodhi, M. Mukesh, B. Prakash, S.P.S. Ahlawat and R.C. Sobti",
    year: "2006",
    journal: "Journal of Genetics 85: 165–170",
    institution: "ICAR-NBAGR, Karnal, and Panjab University",
    category: ["genetics", "conservation", "identity"],
    summary:
      "Within-breed diversity at 25 microsatellites in 50 Tharparkar animals.",
    summaryHi:
      "50 थारपारकर पशुओं में 25 माइक्रोसेटेलाइट पर नस्ल के भीतर विविधता।",
    method:
      "Random sample of 50 animals. Twenty-five microsatellite markers. Allele counts, heterozygosity, polymorphism information content, FIS, and a bottleneck test.",
    methodHi:
      "50 पशुओं का यादृच्छिक नमूना। पच्चीस माइक्रोसेटेलाइट चिह्नक। एलील संख्या, विषमयुग्मता, बहुरूपता सूचना मात्रा, FIS और बॉटलनेक परीक्षण।",
    findings:
      "Observed alleles per locus ranged from 4 to 11. Mean allele diversity 6.20. Mean observed heterozygosity 0.57; mean expected heterozygosity 0.67; mean PIC 0.60. Mean FIS was 0.39, which the authors read as accumulated inbreeding, while still describing substantial variability. They concluded the sampled population had not experienced a recent bottleneck.",
    findingsHi:
      "प्रति लोकस प्रेक्षित एलील 4 से 11। औसत एलील विविधता 6.20। औसत प्रेक्षित विषमयुग्मता 0.57; अपेक्षित 0.67; औसत PIC 0.60। औसत FIS 0.39 था, जिसे लेखकों ने संचित अंतःप्रजनन पढ़ा, साथ ही विविधता को पर्याप्त बताया। उनका निष्कर्ष था कि नमूना जनसंख्या में हाल का बॉटलनेक नहीं हुआ।",
    limitations:
      "Fifty animals and a 2006 marker panel. FIS is a sample statistic, not a universal breed quality score and not a field purity test. Microsatellites do not, by themselves, certify that a living animal is purebred.",
    limitationsHi:
      "पचास पशु और 2006 का चिह्नक पैनल। FIS नमूना आँकड़ा है, सार्वभौमिक नस्ल-गुणवत्ता अंक नहीं और मैदानी शुद्धता परीक्षा नहीं। केवल माइक्रोसेटेलाइट किसी जीवित पशु को शुद्ध नस्ल प्रमाणित नहीं करते।",
    doi: "10.1007/BF02935326",
    url: "https://www.ias.ac.in/article/fulltext/jgen/085/03/0165-0170",
    pdf: "https://www.ias.ac.in/article/fulltext/jgen/085/03/0165-0170",
    kind: "paper",
  },
  {
    id: "devadasan-2020",
    title:
      "Reduced representation approach for identification of genome-wide SNPs and their annotation for economically important traits in Indian Tharparkar cattle",
    authors:
      "M. Joel Devadasan, D. Ravi Kumar, M.R. Vineeth, Anjali Choudhary, T. Surya, S.K. Niranjan, Archana Verma and Jayakumar Sivalingam",
    year: "2020",
    journal: "3 Biotech 10: 309",
    institution: "ICAR-NDRI and ICAR-NBAGR",
    category: ["genetics"],
    summary:
      "Reduced-representation sequencing to catalogue indicine SNPs and annotate a subset to candidate genes.",
    summaryHi:
      "इंडिकाइन एसएनपी की सूची और कुछ को अभ्यर्थी जीनों से जोड़ने के लिए रिड्यूस्ड-रिप्रेजेंटेशन अनुक्रमण।",
    method:
      "SNPs called against Bos taurus and Bos indicus reference genomes, then annotated to genes linked in the literature to milk, fertility, carcass, immunity and adaptability. Sequence data: NCBI BioProject PRJNA633222. The abstract accessed for this site does not state how many animals were sequenced.",
    methodHi:
      "एसएनपी Bos taurus और Bos indicus संदर्भ जीनोम के विरुद्ध बुलाए गए, फिर दूध, प्रजनन, शव, प्रतिरक्षा और अनुकूलन से जुड़े जीनों पर टिप्पणी। अनुक्रम डेटा: NCBI बायोप्रोजेक्ट PRJNA633222। इस साइट के लिए पढ़े गए सार में पशु संख्या नहीं है।",
    findings:
      "146,011 SNPs versus the Bos taurus reference, of which 10,519 were called novel; 87,047 SNPs versus the Bos indicus reference. After annotation against the indicine reference, 2,871 SNPs lay in 383 candidate genes. The authors also report 2,571 microsatellites. These are catalogue counts, not effect sizes for milk or heat tolerance.",
    findingsHi:
      "Bos taurus संदर्भ के विरुद्ध 1,46,011 एसएनपी, जिनमें 10,519 नए कहे गए; Bos indicus संदर्भ के विरुद्ध 87,047 एसएनपी। इंडिकाइन संदर्भ पर टिप्पणी के बाद 383 अभ्यर्थी जीनों में 2,871 एसएनपी। लेखक 2,571 माइक्रोसेटेलाइट भी बताते हैं। ये सूची संख्याएँ हैं, दूध या ऊष्मा-सहिष्णुता के प्रभाव-आकार नहीं।",
    limitations:
      "Annotation to a candidate gene is not proof that the variant changes the trait in Tharparkar. Animal number was not in the abstract used here and is therefore not stated. Novel relative to a reference is not “unique to Tharparkar” in a global sense unless comparative samples show that.",
    limitationsHi:
      "किसी अभ्यर्थी जीन पर टिप्पणी इस बात का प्रमाण नहीं कि वह भिन्नरूप थारपारकर में गुण बदलता है। पशु संख्या पढ़े गए सार में नहीं थी, इसलिए यहाँ नहीं दी गई। संदर्भ के सापेक्ष “नया” वैश्विक अर्थ में “केवल थारपारकर” नहीं है।",
    doi: "10.1007/s13205-020-02297-z",
    url: "https://doi.org/10.1007/s13205-020-02297-z",
    kind: "paper",
  },
  {
    id: "saravanan-2022",
    title:
      "Genome-wide assessment of genetic diversity, linkage disequilibrium and haplotype block structure in Tharparkar cattle breed of India",
    authors:
      "K.A. Saravanan, Manjit Panigrahi, Harshit Kumar, Subhashree Parida, Bharat Bhushan, G.K. Gaur, Pushpendra Kumar, Triveni Dutt, B.P. Mishra and R.K. Singh",
    year: "2022",
    journal: "Animal Biotechnology 33(2): 297–311",
    institution: "ICAR-Indian Veterinary Research Institute, Izatnagar",
    category: ["genetics", "conservation"],
    summary:
      "SNP-array portrait of diversity, runs of homozygosity, inbreeding, linkage disequilibrium and effective population size in 24 Tharparkar animals.",
    summaryHi:
      "24 थारपारकर पशुओं में विविधता, होमोजाइगोसिटी रन, अंतःप्रजनन, लिंकेज डिसइक्विलिब्रियम और प्रभावी जनसंख्या आकार का एसएनपी-ऐरे चित्र।",
    method:
      "Illumina BovineSNP50 genotypes. After quality control, 22,825 biallelic SNPs remained (Hardy–Weinberg, minor-allele frequency > 0.05, genotyping rate > 90%).",
    methodHi:
      "इल्यूमिना बोवाइनएसएनपी50 जीनोटाइप। गुणवत्ता नियंत्रण के बाद 22,825 द्वि-एलील एसएनपी बचे (हार्डी-वेनबर्ग, माइनर-एलील आवृत्ति > 0.05, जीनोटाइपिंग दर > 90%)।",
    findings:
      "Mean observed heterozygosity 0.339 ± 0.156; expected heterozygosity 0.325 ± 0.129; mean minor-allele frequency 0.234 ± 0.131. 1,832 runs of homozygosity; highest autosomal coverage 13.87% on chromosome 23. Genomic inbreeding: FROH 0.0589, FHOM 0.0215, FGRM 0.0532, FUNI 0.0160. Mean linkage disequilibrium for 133,532 SNP pairs: D′ 0.6452 and r² 0.1339. Effective population size was reported to decline across past generations. These four inbreeding estimators do not agree with each other; that is expected, because they measure different things.",
    findingsHi:
      "औसत प्रेक्षित विषमयुग्मता 0.339 ± 0.156; अपेक्षित 0.325 ± 0.129; औसत माइनर-एलील आवृत्ति 0.234 ± 0.131। होमोजाइगोसिटी के 1,832 रन; गुणसूत्र 23 पर सर्वाधिक ऑटोसोमल कवरेज 13.87%। जीनोमिक अंतःप्रजनन: FROH 0.0589, FHOM 0.0215, FGRM 0.0532, FUNI 0.0160। 1,33,532 एसएनपी युग्मों का औसत लिंकेज डिसइक्विलिब्रियम: D′ 0.6452 और r² 0.1339। प्रभावी जनसंख्या आकार पिछली पीढ़ियों में घटता बताया गया। चारों अंतःप्रजनन आकलक आपस में मेल नहीं खाते; यह अपेक्षित है, क्योंकि वे अलग चीजें मापते हैं।",
    limitations:
      "Twenty-four animals is a small genome-wide sample. Heterozygosity on a taurine-designed 50K chip is not comparable, without care, to the microsatellite heterozygosity in Sodhi et al. (2006). None of the F statistics is a breed score. A declining effective-population-size trajectory is a warning for management, not a legal endangered listing. This site did not verify a current census status.",
    limitationsHi:
      "चौबीस पशु जीनोम-व्यापी नमूने के लिए कम हैं। टॉरीन-डिज़ाइन 50K चिप पर विषमयुग्मता को सावधानी के बिना सोधी आदि (2006) की माइक्रोसेटेलाइट विषमयुग्मता से न जोड़ें। कोई भी F आँकड़ा नस्ल-अंक नहीं है। घटता प्रभावी जनसंख्या आकार प्रबंधन की चेतावनी है, कानूनी संकटग्रस्त घोषणा नहीं। इस साइट ने वर्तमान गणना-स्थिति सत्यापित नहीं की।",
    doi: "10.1080/10495398.2020.1796696",
    url: "https://doi.org/10.1080/10495398.2020.1796696",
    kind: "paper",
  },
  {
    id: "gharoor-1992",
    title:
      "Repeatability of lactation yield, peak milk yield and days in milk in Tharparkar cows",
    authors: "Abdul Gharoor, U.N. Khan and M.A. Khan",
    year: "1992",
    journal: "Pakistan Journal of Agricultural Sciences 29(4)",
    institution:
      "Pakistan Agricultural Research Council and University of Agriculture, Faisalabad; herd at Livestock Experiment Station, Rakh Ghulaman, Bhakkar",
    category: ["milk", "genetics"],
    summary:
      "Repeatability of lactation traits in a Pakistani station herd of Tharparkar cows, 1965–1978. Included because the breed’s documented names and origin extend into Sindh, and the paper is explicitly about Tharparkar. It is not an Indian native-tract estimate.",
    summaryHi:
      "1965–1978 के एक पाकिस्तानी स्टेशन झुंड में थारपारकर गायों के ब्यांत गुणों की पुनरावृत्ति। इसलिए शामिल है क्योंकि नस्ल के प्रलेखित नाम और उत्पत्ति सिंध तक जाते हैं, और शोधपत्र स्पष्ट रूप से थारपारकर पर है। यह भारतीय मूल क्षेत्र का अनुमान नहीं है।",
    method:
      "506 lactation records of 120 cows. Lactations shorter than five months, and lactations interrupted by disease, were excluded. Author spelling follows the PDF text extract (Gharoor).",
    methodHi:
      "120 गायों के 506 ब्यांत अभिलेख। पाँच माह से छोटे और बीमारी से टूटे ब्यांत हटाए गए। लेखक वर्तनी पीडीएफ पाठ के अनुसार (Gharoor) है।",
    findings:
      "Mean lactation yield 1338.69 ± 18.70 kg (range 488.18–3101.31 kg; coefficient of variation 31.42%). Repeatability: lactation yield 0.305 ± 0.03; peak milk yield 0.0329 ± 0.05; days in milk 0.219 ± 0.05. The wide range inside one herd is itself a result: cows were not alike.",
    findingsHi:
      "औसत ब्यांत उत्पादन 1338.69 ± 18.70 किग्रा (सीमा 488.18–3101.31 किग्रा; विचरण गुणांक 31.42%)। पुनरावृत्ति: ब्यांत उत्पादन 0.305 ± 0.03; चरम दुग्ध 0.0329 ± 0.05; दुग्ध-दिन 0.219 ± 0.05। एक ही झुंड की चौड़ी सीमा स्वयं परिणाम है: गायें एक जैसी नहीं थीं।",
    limitations:
      "Station is in Bhakkar district, Punjab, Pakistan, not Jaisalmer, Barmer or Jodhpur. Historical management, exclusion of short lactations, and a 1992 analysis. Repeatability is not heritability. Do not cite 1339 kg as the Indian breed average.",
    limitationsHi:
      "स्टेशन पाकिस्तान के पंजाब के भक्कर जिले में है, जैसलमेर, बाड़मेर या जोधपुर में नहीं। ऐतिहासिक प्रबंधन, छोटे ब्यांतों का बहिष्कार, और 1992 का विश्लेषण। पुनरावृत्ति आनुवंशिकता नहीं है। 1339 किग्रा को भारतीय नस्ल औसत न कहें।",
    url: "https://www.pakjas.com.pk/papers/1021.pdf",
    pdf: "https://www.pakjas.com.pk/papers/1021.pdf",
    kind: "paper",
  },
  {
    id: "bharati-hsp70-2017",
    title: "Expression dynamics of HSP70 during chronic heat stress in Tharparkar cattle",
    authors:
      "Jaya Bharati, S.S. Dangi, V.S. Chouhan, S.R. Mishra, M.K. Bharti, V. Verma, O. Shankar, V.P. Yadav, K. Das, A. Paul, S. Bag, V.P. Maurya, G. Singh, P. Kumar and M. Sarkar",
    year: "2017",
    journal: "International Journal of Biometeorology 61: 1017–1027",
    institution: "ICAR-IVRI, Physiology and Climatology, Izatnagar",
    category: ["heat", "genetics", "health"],
    summary:
      "Six male Tharparkar cattle in a psychrometric chamber. HSP70 in blood cells and serum rose in two peaks during a long 42 °C exposure.",
    summaryHi:
      "मनोमितीय कक्ष में छह नर थारपारकर पशु। लंबी 42 °C एक्सपोजर में रक्त कोशिकाओं और सीरम में HSP70 दो शिखरों पर बढ़ा।",
    method:
      "Males aged 2–3 years. Fifteen days at the thermoneutral zone, then up to 23 days at 42 °C, then 12 days of recovery. HSP70 mRNA and protein were measured in peripheral blood mononuclear cells, and extracellular HSP70 in serum. Cultured cells were also challenged across temperature–time combinations. Published online 19 December 2016; journal issue June 2017.",
    methodHi:
      "2–3 वर्ष के नर। ताप-तटस्थ क्षेत्र में पंद्रह दिन, फिर 23 दिन तक 42 °C, फिर 12 दिन की पुनर्प्राप्ति। परिधीय रक्त एककेंद्रक कोशिकाओं में HSP70 का mRNA और प्रोटीन, तथा सीरम में बाह्य HSP70। संवर्धित कोशिकाओं पर तापमान–समय संयोजन भी। ऑनलाइन 19 दिसंबर 2016; पत्रिका अंक जून 2017।",
    findings:
      "HSP70 mRNA, protein and serum extracellular HSP70 increased (P < 0.05) with peaks on day 17 and day 32, which the authors identify as the 2nd and 17th days of thermal challenge. Expression after 10 days of heat (their chronic window) was higher than in the first 5 days and higher than at thermoneutrality. In culture, expression rose with temperature and time. The authors read the second peak as a possible second window of protection. That reading is their interpretation of the expression curve.",
    findingsHi:
      "HSP70 mRNA, प्रोटीन और सीरम बाह्य HSP70 बढ़े (P < 0.05), शिखर दिन 17 और दिन 32 पर, जिन्हें लेखक ऊष्मीय चुनौती का दूसरा और सत्रहवाँ दिन बताते हैं। दस दिन की ऊष्मा (उनकी दीर्घ अवधि) के बाद अभिव्यक्ति पहले पाँच दिनों और ताप-तटस्थ अवस्था से अधिक थी। संवर्धन में अभिव्यक्ति तापमान और समय के साथ बढ़ी। लेखक दूसरे शिखर को सुरक्षा की संभावित दूसरी खिड़की पढ़ते हैं। वह अभिव्यक्ति वक्र की उनकी व्याख्या है।",
    limitations:
      "Six males, not lactating cows. A chamber at Izatnagar is not the Thar. The paper does not report milk yield, fertility or survival. A rise in HSP70 shows a cellular stress response. It is not a heat-proof certificate, and it is not the same experiment as Bhat’s HSP70 genotype panel.",
    limitationsHi:
      "छह नर, दुधारू गायें नहीं। इज्जतनगर का कक्ष थार नहीं है। शोधपत्र दुग्ध, प्रजनन या उत्तरजीविता नहीं बताता। HSP70 का बढ़ना कोशिकीय तनाव-प्रतिक्रिया है। वह ऊष्मा-मुक्त प्रमाणपत्र नहीं, और भट्ट के HSP70 जीनोटाइप पैनल वाला प्रयोग नहीं।",
    doi: "10.1007/s00484-016-1281-1",
    url: "https://doi.org/10.1007/s00484-016-1281-1",
    kind: "paper",
  },
  {
    id: "bharati-tlr-2017",
    title:
      "Expression analysis of Toll-like receptors and interleukins in Tharparkar cattle during acclimation to heat stress exposure",
    authors:
      "Jaya Bharati, S.S. Dangi, S.R. Mishra, V.S. Chouhan, V. Verma, O. Shankar, M.K. Bharti, A. Paul, Dilip K. Mahato, G. Rajesh, G. Singh, V.P. Maurya, S. Bag, Puneet Kumar and M. Sarkar",
    year: "2017",
    journal: "Journal of Thermal Biology 65: 48–56",
    institution: "ICAR-IVRI, Physiology and Climatology, Izatnagar",
    category: ["heat", "health"],
    summary:
      "In six young male Tharparkar cattle at 42 °C, TLR2, TLR4, IL-2 and IL-6 changed on different time scales during acclimation.",
    summaryHi:
      "42 °C पर छह युवा नर थारपारकर पशुओं में अनुकूलन के दौरान TLR2, TLR4, IL-2 और IL-6 अलग समय-सीमा पर बदले।",
    method:
      "Six males, 2–3 years. Fifteen days at thermoneutrality, then 42 °C for 6 hours a day for up to 23 days, then 12 days of recovery. Short-term acclimation was defined as days 1–10 of heat and long-term as days 15–23. Transcripts were measured in blood mononuclear cells, with a parallel culture study.",
    methodHi:
      "छह नर, 2–3 वर्ष। ताप-तटस्थता पर पंद्रह दिन, फिर 23 दिन तक प्रतिदिन 6 घंटे 42 °C, फिर 12 दिन की पुनर्प्राप्ति। अल्पकालिक अनुकूलन ऊष्मा के दिन 1–10 और दीर्घकालिक दिन 15–23। प्रतिलेख रक्त एककेंद्रक कोशिकाओं में, साथ में संवर्धन अध्ययन।",
    findings:
      "TLR2 was up-regulated in the short-term window and returned toward baseline in the long-term and recovery windows. TLR4 stayed up-regulated in both heat windows and declined in recovery. IL-2 and IL-6 were up-regulated in the short-term window and reduced toward baseline in the long-term window. The authors conclude these molecules could play a role in thermotolerance and that the pattern is time-specific.",
    findingsHi:
      "TLR2 अल्पकालिक खिड़की में बढ़ा और दीर्घकालिक तथा पुनर्प्राप्ति में आधार रेखा की ओर लौटा। TLR4 दोनों ऊष्मा खिड़कियों में बढ़ा रहा और पुनर्प्राप्ति में गिरा। IL-2 और IL-6 अल्पकालिक खिड़की में बढ़े और दीर्घकालिक खिड़की में आधार रेखा की ओर घटे। लेखक निष्कर्ष निकालते हैं कि ये अणु ऊष्मा-सहिष्णुता में भूमिका निभा सकते हैं और पैटर्न समय-विशिष्ट है।",
    limitations:
      "The design matches Bharati and colleagues’ 2017 HSP70 chamber paper (six males, 2–3 years, 15 days thermoneutral, about 23 days at 42 °C, 12 days recovery). This site treats them as companion measurements, not as two independent herds, unless a methods note shows otherwise. Six males. Changed cytokine transcripts are not antibody titres and are not resistance to a named disease. No milk data.",
    limitationsHi:
      "रूपरेखा भारती और सहयोगियों के 2017 HSP70 कक्ष शोधपत्र से मेल खाती है (छह नर, 2–3 वर्ष, 15 दिन ताप-तटस्थ, लगभग 23 दिन 42 °C, 12 दिन पुनर्प्राप्ति)। जब तक विधि-टिप्पणी अन्यथा न दिखाए, यह साइट इन्हें साथ के माप मानती है, दो स्वतंत्र झुंड नहीं। छह नर। बदले साइटोकाइन प्रतिलेख किसी नामित रोग के प्रतिरक्षी टिटर नहीं और प्रतिरोध नहीं। दुग्ध आँकड़े नहीं।",
    doi: "10.1016/j.jtherbio.2017.02.002",
    url: "https://doi.org/10.1016/j.jtherbio.2017.02.002",
    kind: "paper",
  },
  {
    id: "pandey-2017",
    title:
      "Impact of heat stress and hypercapnia on physiological, hematological, and behavioral profile of Tharparkar and Karan Fries heifers",
    authors: "Priyanka Pandey, O.K. Hooda and Sunil Kumar",
    year: "2017",
    journal: "Veterinary World 10(9): 1149–1155",
    institution: "Department line not printed on the journal abstract page consulted",
    category: ["heat", "health"],
    summary:
      "Heifers of Tharparkar and Karan Fries were exposed to 40 °C and 42 °C together with raised carbon dioxide. Karan Fries ran hotter.",
    summaryHi:
      "थारपारकर और करण फ्रीज बछड़ियों को 40 °C और 42 °C के साथ बढ़ा कार्बन डाइऑक्साइड दिया गया। करण फ्रीज अधिक गर्म रहीं।",
    method:
      "Control was 25 °C, 400 ppm CO2 and 60% relative humidity. Treatments were 40 °C and 42 °C, each with 500 ppm and 600 ppm CO2, at 55 ± 5% relative humidity. Each condition lasted 4 hours a day for 5 consecutive days. Outcomes were respiration, pulse, rectal temperature, haematology and behaviour.",
    methodHi:
      "नियंत्रण 25 °C, 400 ppm CO2 और 60% सापेक्ष आर्द्रता था। उपचार 40 °C और 42 °C थे, प्रत्येक 500 ppm और 600 ppm CO2 के साथ, 55 ± 5% सापेक्ष आर्द्रता पर। हर स्थिति लगातार 5 दिन, प्रतिदिन 4 घंटे। परिणाम श्वसन, नाड़ी, मलाशय तापमान, रक्तविज्ञान और व्यवहार।",
    findings:
      "Respiration rate, pulse rate and rectal temperature were higher than control in both breeds under every exposure (P < 0.01), and higher in Karan Fries heifers than in Tharparkar heifers. Red blood cells, haemoglobin and packed cell volume were higher than control in both breeds. Total leukocyte count and differential leukocyte count did not change significantly.",
    findingsHi:
      "हर एक्सपोजर में दोनों नस्लों में श्वसन, नाड़ी और मलाशय तापमान नियंत्रण से अधिक रहे (P < 0.01), और करण फ्रीज बछड़ियों में थारपारकर से अधिक। लाल रक्त कोशिकाएँ, हीमोग्लोबिन और संकुल कोशिका आयतन दोनों नस्लों में नियंत्रण से अधिक रहे। कुल श्वेत कोशिका गणना और विभेदक गणना सार्थक रूप से नहीं बदली।",
    limitations:
      "The abstract consulted does not state how many heifers were used, so this site prints no headcount. Heat and raised CO2 were applied together, so the contrast is not heat alone. No numeric means for respiration or temperature were in that abstract, and none are invented. Karan Fries is a Tharparkar × Holstein Friesian cross. A smaller rise than that cross is not a ranking against Sahiwal or Gir, and it is not immunity.",
    limitationsHi:
      "समीक्षित सार पशु संख्या नहीं बताता, इसलिए यह साइट संख्या नहीं छापती। ऊष्मा और बढ़ा CO2 साथ दिए गए, इसलिए अंतर केवल ऊष्मा का नहीं। उस सार में श्वसन या तापमान के संख्यात्मक माध्य नहीं थे, और गढ़े नहीं गए। करण फ्रीज थारपारकर × होल्स्टीन फ्रीजियन संकर है। उस संकर से छोटा उछाल साहीवाल या गिर की रैंकिंग नहीं, और मुक्ति नहीं।",
    doi: "10.14202/vetworld.2017.1149-1155",
    url: "https://www.veterinaryworld.org/Vol.10/September-2017/22.html",
    kind: "paper",
  },
  {
    id: "singh-ak-2020",
    title:
      "Genome-wide expression analysis of the heat stress response in dermal fibroblasts of Tharparkar (zebu) and Karan-Fries (zebu × taurine) cattle",
    authors: "A.K. Singh, R.C. Upadhyay, Gulab Chandra, Sudarshan Kumar, D. Malakar, S.V. Singh and M.K. Singh",
    year: "2020",
    journal: "Cell Stress and Chaperones 25: 327–344",
    institution: "ICAR-NDRI, Karnal; lead author also at Veterinary College, Rewa",
    category: ["heat", "genetics"],
    summary:
      "Microarray of cultured skin fibroblasts. Tharparkar cells changed more transcripts under heat than Karan Fries cells, including heat-shock and metabolism pathways.",
    summaryHi:
      "संवर्धित त्वचा तंतुकोशिकाओं का माइक्रोएरे। ऊष्मा में थारपारकर कोशिकाओं ने करण फ्रीज कोशिकाओं से अधिक प्रतिलेख बदले, जिनमें हीट-शॉक और चयापचय मार्ग शामिल हैं।",
    method:
      "Cultured dermal fibroblasts from Tharparkar and from Karan Fries (Tharparkar × Holstein Friesian). A microarray of 51,338 probes covering at least 36,713 unigenes. Differential expression was called at a fold change of at least 2. A random real-time PCR subset was used as a check. The abstract does not state how many donor animals supplied the cultures.",
    methodHi:
      "थारपारकर और करण फ्रीज (थारपारकर × होल्स्टीन फ्रीजियन) की संवर्धित त्वचीय तंतुकोशिकाएँ। कम से कम 36,713 यूनीजीन को कवर करते 51,338 प्रोब का माइक्रोएरे। अंतर अभिव्यक्ति कम से कम 2 गुना बदलाव पर। यादृच्छिक रियल-टाइम पीसीआर उपसमुच्चय जाँच के लिए। सार नहीं बताता कि संवर्धन कितने दाता पशुओं से आए।",
    findings:
      "11,183 transcripts in Tharparkar cells and 8,126 in Karan Fries cells passed the fold-change threshold. The PCR check correlated 83.33% with the array. Upregulated genes were enriched for protein processing and NOD-like receptor pathways. Downregulated genes were enriched for cell cycle, metabolism and protein transport. The authors describe activation of heat-shock factors and heat-shock proteins, more apoptosis signalling, and less protein synthesis.",
    findingsHi:
      "थारपारकर कोशिकाओं में 11,183 और करण फ्रीज कोशिकाओं में 8,126 प्रतिलेख गुना-बदलाव सीमा पार कर गए। पीसीआर जाँच की सारणी से 83.33% सहसंबंध रहा। बढ़े जीन प्रोटीन प्रसंस्करण और NOD-जैसे ग्राही मार्गों में समृद्ध थे। घटे जीन कोशिका चक्र, चयापचय और प्रोटीन परिवहन में। लेखक हीट-शॉक कारकों और प्रोटीनों की सक्रियता, अधिक एपोप्टोसिस संकेत, और कम प्रोटीन संश्लेषण बताते हैं।",
    limitations:
      "This is a cell culture, not a cow in the sun. Donor number is not in the abstract used here, so it is not guessed. More transcripts moving is not automatically “more tolerance”; the authors themselves tie the response to stress, apoptosis and reduced metabolism. Karan Fries is one crossbred comparator. Open access via PMC.",
    limitationsHi:
      "यह कोशिका संवर्धन है, धूप में खड़ी गाय नहीं। प्रयुक्त सार में दाता संख्या नहीं है, इसलिए अनुमान नहीं। अधिक प्रतिलेखों का हिलना अपने आप “अधिक सहनशीलता” नहीं; लेखक स्वयं प्रतिक्रिया को तनाव, एपोप्टोसिस और घटे चयापचय से जोड़ते हैं। करण फ्रीज एक संकर तुलनित्र है। पीएमसी पर खुली पहुँच।",
    doi: "10.1007/s12192-020-01076-2",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7058763/",
    kind: "paper",
  },
  {
    id: "anjali-2023",
    title:
      "Comparative assessment of thermoadaptibility between Tharparkar and Sahiwal based on biochemical profile and gene expression pattern under heat stress",
    authors:
      "Anjali, Gururaj V.K., Lipika Sarma, Priyanka M. Kittur, Amit Kumar, Meeti Punetha, M.C. Pathak, V. Verma, H.A. Samad, V.P. Maurya, V.S. Chouhan and Gyanendra Singh",
    year: "2023",
    journal: "Livestock Science 270: 105189",
    institution: "ICAR-IVRI chamber series (author overlap with Physiology and Climatology)",
    category: ["heat", "health", "genetics"],
    summary:
      "Five Tharparkar and five Sahiwal animals at 35 °C and 42 °C. Sahiwal showed larger biochemical and several stress-gene shifts; Tharparkar showed higher HSP90 and eNOS.",
    summaryHi:
      "35 °C और 42 °C पर पाँच थारपारकर और पाँच साहीवाल पशु। साहीवाल में बड़े जैवरासायनिक और कई तनाव-जीन बदलाव; थारपारकर में अधिक HSP90 और eNOS।",
    method:
      "Five animals in each breed. Seven days of acclimatisation, then 21 days at moderate heat (35 °C) and severe heat (42 °C), with 9–10 days of recovery between exposures. Weekly serum biochemistry and PBMC transcripts for HSP70, HSP90, TLR2, TLR4, IL-1, IL-10, TNF-α and eNOS. Rectal temperature and respiration were also recorded.",
    methodHi:
      "प्रत्येक नस्ल में पाँच पशु। सात दिन अनुकूलन, फिर मध्यम ऊष्मा (35 °C) और तीव्र ऊष्मा (42 °C) पर 21 दिन, एक्सपोजर के बीच 9–10 दिन की पुनर्प्राप्ति। साप्ताहिक सीरम जैवरसायन और PBMC प्रतिलेख: HSP70, HSP90, TLR2, TLR4, IL-1, IL-10, TNF-α और eNOS। मलाशय तापमान और श्वसन भी।",
    findings:
      "Rectal temperature and respiration rose as the exposure temperature rose. AST, ALT, ALP and cholesterol were higher in Sahiwal than in Tharparkar during heat (P < 0.05). Total protein did not differ significantly. Relative mRNA of HSP70, TLR2, TLR4, IL-1, IL-10 and TNF-α was higher in Sahiwal; HSP90 and eNOS were higher in Tharparkar. The authors conclude greater thermal tolerance in this Tharparkar group than in this Sahiwal group. A companion paper on the same schedule is listed separately (thyroid hormones and cortisol) and is not a second herd.",
    findingsHi:
      "एक्सपोजर तापमान बढ़ने पर मलाशय तापमान और श्वसन बढ़े। ऊष्मा के दौरान AST, ALT, ALP और कोलेस्ट्रॉल साहीवाल में थारपारकर से अधिक रहे (P < 0.05)। कुल प्रोटीन सार्थक रूप से भिन्न नहीं रहा। HSP70, TLR2, TLR4, IL-1, IL-10 और TNF-α का सापेक्ष mRNA साहीवाल में अधिक रहा; HSP90 और eNOS थारपारकर में अधिक। लेखक इस थारपारकर समूह में इस साहीवाल समूह से अधिक ऊष्मीय सहनशीलता का निष्कर्ष निकालते हैं। उसी सारणी का साथी शोधपत्र (थायरॉइड हार्मोन और कोर्टिसोल) अलग सूचीबद्ध है और दूसरा झुंड नहीं है।",
    limitations:
      "Five animals per breed. The title’s spelling “thermoadaptibility” is the journal’s. Degree-by-degree rectal temperatures are not copied because the abstract consulted does not print them. Higher stress-gene expression in Sahiwal is a relative pattern in this chamber, not a claim that Sahiwal lacks heat tolerance or that Tharparkar is unchanged by heat. No milk yields.",
    limitationsHi:
      "प्रत्येक नस्ल में पाँच पशु। शीर्षक की वर्तनी “thermoadaptibility” पत्रिका की है। डिग्री-दर-डिग्री मलाशय तापमान नहीं उतारे गए क्योंकि समीक्षित सार उन्हें नहीं छापता। साहीवाल में अधिक तनाव-जीन अभिव्यक्ति इस कक्ष का सापेक्ष पैटर्न है, यह दावा नहीं कि साहीवाल में ऊष्मा सहनशीलता नहीं या थारपारकर ऊष्मा से अपरिवर्तित है। दुग्ध उत्पादन नहीं।",
    doi: "10.1016/j.livsci.2023.105189",
    url: "https://doi.org/10.1016/j.livsci.2023.105189",
    kind: "paper",
  },
  {
    id: "anjali-thyroid-2023",
    title: "Thyroid hormone dynamics of Tharparkar and Sahiwal cattle during induced heat stress",
    authors: "Anjali, Gururaj V.K., Lipika Sarma and colleagues",
    year: "2023",
    journal: "Tropical Animal Health and Production 55: 57",
    institution: "Same five-plus-five exposure series as Anjali and colleagues, Livestock Science 2023",
    category: ["heat", "health"],
    summary:
      "On the same induced-heat schedule, thyroxine and cortisol shifted more in Sahiwal than in Tharparkar. Tri-iodothyronine did not differ significantly between breeds.",
    summaryHi:
      "उसी प्रेरित-ऊष्मा सारणी पर थायरॉक्सिन और कोर्टिसोल साहीवाल में थारपारकर से अधिक हिले। ट्राई-आयोडोथायरोनीन में नस्लों के बीच सार्थक अंतर नहीं रहा।",
    method:
      "Five Tharparkar and five Sahiwal. Seven-day acclimatisation, then 21-day exposures at 25 °C, 35 °C and 42 °C, with 9–10 days of recovery between exposures. Serum T3, T4 and cortisol.",
    methodHi:
      "पाँच थारपारकर और पाँच साहीवाल। सात दिन अनुकूलन, फिर 25 °C, 35 °C और 42 °C पर 21-दिवसीय एक्सपोजर, बीच में 9–10 दिन की पुनर्प्राप्ति। सीरम T3, T4 और कोर्टिसोल।",
    findings:
      "T3 and T4 fell, and cortisol rose, in both breeds under heat. The fall in T4 was significantly larger in Sahiwal. The breed difference in T3 was not significant. Cortisol rose significantly more in Sahiwal. The authors read the hormonal profile as better thermo-adaptability in Tharparkar in this comparison.",
    findingsHi:
      "ऊष्मा में दोनों नस्लों में T3 और T4 घटे, और कोर्टिसोल बढ़ा। T4 की गिरावट साहीवाल में सार्थक रूप से बड़ी थी। T3 में नस्ल अंतर सार्थक नहीं था। कोर्टिसोल साहीवाल में सार्थक रूप से अधिक बढ़ा। लेखक इस तुलना में हार्मोन प्रोफ़ाइल को थारपारकर की बेहतर ऊष्मा-अनुकूलता पढ़ते हैं।",
    limitations:
      "This is the hormone paper of the Anjali series, not an independent replication. Five animals per breed. “Not significant” for T3 means this sample did not detect a breed difference; it does not prove the hormones are identical. No absolute concentrations were printed in the abstract consulted, so none are shown. Not a native-tract study.",
    limitationsHi:
      "यह अंजलि श्रृंखला का हार्मोन शोधपत्र है, स्वतंत्र पुनरावृत्ति नहीं। प्रत्येक नस्ल में पाँच पशु। T3 के लिए “सार्थक नहीं” का अर्थ है कि इस नमूने ने नस्ल अंतर नहीं पकड़ा; यह सिद्ध नहीं करता कि हार्मोन एक जैसे हैं। समीक्षित सार में निरपेक्ष सांद्रता नहीं छपीं, इसलिए दिखाई नहीं गईं। मूल क्षेत्र का अध्ययन नहीं।",
    doi: "10.1007/s11250-023-03477-8",
    url: "https://doi.org/10.1007/s11250-023-03477-8",
    kind: "paper",
  },
  {
    id: "singh-ayushi-2024",
    title:
      "Functional transcriptome analysis revealed major changes in pathways affecting systems biology of Tharparkar cattle under seasonal heat stress",
    authors: "Ayushi Singh, Archana Verma, Gaurav Dutta, Gopal R. Gowane, Ashutosh Ludri and Rani Alex",
    year: "2024",
    journal: "3 Biotech 14: 177",
    institution: "ICAR-NDRI, Animal Genetics and Breeding Division, Karnal",
    category: ["heat", "genetics"],
    summary:
      "Whole-blood RNA sequencing of five Tharparkar heifers, split across spring and summer. Thousands of transcripts differed. The seasons used different animals.",
    summaryHi:
      "पाँच थारपारकर बछड़ियों के संपूर्ण-रक्त आरएनए अनुक्रमण, बसंत और गर्मी में बँटे हुए। हज़ारों प्रतिलेख भिन्न रहे। मौसमों में अलग पशु थे।",
    method:
      "Five apparently healthy Tharparkar heifers at NDRI. Blood from two animals in spring (March, THI 72) and from three animals in summer (August, THI 80). Paired-end RNA-seq of whole blood. Differential genes were called at absolute log2 fold change of at least 1 and P ≤ 0.05. Spring libraries yielded 81.69 million high-quality reads; the three summer libraries yielded 167.87 million.",
    methodHi:
      "NDRI में पाँच स्वस्थ दिखने वाली थारपारकर बछड़ियाँ। बसंत (मार्च, THI 72) में दो पशुओं और गर्मी (अगस्त, THI 80) में तीन पशुओं का रक्त। संपूर्ण रक्त का युग्म-छोर आरएनए-अनुक्रमण। अंतर जीन कम से कम 1 के निरपेक्ष log2 गुना बदलाव और P ≤ 0.05 पर। बसंत लाइब्रेरी से 8.169 करोड़ उच्च-गुणवत्ता रीड; तीन गर्मी लाइब्रेरी से 16.787 करोड़।",
    findings:
      "About 3,280 genes were called dysregulated: 1,207 up and 2,073 down in the summer-versus-spring contrast. Upregulated sets included insulin activation, interferons and potassium ion transport. Downregulated sets included RNA processing, translation and ubiquitination. The paper names nervous-system transcripts NPFFR1 and ROBO3 and ion-transport transcripts KCNG2 and ATP1A2 among activated pathways, and EIF4A, EIF4B, VPS4B and PEX13 among downregulated processing pathways. Chemokine signalling was highlighted in the cluster analysis. The authors present this as a description of seasonal expression, not as a milk or fertility trial.",
    findingsHi:
      "लगभग 3,280 जीन अव्यवस्थित कहे गए: गर्मी-बनाम-बसंत तुलना में 1,207 बढ़े और 2,073 घटे। बढ़े समूहों में इंसुलिन सक्रियण, इंटरफेरॉन और पोटैशियम आयन परिवहन। घटे समूहों में आरएनए प्रसंस्करण, अनुवाद और यूबिक्विटिनेशन। शोधपत्र सक्रिय मार्गों में तंत्रिका-तंत्र प्रतिलेख NPFFR1 और ROBO3 तथा आयन-परिवहन प्रतिलेख KCNG2 और ATP1A2 का नाम लेता है, और घटे प्रसंस्करण मार्गों में EIF4A, EIF4B, VPS4B और PEX13 का। समूह विश्लेषण में केमोकाइन संकेत रेखांकित हुआ। लेखक इसे मौसमी अभिव्यक्ति का वर्णन बताते हैं, दुग्ध या प्रजनन परीक्षण नहीं।",
    limitations:
      "Two heifers in spring and three in summer, and not the same animals in both seasons. A gene list of this size from five libraries will contain noise. THI 72 is the usual dairy caution line, not a Thar extreme, and THI 80 is one Karnal August, not a Jaisalmer summer. No milk, rectal temperature or respiration series is reported in the sections used here. Pathway names are statistical enrichments, not proof that each named gene changes heat survival.",
    limitationsHi:
      "बसंत में दो बछड़ियाँ और गर्मी में तीन, और दोनों मौसमों में वही पशु नहीं। पाँच लाइब्रेरी से इतनी बड़ी जीन सूची में रव होगा। THI 72 सामान्य डेरी सावधानी रेखा है, थार का चरम नहीं, और THI 80 करनाल का एक अगस्त है, जैसलमेर की गर्मी नहीं। यहाँ प्रयुक्त खंडों में दुग्ध, मलाशय तापमान या श्वसन श्रृंखला नहीं है। मार्ग नाम सांख्यिकीय समृद्धि हैं, इस बात का प्रमाण नहीं कि हर नामित जीन ऊष्मा उत्तरजीविता बदलता है।",
    doi: "10.1007/s13205-024-04018-2",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11156831/",
    kind: "paper",
  },
  {
    id: "vaishnav-2025",
    title: "Breed-specific responses to experimental heat stress in Tharparkar and Vrindavani cattle",
    authors: "Sakshi Vaishnav, Argana Ajay, Gyanendra Singh, Amit Kumar and Anuj Chauhan",
    year: "2025",
    journal: "International Journal of Veterinary Sciences and Animal Husbandry 10(8): 130–134",
    institution: "ICAR-IVRI, Izatnagar",
    category: ["heat", "health"],
    summary:
      "Three adult Tharparkar and three adult Vrindavani cattle at 40 °C. Tharparkar showed smaller rises in rectal temperature, respiration, creatinine and cortisol.",
    summaryHi:
      "40 °C पर तीन वयस्क थारपारकर और तीन वयस्क वृंदावनी पशु। थारपारकर में मलाशय तापमान, श्वसन, क्रिएटिनिन और कोर्टिसोल की वृद्धि छोटी रही।",
    method:
      "Three animals per breed, matched for age, sex and status, under one management at IVRI. Thermoneutral sampling in November (THI 53.6–67.5). Then 40 °C for 6 hours a day for 7 days (THI 85.24–88.12). Rectal temperature, respiration, serum creatinine (Jaffe method) and cortisol (ELISA).",
    methodHi:
      "प्रत्येक नस्ल में तीन पशु, आयु, लिंग और स्थिति के लिए मेल, IVRI में एक प्रबंधन। नवंबर में ताप-तटस्थ नमूना (THI 53.6–67.5)। फिर 7 दिन तक प्रतिदिन 6 घंटे 40 °C (THI 85.24–88.12)। मलाशय तापमान, श्वसन, सीरम क्रिएटिनिन (जाफे विधि) और कोर्टिसोल (ELISA)।",
    findings:
      "Tharparkar rectal temperature moved from 100.5 ± 0.66 °F to 103.1 ± 0.50 °F, and respiration from 27.3 ± 0.58 to 40.0 ± 1.0 breaths/min. Vrindavani moved from 102.3 ± 0.45 °F to 104.0 ± 0.20 °F, and from 36.0 ± 1.0 to 52.3 ± 0.58 breaths/min. Creatinine rose from 0.91 ± 0.16 to 1.27 ± 0.09 mg/dL in Tharparkar and from 1.15 ± 0.10 to 1.64 ± 0.24 mg/dL in Vrindavani. Cortisol rose from 4.03 ± 0.31 to 6.07 ± 0.45 ng/mL in Tharparkar and from 5.1 ± 0.3 to 10.33 ± 0.71 ng/mL in Vrindavani. The authors describe the Vrindavani cortisol change as a 102.5% surge and call the Tharparkar response more stable. Temperatures are left in Fahrenheit, as printed. They are not plotted beside Bhat’s Celsius series.",
    findingsHi:
      "थारपारकर का मलाशय तापमान 100.5 ± 0.66 °F से 103.1 ± 0.50 °F हुआ, और श्वसन 27.3 ± 0.58 से 40.0 ± 1.0 श्वास/मिनट। वृंदावनी 102.3 ± 0.45 °F से 104.0 ± 0.20 °F, और 36.0 ± 1.0 से 52.3 ± 0.58 श्वास/मिनट। क्रिएटिनिन थारपारकर में 0.91 ± 0.16 से 1.27 ± 0.09 mg/dL और वृंदावनी में 1.15 ± 0.10 से 1.64 ± 0.24 mg/dL बढ़ा। कोर्टिसोल थारपारकर में 4.03 ± 0.31 से 6.07 ± 0.45 ng/mL और वृंदावनी में 5.1 ± 0.3 से 10.33 ± 0.71 ng/mL बढ़ा। लेखक वृंदावनी के कोर्टिसोल बदलाव को 102.5% उछाल कहते हैं और थारपारकर की प्रतिक्रिया को अधिक स्थिर। तापमान छपे फ़ारेनहाइट में ही हैं। वे भट्ट की सेल्सियस श्रृंखला के साथ नहीं खींचे गए।",
    limitations:
      "Three animals per breed. Vrindavani is a synthetic crossbred herd at IVRI, not an indigenous desert breed. Seven days in a chamber is not a lactation under Thar sun. The journal is not an ICAR institute report. The authors’ phrase “superior adaptation” is their summary of this contrast. It is not a breed standard and not a reason to rank every Tharparkar cow above every other zebu.",
    limitationsHi:
      "प्रत्येक नस्ल में तीन पशु। वृंदावनी IVRI का संश्लिष्ट संकर झुंड है, देशी मरु नस्ल नहीं। कक्ष के सात दिन थार की धूप में ब्यांत नहीं हैं। पत्रिका ICAR संस्थान की रिपोर्ट नहीं है। लेखकों का वाक्य “श्रेष्ठ अनुकूलन” इस अंतर का उनका सार है। वह नस्ल मानक नहीं, और हर थारपारकर गाय को हर दूसरे ज़ेबू से ऊपर रखने का कारण नहीं।",
    url: "https://www.veterinarypaper.com/archives/2025/10/8/C/10-8-19",
    pdf: "https://www.veterinarypaper.com/pdf/2025/vol10issue8/PartC/10-8-19-828.pdf",
    kind: "paper",
  },
];

export const sourceMap = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<
  string,
  Source
>;

export const categoryLabels: Record<SourceCategory, { en: string; hi: string }> = {
  genetics: { en: "Genetics", hi: "आनुवंशिकी" },
  milk: { en: "Milk production", hi: "दुग्ध उत्पादन" },
  reproduction: { en: "Reproduction", hi: "प्रजनन" },
  heat: { en: "Heat tolerance", hi: "ऊष्मा सहनशीलता" },
  nutrition: { en: "Nutrition", hi: "पोषण" },
  morphology: { en: "Morphology", hi: "आकृति" },
  conservation: { en: "Conservation", hi: "संरक्षण" },
  health: { en: "Health", hi: "स्वास्थ्य" },
  identity: { en: "Breed identification", hi: "नस्ल पहचान" },
  history: { en: "Origin and history", hi: "उत्पत्ति और इतिहास" },
};
