import React from "react";
import Title from "../utils/Title";
import styles from "../../styles/components/Footer.module.css";
import Paragraph from "../utils/Paragraph";

const NavigationItem: React.FC<{ value: string; href: string }> = ({
  value,
  href,
}) => (
  <li>
    <a
      href={href}
      className={`relative text-lg pl-6 flex text-left ${styles.navigationLink}`}
    >
      {value}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="text-center text-white mt-10">
      <section className="bg-yellow-700 pt-8 py-4 px-8">
        <div id="navbar-brand" className="items-end relative table">
          <h1 className="font-bold tracking-wider text-3xl text-white">
            Katen
          </h1>
          <span className="bg-gradient-to-r rounded-full absolute bottom-0 transform -translate-y-1/2 -right-2 w-2 h-2 block bg-white"></span>
        </div>
        <Paragraph align="left" textColor="text-white mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          praesentium.
        </Paragraph>
      </section>

      <section className="bg-yellow-700">
        <div className="py-4 px-8">
          <Title
            className="mt-0"
            textColor="text-white"
            align="left"
            weight="font-semibold"
          >
            Nawigacja
          </Title>
          <ul className="grid gap-y-2">
            <NavigationItem href="#" value="Home" />
            <NavigationItem href="#" value="Home" />
            <NavigationItem href="#" value="Home" />
            <NavigationItem href="#" value="Home" />
          </ul>
        </div>
        <hr className="border-yellow-800 mx-4" />
        <div className="p-4 px-8">
          <p className="text-left">Copyright 2020 | Adison</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
