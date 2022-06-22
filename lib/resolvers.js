'use strict'

const courses = [
  {
    _id: "01",
    title: "My title 1",
    teacher: "My Professor",
    description: "My Course of programming",
    topic: "Programming",
  },
  {
    _id: "02",
    title: "My title 2",
    teacher: "My Professor",
    description: "My Course of programming",
    topic: "Programming",
  },
  {
    _id: "03",
    title: "My title 3",
    teacher: "My Professor",
    description: "My Course of programming",
    topic: "Programming",
  },
];

module.exports = {
    getCourses: () => {
        return courses
  }
}