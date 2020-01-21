'use strict';

const courses = [
    {
        _id: '1',
        title: 'My title',
        teacher: 'A Cortez',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        topic: 'Lorem Ipsum',
    },
    {
        _id: '2',
        title: 'My title 2',
        teacher: 'A Cortez',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        topic: 'Lorem Ipsum',
    },
    {
        _id: '3',
        title: 'My title 3',
        teacher: 'A Cortez',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        topic: 'Lorem Ipsum',
    }
];

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id);
            return course.pop();
        }
    }
};