import React from "react";
import AboutMeSection from "../components/HomePage/AboutMeSection";
import CategoriesSection from "../components/HomePage/CategoriesSection";
import EditorsPickSection from "../components/HomePage/EditorsPickSection";
import Header from "../components/HomePage/Header";
import JoinUsSection from "../components/HomePage/JoinUsSection";
import TrendingSection from "../components/HomePage/TrendingSection";
import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <AboutMeSection />
      <EditorsPickSection />
      <JoinUsSection />
      <TrendingSection />
      <CategoriesSection />
    </Layout>
  );
};

export default HomePage;
