import React from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import Button from "../components/utils/Button";
import Paragraph from "../components/utils/Paragraph";
import Section from "../components/utils/Section";
import Title from "../components/utils/Title";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Section className="m-6 border border-gray-200 rounded-md shadow-sm">
        <Title className="flex justify-center items-center opacity-100">
          <div className="items-end relative table ml-4">
            <h1 className="font-bold tracking-wider text-3xl mr-4 text-gray-700">
              Katen
            </h1>
            <span className="bg-gradient-to-r rounded-full absolute bottom-0 transform -translate-y-1/2 right-2 w-2 h-2 block bg-red-500"></span>
          </div>
        </Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          earum dignissimos voluptas error iusto! Qui pariatur nisi porro, amet
          dignissimos minus obcaecati velit! Iure illum consequatur beatae
          perspiciatis! Atque, laboriosam?
        </Paragraph>
        <Button>About Me</Button>
      </Section>
    </Layout>
  );
};

export default HomePage;
