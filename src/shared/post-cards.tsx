import React, { type FC, useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { sortBy, uniqBy } from 'lodash';

import { type MarkdownRemark } from '../pages/blog';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PostCard from './post-card';

interface PostCardsParams {
  cards: MarkdownRemark[];
}

interface Category {
  name: string;
  selected: boolean;
}

const PostCards: FC<PostCardsParams> = ({ cards }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [displayedCards, setDisplayedCards] = useState<MarkdownRemark[]>(cards);
  const [openedFilterZone, setOpenedFilterZone] = useState(false);

  useEffect(() => {
    const sortedCards = sortBy(cards, (card) => card.frontmatter.category);
    const filteredCategories = uniqBy(
      sortedCards.map((card) => {
        return {
          name: card.frontmatter.category,
          selected: false,
        };
      }),
      'name'
    );

    setCategories(filteredCategories);
  }, [cards]);

  const selectCategory = (categoryToUpdate: string): void => {
    const updatedCategories = categories.map((category) => {
      if (category.name === categoryToUpdate) {
        category.selected = !category.selected;
      }
      return category;
    });
    setCategories(updatedCategories);
    const selectedCategoryNames = getSelectedCategoryNames();
    filterCardsByCategories(selectedCategoryNames);
  };

  const getSelectedCategoryNames = (): string[] => {
    let selectedCategoriesNames = categories
      .filter((category) => category.selected)
      .map((category) => category.name);

    if (selectedCategoriesNames.length === 0) {
      selectedCategoriesNames = categories.map((category) => category.name);
    }

    return selectedCategoriesNames;
  };

  const filterCardsByCategories = (categoryNames: string[]): void => {
    const updatedCards = cards.filter((card) => {
      return categoryNames.includes(card.frontmatter.category);
    });
    setDisplayedCards(updatedCards);
  };

  const toggleFilterZone = (): void => {
    setOpenedFilterZone(!openedFilterZone);
  };

  return (
    <div className="post-cards">
      <div className="post-cards__categories">
        <button
          type="button"
          className="post-cards-categories__button"
          aria-pressed={openedFilterZone}
          onClick={() => toggleFilterZone()}
        >
          Filtrer par catégorie
          <ChevronDownIcon className="h-12 w-12" />
        </button>
        {openedFilterZone && (
          <div className="post-cards-categories__wrapper">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => selectCategory(category.name)}
                aria-pressed={category.selected}
                className={`post-cards-categories__category post-cards-categories__category--${category.selected ? 'selected' : 'no-selected'}`}
              >
                <span>{category.name}</span>
                {category.selected && <XMarkIcon className="h-12 w-12" />}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="post-cards__main">
        {displayedCards.map((card) => (
          <Link key={card.frontmatter.slug} to={card.frontmatter.slug}>
            <PostCard
              title={card.frontmatter.title}
              date={card.frontmatter.date}
              category={card.frontmatter.category}
              excerpt={card.excerpt}
              gatsyImage={card.frontmatter.illustration.childImageSharp.fluid}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostCards;
