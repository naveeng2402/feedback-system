import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar, ChartProps } from "react-chartjs-2";

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
        max: 5,
        ticks: { stepSize: 1 },
      },
    },
  };

  const chartData: ChartProps<"bar">["data"] = {
    labels: data.map((item, idx) => `Q${idx + 1}`),
    datasets: [
      {
        data: data,
        borderColor: [
          "rgb(79, 186, 102)",
          "rgb(234, 93, 102)",
          "rgb(0, 89, 210)",
        ],
        backgroundColor: [
          "rgb(79, 186, 102,0.5)",
          "rgb(234, 93, 102,0.5)",
          "rgb(0, 89, 210,0.5)",
        ],
        barPercentage: 1,
        borderRadius: 3,
      },
    ],
  };

  return <Bar options={options} data={chartData} className="m-0" />;
};

export default BarChart;
