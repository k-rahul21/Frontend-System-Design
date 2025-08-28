const data = {
  books : [
    {
      id: 101,
      title: `Can't Hurt Me`,
      publishedYear: 2018,
      authorId: 1
    },
    {
      id: 102,
      title: 'Can love happen twice?',
      publishedYear: 2011,
      authorId: 2
    },
    {
      id: 103,
      title: 'I too had a love story',
      publishedYear: 2008,
      authorId: 2
    }
  ],
  authors : [
    {
      id: 1,
      name: 'David Goggins',
      bookIds: [101]
    },
    {
      id: 2,
      name: 'Ravinder Singh',
      bookIds: [102, 103]
    }
  ]
}

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find(authorInfo => authorInfo.id === parent.authorId)

    }
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter(bookInfo => parent.bookIds.includes(bookInfo.id))
    }
  },
  Query: {
    authors: () => {
      return data.authors
    },
    books: () => {
      return data.books
    }
  }
}