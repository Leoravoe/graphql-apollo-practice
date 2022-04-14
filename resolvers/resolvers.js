const data = require('../demoPost.json')
// console.log(data)


const resolvers = {
    Query: {
        getPost : (parent,args,context,info)=>{
            return data;
        }
    },
    Post: {
        comment: (parents,args,context,info)=>{
            console.log(parents.comment);
            return parents.comment
        }
    },
}

module.exports = resolvers