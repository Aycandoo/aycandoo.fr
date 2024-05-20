import React, { type FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface PostCardParams {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  gatsbyImage: any;
}

const PostCard: FC<PostCardParams> = ({
  title,
  date,
  category,
  excerpt,
  gatsbyImage,
}) => {
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(new Date(date));

  return (
    <article className="flex h-full flex-col gap-4 px-4 py-6 hover:bg-gray-100">
      <GatsbyImage image={gatsbyImage} alt="" />
      <header className="flex flex-col gap-2">
        <div className="w-fit bg-primary px-2 py-1 font-bold">{category}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </header>
      <p>{excerpt}</p>
      <time dateTime={date} className="text-sm italic">
        {formattedPostDate}
      </time>
    </article>
  );
};

export default PostCard;
