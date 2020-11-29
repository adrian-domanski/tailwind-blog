import React from "react";
import Section from "../utils/Section";
import Title from "../utils/Title";
import styles from "../../styles/pages/Home.module.css";

const ListItem = () => {
  return (
    <li className={`flex justify-between pb-2 border-b ${styles.listItem}`}>
      <a
        href="###"
        className={`${styles.category} relative pl-6 block text-gray-600 font-semibold`}
      >
        Lifestyle
      </a>
      <span className="text-gray-400 hover:text-gray-700 transition-colors ease-out">
        (5)
      </span>
    </li>
  );
};

const CategoriesSection = () => {
  return (
    <Section border>
      <Title>Explore Topics</Title>
      <ul className="grid gap-y-2 mt-8">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </Section>
  );
};

export default CategoriesSection;
