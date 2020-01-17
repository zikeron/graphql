'use strict';

const courses = [
    {
        _id: 'anyid',
        title: 'My title',
        teacher: 'A Cortez',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        topic: 'Lorem Ipsum',
    },
    {
        _id: 'anyid',
        title: 'My title 2',
        teacher: 'A Cortez',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        topic: 'Lorem Ipsum',
    },
    {
        _id: 'anyid',
        title: 'My title 3',
        teacher: 'A Cortez',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        topic: 'Lorem Ipsum',
    }
];
module.exports = {
    getCourses: () => {
        return courses
    }
};