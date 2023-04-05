import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar, ChartProps } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const options = {
  indexAxis: "y" as const,

  elements: {
    bar: {
      borderWidth: 2,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      position: "left" as const,
    },
    title: {
      display: true,
    },
  },
};

const labels = [""];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      barPercentage: 0.1,
    },
  ],
};

export function HorizontalBarChart() {
  return <Bar options={options} data={data} />;
}
