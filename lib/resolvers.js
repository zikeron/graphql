'use strict';

const connectDb = require('./db');
const { ObjectId } = require('mongodb');

module.exports = {
    Query: {
        getCourses: async () => {
            let db;
            let courses;

            try {
                db = await connectDb();
                courses =  await db.collection('cursos').find().toArray();
            } catch (error) {
                console.log(error)
            }
            console.log(courses);
        },
        getCourse: async (root, { id }) => {
            let db;
            let course;
            try {
                db = await connectDb();
                course = await db.collection('cursos').findOne({ _id: ObjectId(id)});
            } catch (error) {
                console.log(error)
            }
            return course;
        }
    }
};