import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import slugify from "react-slugify";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Eastman",
    href: "/about",
  },
  {
    title: "Our Products",
    href: "/products",
  },
  {
    title: "Quality Control",
    href: "/quality-control",
  },
  {
    title: "Enquiry Form",
    href: "/enquiry",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="py-4 bg-[#f1eff0] md:fixed top-0 left-0 right-0 z-10">
      <Container className="flex justify-between gap-3 items-center md:items-start flex-col md:flex-row">
        <div>
          <Image
            src={"/logo.jpeg"}
            height={100}
            width={90}
            alt="Logo"
            className=""
          />
        </div>
        <div className="flex flex-col justify-between gap-3 items-center md:items-stretch md:gap-9 text-[#333]">
          <div className="flex gap-2 text-xs md:self-end">
            <p className="ts">
              <span className="font-bold">Email: </span>
              <span> mcell2@eastman-intl.com</span>
            </p>
            <div className="h-full w-2"></div>
            <p className="text-shadow-[1px_1px_3px_#999]">
              <span className="font-bold">Call us: </span>
              +91-161-302-6901
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {routes.map((route, index) => (
              <Link
                className="text-xs text-white bg-[#333] py-1 px-3 rounded-[100vh]"
                href={route.href}
                key={index}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
