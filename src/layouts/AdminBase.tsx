import navigationData from "@/data/navigationData.json";
import adminNav from "@/data/adminNav.json";
import { Dialog } from "@headlessui/react";
import { ReactComponent as Hamburger } from "@icons/Hamburger.svg";
import { ReactComponent as XMark } from "@icons/XMark.svg";
import { ReactComponent as Book } from "@icons/Book.svg";
import { ReactComponent as Flask } from "@icons/Flask.svg";
import { FC, ReactSVGElement, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

interface NavigationModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationModal: FC<NavigationModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="relative flex h-screen w-2/3 flex-col gap-4 rounded-tr-3xl rounded-br-3xl bg-white p-2 text-gray-50 sm:w-fit">
        <button
          className="p-2 pb-0"
          onClick={(e) => {
            setIsOpen(false);
          }}
        >
          <XMark className="mx-4 ml-auto h-8 w-8 cursor-pointer text-blue-800" />
        </button>
        <div className="flex flex-col justify-around gap-2 rounded-xl py-4 text-2xl text-blue-800">
          {navigationData.map((nav, i) => (
            <NavLink
              className="hover:active nav-modal block rounded-xl p-2 px-4 transition-all"
              to={nav.to}
              key={i}
            >
              {nav.text}
            </NavLink>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

const AdminReportNav: FC = () => {
  return (
    <>
      <section className="flex w-full gap-4 border-y stroke-gray-500 py-2 text-gray-500">
        {adminNav.map((nav, idx) => (
          <NavLink
            key={idx}
            to={nav.to}
            className="nav-chip flex gap-2 rounded-lg bg-blue-200 px-4 py-2"
          >
            <p>{nav.text}</p>
            {
              {
                Book: <Book />,
                Flask: <Flask />,
              }[nav.icon]
            }
          </NavLink>
        ))}
      </section>
      <Outlet />
    </>
  );
};

const AdminBase: FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex  min-h-[96vh] flex-col items-center justify-start gap-4 p-2 ">
        <header className="relative flex w-full items-center justify-center text-center text-4xl text-blue-800">
          <button
            onClick={() => setNavOpen(true)}
            className="absolute top-1/2 left-4 -translate-y-1/2"
          >
            <Hamburger className="h-8 w-8" />
          </button>
          <h1>Feedback System</h1>
        </header>
        <Outlet />
      </div>

      <NavigationModal isOpen={navOpen} setIsOpen={setNavOpen} />
    </div>
  );
};

export default AdminBase;
export { AdminReportNav };
