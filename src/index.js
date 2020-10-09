const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },
  Mutation: {
    // 2
    post: (parent, args, context) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      });
      return newLink;
    },
    updateLink: (parent, args, context) => {
      const {id,...data} = args
      return context.prisma.link.update({ where: { id: parseInt(id) } , data });
    },
    deleteLink: (parent, args, context) => {
      return context.prisma.link.delete({ where: { id: parseInt( args.id ) } });
    },
  },
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
