import { FC } from "react";

interface NavigationCardProps {
  icons: React.ReactNode;
  navigationto: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ icons, navigationto }) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4 shadow-[#b1c1fd]  ">
      {icons}
      {navigationto}
    </div>
  );
};

export default NavigationCard;
