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
  options: ChartProps<"bar">["options"] | any;
  data: ChartProps<"bar">["data"] | any;
}

const HorizontalBarChart: FC<HorizontalBarChartProps> = ({ data, options }) => {
  return <Bar options={options} data={data} className="m-0" />;
};

export default HorizontalBarChart;
