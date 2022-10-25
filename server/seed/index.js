const { User, Todo } = require('./../models');
const db = require('./../config/connection')


const users = [
    {
        username: 'a',
        email: 'a@gmail.com',
        password: 'password'
    },
    {
        username: 'ab',
        email: 'ab@gmail.com',
        password: 'password'
    },
    {
        username: 'ac',
        email: 'ac@gmail.com',
        password: 'password'
    },
];

const todos = [
    {
        todo: 'eat',
        completed: false,
    },
    {
        todo: 'sleep',
        completed: false,
    },
    {
        todo: 'poop',
        completed: false,
    },
];

db.once('open', async () => {
    await User.deleteMany({});
    await Todo.deleteMany({});

    const insertedUsers = await User.insertMany(users);
    todos[0].userId = insertedUsers[0]._id;
    todos[1].userId = insertedUsers[1]._id;
    todos[2].userId = insertedUsers[2]._id;


    const insertedTodos = await Todo.insertMany(todos);
    console.log(insertedTodos);
    process.exit(0);
});

