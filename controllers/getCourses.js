// Functions for accessing the data contained in Courses.JSON 

const fs = require('fs').promises;


// Return all courses object from Courses.JSON
function getAllCourses() {
  return new Promise((resolve, reject) => {
    fs.readFile('./models/Courses.JSON')
    .then((data) => {
      resolve(JSON.parse(data));
    })
    .catch( err => reject(err) );
  })
  
}

// Return a single Course object from Courses.json
// Course returned matches the parameter ( id )
function getCourse(id) {
  return new Promise((resolve, reject) => {
    fs.readFile('./models/Courses.JSON')
    .then((data) => {
      let courses = JSON.parse(data);
      for (let course of courses.Courses) {
        if (course.id == id) {
          console.log(course.id);
          resolve(course);
        }
      }
      reject(`No course with id ${id} exists in database`);
    })
    .catch( err => console.log(err) );
  })
}

module.exports = {
  getAllCourses,
  getCourse
}