const data = require('../demoPost.json')


const resolvers = {
    Query: {
        getPost : ()=>{
            return data;
        }
    }
}

module.exports = resolvers