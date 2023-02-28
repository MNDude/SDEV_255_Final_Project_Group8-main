// Adds the newCourse object to the Courses.JSON file
// Takes a newCourse Object as a parameter
// newCourse object should fit Courses.JSON schema

const fs = require('fs');

module.exports = async function addNewCourse (newCourse) {
  if (typeof newCourse !== 'object') {
    console.log('newCourse is not of type "object"');
    // TODO: Error handling
    // throw new Error(`addNewCourse received argument of type ${typeof newCourse}: expected object`);
  }
  await fs.readFile('./models/Courses.JSON', (err, data) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    const dataObject = JSON.parse(data);
    const allCourses = dataObject.Courses;
  
    allCourses.push(newCourse);
    dataObject['Courses'] = allCourses;
    
    fs.writeFile('./models/Courses.JSON', JSON.stringify(dataObject), (err) => {
      if (err) {
        console.log(`Error: ${err}`);
        return;
      }
      console.log('Courses.JSON updated');
    })
  })
}