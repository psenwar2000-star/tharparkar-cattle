import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type Place = {
  id: string;
  name: { en: string; hi: string };
  lat: number;
  lon: number;
  role: { en: string; hi: string };
  note: { en: string; hi: string };
};

const places: Place[] = [
  {
    id: "jaisalmer",
    name: { en: "Jaisalmer", hi: "जैसलमेर" },
    lat: 26.92,
    lon: 70.91,
    role: { en: "NDDB breeding-tract district", hi: "NDDB प्रजनन-क्षेत्र जिला" },
    note: {
      en: "Named by NDDB together with Barmer and Jodhpur. No animal count is printed, so the dot is not sized by population.",
      hi: "NDDB ने बाड़मेर और जोधपुर के साथ नाम लिया है। पशु संख्या नहीं छपी, इसलिए बिंदु जनसंख्या के अनुसार बड़ा नहीं है।",
    },
  },
  {
    id: "barmer",
    name: { en: "Barmer", hi: "बाड़मेर" },
    lat: 25.75,
    lon: 71.39,
    role: { en: "NDDB breeding-tract district", hi: "NDDB प्रजनन-क्षेत्र जिला" },
    note: {
      en: "Western Rajasthan. Included because NDDB names it, not because a census share was verified.",
      hi: "पश्चिमी राजस्थान। इसलिए शामिल क्योंकि NDDB नाम लेता है, इसलिए नहीं कि गणना हिस्सा सत्यापित हुआ।",
    },
  },
  {
    id: "jodhpur",
    name: { en: "Jodhpur", hi: "जोधपुर" },
    lat: 26.24,
    lon: 73.02,
    role: { en: "NDDB district and CAZRI herd", hi: "NDDB जिला और CAZRI झुंड" },
    note: {
      en: "NDDB names the district. Patel et al. 2026 analysed 95 cows at ICAR-CAZRI, Jodhpur, 1990–2020. That herd is not the district population.",
      hi: "NDDB जिले का नाम लेता है। पटेल आदि 2026 ने ICAR-CAZRI, जोधपुर पर 1990–2020 की 95 गायों का विश्लेषण किया। वह झुंड जिले की पशुसंख्या नहीं है।",
    },
  },
  {
    id: "kutch",
    name: { en: "Kutchchh", hi: "कच्छ" },
    lat: 23.73,
    lon: 69.86,
    role: { en: "Named by NDDB, not in the NBAGR cell", hi: "NDDB ने नाम लिया, NBAGR कोष्ठिका में नहीं" },
    note: {
      en: "NDDB includes Kutchchh district of Gujarat in the breeding tract. The NBAGR register cell says only Rajasthan. Both statements are shown. Neither is a population.",
      hi: "NDDB गुजरात के कच्छ जिले को प्रजनन क्षेत्र में रखता है। NBAGR रजिस्टर कोष्ठिका केवल राजस्थान कहती है। दोनों कथन दिखाए गए हैं। कोई भी जनसंख्या नहीं है।",
    },
  },
  {
    id: "sindh",
    name: { en: "Tharparkar, Sindh", hi: "थारपारकर, सिंध" },
    lat: 24.74,
    lon: 69.8,
    role: { en: "Synonym region in NDDB’s origin sentence", hi: "NDDB के उत्पत्ति वाक्य का पर्याय क्षेत्र" },
    note: {
      en: "Approximate seat of Tharparkar district, Pakistan. Shown because NDDB ties the names White Sindhi, Grey Sindhi and Thari to Sindh. Not an Indian census point. The 1992 production study was at Bhakkar, farther north, and is not plotted as the tract.",
      hi: "पाकिस्तान के थारपारकर जिले का अनुमानित स्थान। इसलिए दिखाया गया क्योंकि NDDB व्हाइट सिंधी, ग्रे सिंधी और थारी नामों को सिंध से जोड़ता है। यह भारतीय गणना बिंदु नहीं है। 1992 का उत्पादन अध्ययन भक्कर में था, और अधिक उत्तर, और उसे क्षेत्र के रूप में नहीं अंकित किया गया।",
    },
  },
];

const LON0 = 68.6;
const LON1 = 74.2;
const LAT0 = 23.1;
const LAT1 = 28.0;

function project(lat: number, lon: number) {
  const x = ((lon - LON0) / (LON1 - LON0)) * 320 + 28;
  const y = ((LAT1 - lat) / (LAT1 - LAT0)) * 250 + 24;
  return { x, y };
}

export function TractAtlas() {
  const { t } = useI18n();
  const [active, setActive] = useState(places[0].id);
  const place = places.find((item) => item.id === active) ?? places[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div className="rounded-2xl border border-line bg-paper p-4">
        <svg viewBox="0 0 380 310" role="img" className="h-auto w-full" aria-labelledby="atlas-title">
          <title id="atlas-title">{t({ en: "Coordinate sketch of named places", hi: "नामित स्थानों का निर्देशांक रेखाचित्र" })}</title>
          <rect x="0" y="0" width="380" height="310" fill="var(--color-sand)" rx="16" />
          {[69, 70, 71, 72, 73, 74].map((lon) => {
            const { x } = project(LAT0, lon);
            return <line key={lon} x1={x} y1={24} x2={x} y2={274} stroke="var(--color-line)" />;
          })}
          {[24, 25, 26, 27, 28].map((lat) => {
            const { y } = project(lat, LON0);
            return <line key={lat} x1={28} y1={y} x2={348} y2={y} stroke="var(--color-line)" />;
          })}
          <text x="28" y="298" fill="var(--color-muted)" fontSize="11">
            68.6°E – 74.2°E, 23.1°N – 28.0°N
          </text>
          {places.map((item) => {
            const { x, y } = project(item.lat, item.lon);
            const on = item.id === active;
            return (
              <g key={item.id} onClick={() => setActive(item.id)} className="cursor-pointer">
                <circle cx={x} cy={y} r={on ? 9 : 7} fill={on ? "var(--color-earth)" : "var(--color-sage)"} />
                <text x={x + 12} y={y + 4} fill="var(--color-ink)" fontSize="12">
                  {t(item.name)}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-3 text-sm text-muted">
          {t({
            en: "Equal-size dots. Not a population map and not an official survey boundary. Click a name.",
            hi: "समान आकार के बिंदु। जनसंख्या मानचित्र नहीं और आधिकारिक सर्वेक्षण सीमा नहीं। नाम पर क्लिक करें।",
          })}
        </p>
      </div>
      <article className="rounded-2xl border border-line bg-paper p-5">
        <p className="text-sm tracking-wide text-sage uppercase">{t(place.role)}</p>
        <h3 className="mt-2 font-display text-3xl text-ink">{t(place.name)}</h3>
        <p className="mt-3 text-ink">{t(place.note)}</p>
        <p className="mt-4 font-mono text-sm text-muted tabular-nums">
          {place.lat.toFixed(2)}°N, {place.lon.toFixed(2)}°E
        </p>
        <a
          className="mt-4 inline-flex min-h-11 items-center text-earth underline-offset-2 hover:underline"
          href={`https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=8/${place.lat}/${place.lon}`}
          target="_blank"
          rel="noreferrer"
        >
          {t({ en: "Open this point in OpenStreetMap", hi: "यह बिंदु ओपनस्ट्रीटमैप पर खोलें" })}
        </a>
      </article>
    </div>
  );
}
