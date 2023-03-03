import { FC } from "react";
// import { ReactComponent as Faculty } from '@icons/Faculty.svg'
interface NavigationCardProps {
  Icon: React.ReactNode;
  Navigationto: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ Icon, Navigationto }) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4 shadow-[#b1c1fd]  ">
      {Icon}
      {Navigationto}
    </div>
  );
};

export default NavigationCard;
