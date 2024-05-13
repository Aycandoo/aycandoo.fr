import React, { type FC } from 'react';
// import Img from 'gatsby-image';

interface PostCardParams {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  gatsyImage: { base64: string };
}

const PostCard: FC<PostCardParams> = ({
  title,
  date,
  category,
  excerpt,
  gatsyImage,
}) => {
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(new Date(date));

  return (
    <article className="flex h-full flex-col justify-between gap-2 p-4">
      <header className="flex flex-col gap-2">
        <div className="color-primary font-bold">{category}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </header>
      <p>{excerpt}</p>
      <time dateTime={date} className="text-sm italic">
        {formattedPostDate}
      </time>
    </article>
  );
};

// <Img fluid={gatsyImage} alt="" />
export default PostCard;
