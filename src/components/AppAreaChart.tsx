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
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  LineChart,
  BarChart,
  Bar,
} from "recharts";

// ✅ Vitals chart config
const chartConfig = {
  heartRate: {
    label: "Heart Rate (bpm)",
    color: "var(--chart-2)",
  },
  spo2: {
    label: "SpO₂ (%)",
    color: "var(--chart-1)",
  },
  respRate: {
    label: "Respiratory Rate (breaths/min)",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

// ✅ Vitals data (simulated, recent readings)
const chartData = [
  { time: "10:00", heartRate: 82, spo2: 98, respRate: 18 },
  { time: "10:05", heartRate: 88, spo2: 97, respRate: 20 },
  { time: "10:10", heartRate: 79, spo2: 99, respRate: 19 },
  { time: "10:15", heartRate: 92, spo2: 95, respRate: 22 },
  { time: "10:20", heartRate: 85, spo2: 96, respRate: 18 },
  { time: "10:25", heartRate: 90, spo2: 97, respRate: 21 },
];

// ✅ Comparison data (current vs weekly/monthly averages)
const trendsComparison = [
  { metric: "Heart Rate", current: 85, weeklyAvg: 82, monthlyAvg: 80 },
  { metric: "SpO₂", current: 97, weeklyAvg: 96, monthlyAvg: 95 },
  { metric: "Resp. Rate", current: 20, weeklyAvg: 19, monthlyAvg: 18 },
];

// ✅ Wellness metrics data
const wellnessData = [
  { day: "Mon", steps: 8500, sleep: 7, calories: 2200 },
  { day: "Tue", steps: 9200, sleep: 6.5, calories: 2100 },
  { day: "Wed", steps: 7800, sleep: 8, calories: 2000 },
  { day: "Thu", steps: 10000, sleep: 7.2, calories: 2300 },
  { day: "Fri", steps: 6500, sleep: 6, calories: 1900 },
  { day: "Sat", steps: 11000, sleep: 8.1, calories: 2500 },
  { day: "Sun", steps: 9000, sleep: 7.5, calories: 2200 },
];

const AppAreaChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Patient Vitals Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Patient Vitals Trend */}
        <div className="md:col-span-2">
          <h2 className="text-md font-medium mb-4">Patient Vitals Trend</h2>
          <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <AreaChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="time" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />

              {/* Gradients */}
              <defs>
                <linearGradient id="fillHeartRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-heartRate)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-heartRate)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillSpo2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-spo2)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-spo2)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillRespRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-respRate)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-respRate)" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              {/* Vitals Areas */}
              <Area
                dataKey="spo2"
                type="natural"
                fill="url(#fillSpo2)"
                stroke="var(--color-spo2)"
                fillOpacity={0.4}
                stackId="a"
              />
              <Area
                dataKey="heartRate"
                type="natural"
                fill="url(#fillHeartRate)"
                stroke="var(--color-heartRate)"
                fillOpacity={0.4}
                stackId="a"
              />
              <Area
                dataKey="respRate"
                type="natural"
                fill="url(#fillRespRate)"
                stroke="var(--color-respRate)"
                fillOpacity={0.4}
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>

        {/* Right: Trends Comparison + Wellness */}
        <div className="flex flex-col gap-6">
          {/* Trends Comparison */}
          <div>
            <h2 className="text-md font-medium mb-4">Trends Comparison</h2>
            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
              <LineChart data={trendsComparison}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="metric" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Line type="monotone" dataKey="current" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="weeklyAvg" stroke="var(--chart-1)" strokeDasharray="5 5" strokeWidth={2} />
                <Line type="monotone" dataKey="monthlyAvg" stroke="var(--chart-3)" strokeDasharray="3 3" strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </div>

          {/* Wellness Metrics */}
          <div>
            <h2 className="text-md font-medium mb-4">Wellness Metrics</h2>
            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
              <BarChart data={wellnessData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Bar dataKey="steps" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="sleep" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="calories" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAreaChart;
