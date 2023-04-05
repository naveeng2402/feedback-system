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
  options: ChartProps<"bar">["options"];
  data: ChartProps<"bar">["data"];
}
const BarChart: FC<BarChartProps> = ({ data, options }) => {
  return <Bar options={options} data={data} className="m-0" />;
};

export default BarChart;
