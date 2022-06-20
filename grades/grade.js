// calculate average grade from array and return what grade it is according to below grade scale:
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const grades = [80, 80, 50];

const calculateGrades = (array) => {
  const mySum = array.reduce((sum, value) => sum + value, 0);
  const meanGrade = mySum / grades.length;

  if (meanGrade <= 59) return 'Your grade is: F';
  if (meanGrade <= 69) return 'Your grade is: D';
  if (meanGrade <= 79) return 'Your grade is: C';
  if (meanGrade <= 89) return 'Your grade is: B';
  return 'Your grade is: A';
};

console.log(calculateGrades(grades));
