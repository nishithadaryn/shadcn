"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";

// ✅ ECG Chart Config
const ecgConfig = {
  ecg: {
    label: "ECG Signal (mV)",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// ✅ ECG sample waveform data (mocked as sine-like signal)
const ecgData = [
  { time: "0", ecg: 0.1 },
  { time: "1", ecg: 0.5 },
  { time: "2", ecg: -0.2 },
  { time: "3", ecg: 0.8 },
  { time: "4", ecg: -0.1 },
  { time: "5", ecg: 0.4 },
  { time: "6", ecg: -0.3 },
  { time: "7", ecg: 0.6 },
  { time: "8", ecg: 0.0 },
  { time: "9", ecg: 0.5 },
];

// ✅ Blood Pressure Config
const bpConfig = {
  bpSystolic: {
    label: "BP Systolic (mmHg)",
    color: "var(--chart-1)",
  },
  bpDiastolic: {
    label: "BP Diastolic (mmHg)",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

// ✅ Blood Pressure Data
const bpData = [
  { time: "10:00", bpSystolic: 122, bpDiastolic: 82 },
  { time: "10:05", bpSystolic: 125, bpDiastolic: 85 },
  { time: "10:10", bpSystolic: 118, bpDiastolic: 79 },
  { time: "10:15", bpSystolic: 130, bpDiastolic: 88 },
  { time: "10:20", bpSystolic: 124, bpDiastolic: 83 },
  { time: "10:25", bpSystolic: 128, bpDiastolic: 86 },
];

const HealthCharts = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* ✅ ECG Line Chart */}
      <div>
        <h1 className="text-lg font-medium mb-6">ECG Readings</h1>
        <ChartContainer config={ecgConfig} className="min-h-[200px] w-full">
          <LineChart data={ecgData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="time" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              type="monotone"
              dataKey="ecg"
              stroke="var(--color-ecg)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* ✅ Blood Pressure Bar Chart */}
      <div>
        <h1 className="text-lg font-medium mb-6">Blood Pressure Readings</h1>
        <ChartContainer config={bpConfig} className="min-h-[200px] w-full">
          <BarChart data={bpData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="time" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="bpSystolic" fill="var(--color-bpSystolic)" radius={4} />
            <Bar dataKey="bpDiastolic" fill="var(--color-bpDiastolic)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default HealthCharts;
