import React from "react";
import OtherArticlesList from "../OtherArticlesList";
import CategoryBadge from "../utils/Badge";
import Button from "../utils/Button";
import Paragraph from "../utils/Paragraph";
import Section from "../utils/Section";
import Title from "../utils/Title";

const TrendingSection = () => {
  return (
    <Section border>
      <Title>Trending</Title>
      <div className="relative">
        <CategoryBadge className="absolute left-4 top-4">
          Lifestyle
        </CategoryBadge>
        <img
          src="https://picsum.photos/id/12/1000/1200"
          className="block h-60 w-full shadow-md object-cover object-center rounded-2xl"
          alt="###"
        />
        <Button
          as="span"
          className="flex items-center justify-center absolute bottom-0 m-0! transform translate-y-1/4 mb-0 right-5 w-14 h-14 p-0! shadow-md"
        >
          <svg
            className="w-7/12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </Button>
      </div>

      <div
        id="editors-pick-info"
        className="mt-4 flex justify-between items-center text-gray-500"
      >
        <img
          src="https://picsum.photos/id/13/64/64"
          alt="###"
          className="rounded-full block w-8 h-8 object-cover object-center"
        />
        <span className="block">Katen Doe</span>
        <span className="w-1 h-1 bg-red-600 rounded-full block"></span>
        <span>31 March 2019</span>
      </div>
      <Title align="left" fontSize="2xl">
        15 Unheard Ways to Achive Greater Walker
      </Title>
      <Paragraph align="left" className="-mt-3 opacity-90">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel
        dicta nam enim illo! Officia, repudiandae exercitationem.
      </Paragraph>

      <hr className="my-6" />

      <div className="relative">
        <CategoryBadge className="absolute left-4 top-4">
          Lifestyle
        </CategoryBadge>
        <img
          src="https://picsum.photos/id/18/1000/1200"
          className="block h-60 w-full shadow-md object-cover object-center rounded-2xl"
          alt="###"
        />
        <Button
          as="span"
          className="flex items-center justify-center absolute bottom-0 m-0! transform translate-y-1/4 mb-0 right-5 w-14 h-14 p-0! shadow-md"
        >
          <svg
            className="w-7/12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </Button>
      </div>

      <div
        id="editors-pick-info"
        className="mt-4 flex justify-between items-center text-gray-500"
      >
        <img
          src="https://picsum.photos/id/14/64/64"
          alt="###"
          className="rounded-full block w-8 h-8 object-cover object-center"
        />
        <span className="block">Katen Doe</span>
        <span className="w-1 h-1 bg-red-600 rounded-full block"></span>
        <span>31 March 2019</span>
      </div>
      <Title align="left" className="capitalize" fontSize="2xl">
        An incredible Easy method that works for all
      </Title>
      <Paragraph align="left" className="-mt-3 opacity-90">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vel
        dicta nam enim illo! Officia, repudiandae exercitationem.
      </Paragraph>

      <hr className="my-6" />

      <OtherArticlesList />
    </Section>
  );
};

export default TrendingSection;
