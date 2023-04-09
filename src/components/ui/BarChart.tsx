import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar, ChartProps } from "react-chartjs-2";
import { chooseBarColor } from "./HorizontalBarChart";

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface BarChartProps {
  data: number[];
}
const BarChart: FC<BarChartProps> = ({ data }) => {
  const options: ChartProps<"bar">["options"] = {
    // indexAxis: "y",
    responsive: true,
    elements: {
      bar: { borderWidth: 1 },
    },

    scales: {
      x: { beginAtZero: true, grid: { display: false } },
      y: {
        grid: { display: false },
        beginAtZero: true,
        min: 0,
        suggestedMax: 3,
        ticks: { stepSize: 1 },
      },
    },
  };

  const { backgroundColor, borderColor } = chooseBarColor(data);

  const chartData: ChartProps<"bar">["data"] = {
    labels: data.map((item, idx) => `Q${idx + 1}`),
    datasets: [
      {
        data: data,
        borderColor,
        backgroundColor,
        barPercentage: 1,
        borderRadius: 3,
      },
    ],
  };

  return <Bar options={options} data={chartData} className="m-0" />;
};

export default BarChart;
