const bookData = [
  {
    id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.",
    published: "2014-04-15",
    image: "images/Alchemist.png",
    ISBN: 9780062315007,
    language: "English",
    pageCount: 175,
    isFeatured: true,
  },
  {
    id: "2",
    title: "The Dark Side of the Light Chasers",
    author: "Deborah Ford",
    description:
      "The bestselling, beloved classic on how to go into the dark side of yourself to bring out the light now with new material.",
    published: "2010-11-02",
    image: "images/Dark-Side.png",
    ISBN: 9781594485251,
    pageCount: 208,
    language: "English",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    description:"No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    published: "2018-10-18",
    image: "images/Atomic-Habits.png",
    ISBN: 9781473537804,
    language: "English",
    pageCount: 320,
    isFeatured: true,
  },
  {
    id: "4",
    title: "Daddy-Long-Legs",
    author: "Jean Webster",
    description:
      "When Jerusha Abbott, an eighteen-year-old girl living in an orphan asylum, was told that a mysterious millionaire had agreed to pay for her education, it was like a dream come true. For the first time in her life, she had someone she could pretend was family.",
    published: "1912-01-01",
    image: "images/Daddy-Long-Legs.png",
    pageCount: 249,
    ISBN: 9780061962646,
    language: "English",
    isFeatured: false,
  },
  {
    id: "5",
    title: "The Shadow Effect",
    author: "Debbie Ford",
    description:
      "Make peace with yourself, others, and the world Bring light to the parts of yourself that have the power to transform your life Find the courage to let go of all that holds you back Reconnect with the person you were meant to be and the life you were meant to live",
    published: "2010-05-04",
    image: "images/shadow-effect.png",
    ISBN: 9780061962646,
    language: "English",
    pageCount: 208,
    isFeatured: true,
  },
  {
    id: "6",
    title: "The Fifth Mountain",
    author: "Paulo Coelho",
    description:
      "The Fifth Mountain is Paulo Coelho inspiring story of the Biblical prophet Elijah. In the ninth century B.C.",
    published: "2000-04-26",
    image: "images/Fifth_Mountain.png",
    ISBN: 9780060930134,
    pageCount: 256,
    language: "English",
    isFeatured: true,
  },
  {
    id: "7",
    title: "The Game of Life",
    author: "Florence Scovel Shinn",
    description:
      "The game of life is a game of boomerangs. Our thoughts, deeds, and words return to us sooner or later with astounding accuracy.",
    published: "2012-10-04",
    image: "images/Game-of-Life.png",
    ISBN: 9781582703749,
    language: "English",
    pageCount: 238,
    isFeatured: false,
  },
  {
    id: "8",
    title: "Eat That Frog!",
    author: "Brian Tracy",
    description:'There just isnt enough time for everything on our to-do list--and there never will be. Successful people dont try to do everything. They learn to focus on the most important tasks and make sure those get done. They eat their frogs.',
    published: "2017-04-17",
    image: "images/Eat-That-Frog.png",
    ISBN: 9781626569416,
    pageCount: 144,
    language: "English",
    isFeatured: true,
  },
 
];

export function getFeaturedBooks() {
  return bookData.filter((book) => book.isFeatured);
}

export function getAllBooks() {
  return bookData;
}

export function getFilteredBooks(dateFilter) {
  const { year, month } = dateFilter;

  let filteredBooks = bookData.filter((book) => {
    const publishedDate = new Date(book.published);
    return (
      publishedDate.getFullYear() === year &&
      publishedDate.getMonth() === month - 1
    );
  });

  return filteredBooks;
}

export function getBookById(id) {
  return bookData.find((book) => book.id === id);
}

export function getPublishedYear() {
  let publishedYear = bookData.map((book) => {
    const publishedDate = new Date(book.published);
    return publishedDate.getFullYear();
  });
  return publishedYear;
}
