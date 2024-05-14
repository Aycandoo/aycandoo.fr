import { Link } from 'gatsby';
import React, { useEffect, useState, type FC } from 'react';
import { sortBy, uniqBy } from 'lodash';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { type MarkdownRemark } from '../pages/blog';
import PostCard from './post-card';
import { Transition } from '@headlessui/react';

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
    <div className="flex flex-col gap-12 px-6 lg:px-36 xl:px-60 2xl:px-[25%]">
      <div className="">
        <button
          type="button"
          className="mb-2"
          aria-pressed={openedFilterZone}
          onClick={() => toggleFilterZone()}
        >
          Filtrer par catégorie
          {!openedFilterZone && (
            <ChevronRightIcon className="m-auto ml-2 inline-block h-5 w-5" />
          )}
          {openedFilterZone && (
            <ChevronDownIcon className="m-auto ml-2 inline-block h-5 w-5" />
          )}
        </button>

        <Transition
          show={openedFilterZone}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-2 flex flex-row flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => selectCategory(category.name)}
                aria-pressed={category.selected}
                className={
                  'flex flex-row gap-1 rounded p-2 ring-1 ' +
                  (category.selected
                    ? 'ring-2 ring-[#ffdd57]'
                    : 'ring-gray-500')
                }
              >
                <span>{category.name}</span>
                {category.selected && <XMarkIcon className="m-auto h-5 w-5" />}
              </button>
            ))}
          </div>
        </Transition>
      </div>
      <div className="-mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {displayedCards.map(({ frontmatter, excerpt }) => (
          <Link key={frontmatter.slug} to={frontmatter.slug}>
            <PostCard
              title={frontmatter.title}
              date={frontmatter.date}
              category={frontmatter.category}
              excerpt={excerpt}
              gatsbyImage={
                frontmatter.illustration.childImageSharp.gatsbyImageData
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostCards;
