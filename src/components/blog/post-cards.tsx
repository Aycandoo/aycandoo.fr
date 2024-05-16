import { Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link, navigate } from 'gatsby';
import { sortBy, uniqBy } from 'lodash';
import React, { useEffect, useState, type FC } from 'react';
import { type MarkdownRemark } from '../../models/markdown-remark';
import PostCard from './post-card';

interface PostCardsParams {
  cards: MarkdownRemark[];
  filters: string[];
}

interface Category {
  name: string;
  selected: boolean;
}

const PostCards: FC<PostCardsParams> = ({ cards, filters = [] }) => {
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

    if (filters && filters.length > 0) {
      const updatedCategories = applyFilters(filteredCategories, filters);
      setCategories(updatedCategories);
    } else {
      setCategories(filteredCategories);
    }
  }, [cards, filters]);

  useEffect(() => {
    const selectedCategoryNames = getSelectedCategoryNames();
    filterCardsByCategories(selectedCategoryNames);
  }, [categories]);

  const selectCategory = async (categoryToUpdate: string): Promise<void> => {
    const updatedCategories = categories.map((category) => {
      if (category.name === categoryToUpdate) {
        category.selected = !category.selected;
      }
      return category;
    });
    setCategories(updatedCategories);

    if (categories.filter((c) => c.selected).length > 0) {
      await navigate(getSelectedCategoriesAsQueryParams(categories), {
        replace: true,
      });
    } else {
      await navigate('', { replace: true });
    }
  };

  const applyFilters = (
    categories: Category[],
    filters: string[]
  ): Category[] => {
    const upperCasedFilters = filters.map((f) => f.toUpperCase());
    const updatedCategories = categories.map((category) => {
      if (upperCasedFilters.includes(category.name)) {
        category.selected = true;
      }
      return category;
    });
    return updatedCategories;
  };

  const getSelectedCategoriesAsQueryParams = (
    categories: Category[]
  ): string => {
    const queryParams = categories
      .filter((c) => c.selected)
      .map((c) => c.name)
      .map((c) => `filters=${c.toLowerCase()}`)
      .join('&');

    return `?${queryParams}`;
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

  return (
    <>
      <div>
        <button
          type="button"
          className="mb-2 font-bold"
          aria-pressed={openedFilterZone}
          onClick={() => setOpenedFilterZone(!openedFilterZone)}
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
          <div className="mb-6 mt-2 flex flex-row flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={async () => await selectCategory(category.name)}
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
    </>
  );
};

export default PostCards;
