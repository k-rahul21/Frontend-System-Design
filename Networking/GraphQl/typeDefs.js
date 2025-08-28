// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against your data.

export const typeDefs =`#graphql

# This "Book" type defines the queryable fields for every book in our data source.
# ! symbol defines that this field is mandatory

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    publishedYear: Int
    author: Author
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  # Here you'll define all the methods to get the data
  type Query {
    authors: [Author]
    books: [Book]
  }

  # Here you'll define all the methods to update the data
  type Mutation {
    _empty: String
  }
`;