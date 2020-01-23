'use strict';

const connectDb = require('./db');
const {ObjectID} = require('mongodb');
const errorEventHandler = require('./errorHandler');

module.exports = {
    createCourse: async (root, {input}) => {
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
            errorEventHandler(error)
        }
        return newCourse;
    },
    editCourse: async (root, {_id, input}) => {
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('cursos').updateOne(
                {_id: ObjectID(_id)},
                {$set: input}
            );
            course = db.collection('cursos').findOne(
                {_id: ObjectID(_id)}
            )
        } catch (error) {
            errorEventHandler(error)
        }
        return course;
    },
    createStudent: async (root, {input}) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').insertOne(input);
            input._id = student.insertedId
        } catch (error) {
            errorEventHandler(error)
        }
        return input;
    },
    editStudent: async (root, {_id, input}) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').updateOne(
                {_id: ObjectID(_id)},
                {$set: input}
            );
            student = db.collection('students').findOne(
                {_id: ObjectID(_id)}
            )
        } catch (error) {
            errorEventHandler(error)
        }
        return student;
    },
    removeCourse: async (root, {_id}) => {
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('students').deleteOne(
                {_id: ObjectID(_id)},
            );
        } catch (error) {
            errorEventHandler(error)
        }
        return `Course with ID: ${_id} has been removed successfully`;
    },
    removeStudent: async (root, {_id}) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').deleteOne(
                {_id: ObjectID(_id)},
            );
        } catch (error) {
            errorEventHandler(error)
        }
        return `Student with ID: ${_id} has been removed successfully`;
    },
    addPeople: async (root, {courseID, personID}) => {
        let db;
        let person;
        let course;
        try {
            db = await connectDb();
            person = await db.collection('students').findOne(
                {_id: ObjectID(personID)}
            );
            course = await db.collection('cursos').findOne(
                {_id: ObjectID(courseID)}
            );

            if (!course || !person)
                throw new Error(`Person or Course does not exists`);

            await db.collection('cursos').updateOne(
                {_id: ObjectID(courseID)},
                {$addToSet: {people: ObjectID(personID)}}
            )
        } catch (error) {
            errorEventHandler(error)
        }
        return course;
    }
};