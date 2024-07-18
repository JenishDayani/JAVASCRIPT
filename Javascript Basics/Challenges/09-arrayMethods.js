console.log(students);

const updatedStudents = students.map(function (student) {
  student.role = 'Student';
  return student;
});

console.log(updatedStudents);

const scores = students.filter(function (student) {
  return student.score >= 80;
});

console.log(scores);

const idStudent = students.find(function (student) {
  return student.id === 2;
});

console.log(idStudent);

const sumScore = students.reduce(function (totalScore, student) {
  totalScore += student.score;
  return totalScore;
}, 0);

console.log(sumScore);
const averageScore = sumScore / students.length;

console.log(averageScore);

const survey = students.reduce(function (subject, student) {
  const favSubject = student.favoriteSubject;
  console.log(favSubject);
  if (subject[favSubject]) {
    subject[favSubject] = subject[favSubject] + 1;
  } else {
    subject[favSubject] = 1;
  }
  return subject;
}, {});

console.log(survey);
