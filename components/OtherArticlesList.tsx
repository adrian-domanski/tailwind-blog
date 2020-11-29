import React from "react";
import Title from "./utils/Title";
import Link from "next/link";
import CategoryBadge from "./utils/Badge";

const ArticleListItem: React.FC<{
  imgSrc: string;
  href: string;
  title: string;
  date: string;
}> = ({ imgSrc, href, title, date }) => (
  <li>
    <Link href={href}>
      <a className="relative">
        <img className="block rounded-2xl" src={imgSrc} alt={title} />
        <CategoryBadge className="absolute left-4 top-4">
          Lifestyle
        </CategoryBadge>
      </a>
    </Link>
    <Title className="capitalize" fontSize="xl" align="left">
      {title}
    </Title>
    <p className="-mt-4 text-gray-400">{date}</p>
  </li>
);

const OtherArticlesList = () => {
  return (
    <ul className="grid gap-y-6">
      <ArticleListItem
        title="3 Easy Ways to Make Tour IPhone Faster"
        date="31 March 2019"
        imgSrc="https://picsum.photos/id/14/1000/600"
        href="#"
      />
      <ArticleListItem
        title="3 Easy Ways to Make Tour IPhone Faster"
        date="31 March 2019"
        imgSrc="https://picsum.photos/id/15/1000/600"
        href="#"
      />
      <ArticleListItem
        title="3 Easy Ways to Make Tour IPhone Faster"
        date="31 March 2019"
        imgSrc="https://picsum.photos/id/16/1000/600"
        href="#"
      />
    </ul>
  );
};

export default OtherArticlesList;
