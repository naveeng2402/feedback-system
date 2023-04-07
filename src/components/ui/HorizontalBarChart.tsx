import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar, ChartProps } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);
interface HorizontalBarChartProps {
  data: number[];
}

const HorizontalBarChart: FC<HorizontalBarChartProps> = ({ data }) => {
  const options: ChartProps<"bar">["options"] = {
    indexAxis: "y",
    responsive: true,
    elements: {
      bar: { borderWidth: 1 },
    },

    scales: {
      y: { beginAtZero: true, grid: { display: false } },
      x: {
        grid: { display: false },
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: { stepSize: 1 },
      },
    },
  };

  const chartData: ChartProps<"bar">["data"] = {
    labels: [""],
    datasets: [
      {
        data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barPercentage: 0.5,
        borderRadius: 3,
      },
    ],
  };
  return <Bar options={options} data={chartData} className="m-0" />;
};

export default HorizontalBarChart;
