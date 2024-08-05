import Link from "next/link";
import Container from "./container";
import slugify from "react-slugify";
import Image from "next/image";
import React from "react";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Quality Control",
    href: "/quality-control",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#333333] py-4 mt-7">
      <Container className="flex justify-between flex-col md:flex-row text-[#999]">
        <div className="flex flex-col justify-between gap-5">
          <div className="">
            <div className="flex gap-3 items-center flex-wrap">
              {routes.map((route, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`${route.href}`}
                    className="ts text-xs hover:underline hover:text-white"
                  >
                    {route.title}
                  </Link>
                  {index !== routes.length - 1 && (
                    <div className="h-3 w-[1px] bg-[#999]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs mt-1 text-[11px]">
              <span className="font-bold">© 2012 www.eastman-intl.com</span>,
              All Rights Reserved
            </p>
          </div>
          <div className="text-[11px]">
            Sitemap | <span className="font-bold">Designed & Hosted by: </span>
            <a href="http://www.cyberframe.in/">www.cyberframe.in</a>
          </div>
        </div>
        <div className="text-[15px] ts flex gap-1">
          Follow us:{" "}
          <a href="https://facebook.com" target="_blank">
            <Image
              src={"/facebook.png"}
              width={24}
              height={24}
              alt="facebook"
            />
          </a>
          <a href="https://twitter.com" target="_blank">
            <Image src={"/twitter.png"} width={24} height={24} alt="facebook" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
