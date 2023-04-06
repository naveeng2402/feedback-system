import { FC } from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut, ChartProps } from "react-chartjs-2";
ChartJS.register(ArcElement);
interface DoughnutProps {
  options: ChartProps<"bar">["options"] | any;
  data: ChartProps<"bar">["data"] | any;
}

const DoughnutChart: FC<DoughnutProps> = ({ data, options }) => {
  return (
    <div className="max-h-[36vh]  pl-0">
      <Doughnut data={data} options={options} className="m-0 " />
    </div>
  );
};

export default DoughnutChart;
