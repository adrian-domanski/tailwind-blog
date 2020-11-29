import React from "react";
import Button from "../utils/Button";
import Paragraph from "../utils/Paragraph";
import Section from "../utils/Section";
import Title from "../utils/Title";

const JoinUsSection = () => {
  return (
    <Section className="bg-gradient-to-tr from-blue-600 to-green-200">
      <Title textColor="text-white">Join Our Club</Title>
      <Paragraph textColor="text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        maxime quo, repellendus officiis officia dignissimos.
      </Paragraph>
      <input
        type="email"
        name="email"
        placeholder="Email address..."
        className="w-full block rounded-full text-center py-2 px-4 mt-5"
      />
      <Button className="w-full">Join Us</Button>
    </Section>
  );
};

export default JoinUsSection;
