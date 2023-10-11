import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav, { NavItem } from "../components/Nav";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const navItems: NavItem[] = [
  { id: "home", name: "home", href: "/" },
  { id: "projects", name: "projects", href: "/projects" },
  { id: "cv", name: "CV", href: "/CV.pdf", static: true },
];

export default function Root() {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Nav items={navItems} />
      <Header />
      <main className="grow px-12 py-8 xl:px-32">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
