//  Objects destructuring and JSON APIs

const course = {
    courseInstructor: "Happy Singh",
    coursename: "JS and me ",
    price: "9999"

};

// const.courceInstructor 

const { courseInstructor: Instructor } = course

console.log(Instructor);
