import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const yieldData = [
  { name: "NDDB avg", value: 1749, note: "kg, n not stated" },
  { name: "NDRI page", value: 2334, note: "kg total, n not stated" },
  { name: "Hussain 1st", value: 1823, note: "kg, 230 cows" },
  { name: "George all", value: 1633, note: "kg, 190 cows" },
  { name: "Patel total", value: 1915, note: "litres, 95 cows" },
  { name: "Bhakkar", value: 1339, note: "kg, 120 cows" },
];

const heatRt = [
  { name: "Winter", value: 38.39 },
  { name: "Spring", value: 38.61 },
  { name: "Summer", value: 38.89 },
];

const heatRr = [
  { name: "Winter", value: 14.88 },
  { name: "Spring", value: 15.53 },
  { name: "Summer", value: 17.3 },
];

function ChartFrame({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="rounded-2xl border border-line bg-paper p-4 sm:p-6">
      <figcaption className="mb-4">
        <p className="font-display text-2xl text-ink">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{caption}</p>
      </figcaption>
      <div className="h-72 w-full">{children}</div>
    </figure>
  );
}

export function YieldChart() {
  const { lang } = useI18n();
  const hi = lang === "hi";
  return (
    <ChartFrame
      title={hi ? "कुल ब्यांत के आसपास के प्रकाशित माध्य" : "Published means near total lactation yield"}
      caption={
        hi
          ? "स्रोत: NDDB पोर्टल; NDRI फार्म पृष्ठ (3 अप्रैल 2025); हुसैन आदि 2015; जॉर्ज आदि 2021 (IJAR); पटेल आदि 2026 (लीटर, किलोग्राम नहीं); गहरूर आदि 1992, भक्कर। ये एक ही गुण नहीं हैं। इन्हें औसत न करें। पटेल की पट्टी लीटर है।"
          : "Sources: NDDB portal; NDRI farm page (3 April 2025); Hussain et al. 2015; George et al. 2021 (IJAR); Patel et al. 2026 (litres, not kilograms); Gharoor et al. 1992, Bhakkar. These are not the same trait. Do not average them. The Patel bar is litres."
      }
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={yieldData} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="var(--color-line)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
          <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
          <Tooltip
            formatter={(value, _name, item) => [
              `${value} (${(item.payload as { note: string }).note})`,
              hi ? "मान" : "Value",
            ]}
            contentStyle={{
              background: "var(--color-paper)",
              border: "1px solid var(--color-line)",
              borderRadius: "12px",
              color: "var(--color-ink)",
            }}
          />
          <Bar dataKey="value" fill="var(--color-earth)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

export function HeatChart() {
  const { lang } = useI18n();
  const hi = lang === "hi";
  return (
    <div className="grid gap-4">
      <ChartFrame
        title={hi ? "औसत मलाशय तापमान (°C)" : "Average rectal temperature (°C)"}
        caption={
          hi
            ? "भट्ट आदि 2016, वेटरनरी वर्ल्ड। 64 थारपारकर पशु। मौसम का प्रभाव। पैमाना 38.2–39.1 °C है ताकि आधा डिग्री छिप न जाए। गर्मी में वृद्धि ऊष्मा तनाव दिखाती है, मुक्ति नहीं।"
            : "Bhat et al. 2016, Veterinary World. 64 Tharparkar cattle. Season effect. The scale is 38.2–39.1 °C so that half a degree is not hidden. The summer rise is heat strain, not immunity."
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={heatRt} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
            <CartesianGrid stroke="var(--color-line)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
            <YAxis domain={[38.2, 39.1]} tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-line)",
                borderRadius: "12px",
              }}
            />
            <Bar dataKey="value" fill="var(--color-sage)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartFrame>
      <ChartFrame
        title={hi ? "श्वसन दर (श्वास/मिनट)" : "Respiration rate (breaths/min)"}
        caption={
          hi
            ? "वही अध्ययन और वही 64 पशु। सर्दी 14.88 ± 0.09, बसंत 15.53 ± 0.11, गर्मी 17.3 ± 0.11।"
            : "Same study and the same 64 animals. Winter 14.88 ± 0.09, spring 15.53 ± 0.11, summer 17.3 ± 0.11."
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={heatRr} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
            <CartesianGrid stroke="var(--color-line)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
            <YAxis domain={[0, 22]} tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-line)",
                borderRadius: "12px",
              }}
            />
            <Bar dataKey="value" fill="var(--color-earth)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartFrame>
    </div>
  );
}
