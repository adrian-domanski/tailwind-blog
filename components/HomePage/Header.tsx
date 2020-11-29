import React from "react";
import styles from "../../styles/pages/Home.module.css";
import CategoryBadge from "../utils/Badge";

const Header = () => {
  return (
    <header className="relative overflow-hidden h-96">
      <div className={styles.filter}>
        <img
          src="https://picsum.photos/id/10/1000/1200"
          alt="Lorem"
          className="object-cover block"
        />
      </div>
      <div id="content" className="absolute bottom-0 text-white p-4">
        <CategoryBadge>Sport</CategoryBadge>
        <h2 className="text-3xl mt-3 font-semibold tracking-wide">
          Lorem title
        </h2>
        <p className="text-lg mt-3 text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nisi?
        </p>
      </div>
    </header>
  );
};

export default Header;
