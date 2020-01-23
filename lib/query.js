'use strict';

const connectDb = require('./db');
const {ObjectId} = require('mongodb');
const errorEventHandler = require('./errorHandler');

module.exports = {
    getCourses: async () => {
        let db;
        let courses;

        try {
            db = await connectDb();
            courses = await db.collection('cursos').find().toArray();
        } catch (error) {
            errorEventHandler(error);
        }
        return courses;
    },
    getCourse: async (root, {id}) => {
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('cursos').findOne({_id: ObjectId(id)});
        } catch (error) {
            errorEventHandler(error);
        }
        return course;
    },
    getStudents: async () => {
        let db;
        let students;

        try {
            db = await connectDb();
            students = await db.collection('students').find().toArray();
        } catch (error) {
            errorEventHandler(error);
        }
        return students;
    },
    getStudent: async (root, {id}) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').findOne({_id: ObjectId(id)});
        } catch (error) {
            errorEventHandler(error);
        }
        return student;
    }
};
