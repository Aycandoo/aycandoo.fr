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
    <article className="post-card">
      <header className="post-card__header">
        <div className="post-card__category">{category}</div>
        <h2 className="post-card__title">{title}</h2>
      </header>
      <p className="post-card__excerpt">{excerpt}</p>
      <time dateTime={date} className="post-card__date">
        {formattedPostDate}
      </time>
    </article>
  );
};

// <Img fluid={gatsyImage} alt="" />
export default PostCard;
