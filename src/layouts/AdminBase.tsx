import reportsNav from "@/data/reportsNav.json";
import responseNav from "@/data/responsesNav.json";
import { ReactComponent as LeftArrow } from "@icons/LeftArrow.svg";
import { FC, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

interface INavLinks {
  text: string;
  icon: string;
  to: string;
}

const AdminReportNav: FC = () => {
  const { pathname } = useLocation();
  const [navLinks, setNavLinks] = useState<INavLinks[]>();

  useEffect(() => {
    if (pathname.includes("/admin/reports/")) {
      setNavLinks(reportsNav);
    } else if (pathname.includes("/admin/response-list/")) {
      setNavLinks(responseNav);
    }
  }, [pathname]);

  return (
    <>
      <section className="flex w-full gap-4 border-y py-2 px-4 text-gray-500">
        {navLinks?.map((nav, idx) => (
          <NavLink
            key={idx}
            to={nav.to}
            className="nav-chip rounded-lg bg-blue-200 px-4 py-2"
          >
            <p>{nav.text}</p>
          </NavLink>
        ))}
      </section>
      <Outlet />
    </>
  );
};

const AdminBase: FC = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/admin/report-list/":
        setTitle("Reports");
        break;
      case "/admin/staff_management":
        setTitle("Staff Management");
        break;
      case "/admin/publish-feedback":
        setTitle("Publish Feedback");
        break;

      default:
        break;
    }

    if (pathname.includes("/admin/reports")) {
      setTitle("Reports");
    } else if (pathname.includes("/admin/response-list/")) {
      setTitle("Responses");
    } else if (pathname.includes("/admin/response-result/")) {
      setTitle("Response Result");
    }
  }, [pathname]);

  return (
    <>
      <header className="my-8 flex items-center justify-start gap-6 px-6">
        {/* 
        //@ts-ignore */}
        <NavLink to={-1}>
          <LeftArrow />
        </NavLink>
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>
      <Outlet />
    </>
  );
};

export default AdminBase;
export { AdminReportNav };
