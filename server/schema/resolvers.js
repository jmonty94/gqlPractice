const { User, Todo } = require('./../models');

const resolvers = {
    Query: {
        users: async() => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        createUser: async (_root,{ username, email, password } ) => {
            /**
             *  args === {username, email, password}
             */
            try {
                const newUser = await User.create({
                    username: username,
                    email: email,
                    password: password
                });

                return newUser;
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    User: {
        todos: async(root) => {
            console.log(root);
            return await Todo.find({ userId: root._id});
        },
        greeting: (root) => `Hello I am ${root.username}`
    },
    Todo: {
        user: async (root) => {
            return await User.findById(root.userId);
        },
    },
};

module.exports = resolvers