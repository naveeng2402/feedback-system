import { FC } from "react";

interface NavigationCardProps {
  icons: React.ReactNode;
  navigationTo: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ icons, navigationTo }) => {
  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4 text-lg font-bold text-[#3A5591] shadow-[#b1c1fd]  ">
      {icons}
      {navigationTo}
    </div>
  );
};

export default NavigationCard;
