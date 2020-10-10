# Hackernews in Nodejs and GraphQL
In this project, I learned how to build a GraphQL server from scratch. The stack is `Node.js`, `graphql-yoga` and `Prisma`. 

# Technologies used:
- Written in Node.js as its a simple yet powerful technology to use.
- Making use of `graphql-yoga` as its a fast and simple GraphQL server library built on top of `Express.js`. It comes with several features, such as out-of-the-box support for GraphQL Playgrounds and realtime GraphQL subscriptions.
- The resolvers of the GraphQL server are implemented using `Prisma` Client ,which is responsible for database access.
- Using `sqlite` as the database.

# Features Implemented 
- Get links posted as feeds.
- Support pagination and sorting on feeds.
- Support filtering on feeds.
- Authentication using email and password with JWT support.
- Vote on the links posted.
- Update links posted.
- Delete links posted.
- Receive notification in realtime on recent links added.
- Receive notification in realtime on recent votes made.

## For more information about the schema	
>[Go to schema.graphql ](src/schema.graphql)

# How to setup
- Make sure that you have `Node.js` version `14.0.0` or above.
- Make sure that you have `npx` installed.
- Clone the project using `git clone git@github.com:hadyrashwan/hackernews-node-graphql.git`.
- Run `npm install`.
- Run `npm run migrate`.
- Run `npm run client`.
- Start the server using  `npm start`.
- Sever should be running on http://localhost:4000.

# How to use
Follow [howtographql tutorial](https://www.howtographql.com/graphql-js/0-introduction/) where they give you request examples in every section. Here are some of them.
- Adding a new link.
```
mutation {
  post(
    url: "https://github.com/hadyrashwan/hackernews-node-graphql"
    description: "Check out this GraphQL project by Hady Rashwan."
  ) {
    id
    description
  }
}
```
- Fetch the Feed items in the database.
```
query {
  feed{
    count
    links{
      description
      url
    }
    
  }
}
```
# Credit
This project is made possible by [howtographql tutorial](https://www.howtographql.com/graphql-js/0-introduction/).
