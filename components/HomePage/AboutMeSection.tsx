import React from "react";
import Button from "../utils/Button";
import Paragraph from "../utils/Paragraph";
import Section from "../utils/Section";
import Title from "../utils/Title";

const AboutMeSection = () => {
  return (
    <Section border>
      <Title className="flex justify-center items-center opacity-100">
        <div className="items-end relative table ml-4">
          <h1 className="font-bold tracking-wider text-3xl mr-4 text-gray-700">
            Katen
          </h1>
          <span className="bg-gradient-to-r rounded-full absolute bottom-0 transform -translate-y-1/2 right-2 w-2 h-2 block bg-red-500"></span>
        </div>
      </Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit earum
        dignissimos voluptas error iusto! Qui pariatur nisi porro, amet
        dignissimos minus obcaecati velit! Iure illum consequatur beatae
        perspiciatis! Atque, laboriosam?
      </Paragraph>
      <Button as="a">About Me</Button>
    </Section>
  );
};

export default AboutMeSection;
