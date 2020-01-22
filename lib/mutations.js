'use strict';

const connectDb = require('./db');
const {ObjectID} =require('mongodb');

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: '',
            topic: ''
        };
        const newCourse = Object.assign(defaults, input);
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('cursos').insertOne(newCourse);
            newCourse._id = course.insertedId
        } catch (error) {
            console.log(error)
        }
        return newCourse;
    },
    editCourse: async (root, { _id, input }) => {
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('cursos').updateOne(
                {_id: ObjectID(_id)},
                {$set: input}
                );
            course = db.collection('cursos').findOne(
                { _id: ObjectID(_id)}
                )
        } catch (error) {
            console.log(error)
        }
        return course;
    },
    createStudent: async (root, { input }) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').insertOne(input);
            input._id = student.insertedId
        } catch (error) {
            console.log(error)
        }
        return input;
    },
    editStudent: async (root, { _id, input }) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').updateOne(
                {_id: ObjectID(_id)},
                {$set: input}
            );
            student = db.collection('students').findOne(
                { _id: ObjectID(_id)}
            )
        } catch (error) {
            console.log(error)
        }
        return student;
    },
    removeCourse: async (root, { _id}) => {
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('students').deleteOne(
                {_id: ObjectID(_id)},
            );
        } catch (error) {
            console.log(error)
        }
        return `Course with ID: ${_id} has been removed successfully`;
    },
    removeStudent: async (root, { _id}) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').deleteOne(
                {_id: ObjectID(_id)},
            );
        } catch (error) {
            console.log(error)
        }
        return `Student with ID: ${_id} has been removed successfully`;
    },
};