"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartData = [
  { month: "January", patients: 120, appointments: 90 },
  { month: "February", patients: 150, appointments: 110 },
  { month: "March", patients: 180, appointments: 130 },
  { month: "April", patients: 160, appointments: 125 },
  { month: "May", patients: 200, appointments: 150 },
  { month: "June", patients: 220, appointments: 170 },
];

const chartConfig = {
  patients: {
    label: "Patients",
    color: "hsl(142, 76%, 36%)", // green
  },
  appointments: {
    label: "Appointments",
    color: "hsl(4, 90%, 58%)", // red
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full mt-6"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Line
          dataKey="patients"
          type="monotone"
          stroke="hsl(142, 76%, 36%)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          dataKey="appointments"
          type="monotone"
          stroke="hsl(4, 90%, 58%)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default AppLineChart;
