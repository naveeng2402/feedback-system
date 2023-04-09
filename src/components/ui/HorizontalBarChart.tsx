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

export const chooseBarColor = (data: number[]) => {
  const colors = {
    low: {
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    medium: {
      borderColor: "rgb(0, 89, 210)",
      backgroundColor: "rgb(0, 89, 210,0.5)",
    },
    high: {
      borderColor: "rgb(79, 186, 102)",
      backgroundColor: "rgb(79, 186, 102,0.5)",
    },
  };

  const rt: { borderColor: string[]; backgroundColor: string[] } = {
    borderColor: [],
    backgroundColor: [],
  };

  data.map((item) => {
    if (item > 0 && item <= 1) {
      rt.backgroundColor.push(colors.low.backgroundColor);
      rt.borderColor.push(colors.low.borderColor);
    } else if (item > 1 && item <= 2) {
      rt.backgroundColor.push(colors.medium.backgroundColor);
      rt.borderColor.push(colors.medium.borderColor);
    } else if (item > 2 && item <= 3) {
      rt.backgroundColor.push(colors.high.backgroundColor);
      rt.borderColor.push(colors.high.borderColor);
    }
  });

  return rt;
};

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
        suggestedMax: 3,
        ticks: { stepSize: 1 },
      },
    },
  };

  const { backgroundColor, borderColor } = chooseBarColor(data);
  const chartData: ChartProps<"bar">["data"] = {
    labels: [""],
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        barPercentage: 0.5,
        borderRadius: 3,
      },
    ],
  };
  return <Bar options={options} data={chartData} className="m-0" />;
};

export default HorizontalBarChart;
