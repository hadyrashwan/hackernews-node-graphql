const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

let idCount = links.length;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
  },
  Mutation: {
    // 2
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const id = links.findIndex((item) => item.id == args.id);
      links[id] = { ...links[id], ...args };
      return links[id];
    },
    deleteLink: (parent, args) => {
      const id = links.findIndex((item) => item.id == args.id);
      const temp = links[id];
      links = links.filter((item) => item.id !== args.id);
      return temp;
    },
  },
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
