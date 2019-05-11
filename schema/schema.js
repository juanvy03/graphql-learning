const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

/* Dummy data*/
var authors = [
  { name:'Patrick Rothfuss', age:44, id:'1'},
  { name:'Brandon Sanderson', age:42, id:'2'},
  { name:'Terry Pratchet', age:66, id:'3'}
];

/*
 * Object Definition
 */
const BookType = new GraphQLObjectType({
  name:'Book',
  fields:() => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name :'Author',
  fields: () => ({
    id:{ type: GraphQLID },
    name:{ type: GraphQLString },
    genre:{ type: GraphQLString }
  })
});

/*
 * We don't need to worry about the order in the RootQuery so,
 * fields wont be a functionn
 */
const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields: {
    book:{
      type: BookType,
      args:{ id:{ type:GraphQLString } },
      resolve(parent, args){
        //code to get data from DB/other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
