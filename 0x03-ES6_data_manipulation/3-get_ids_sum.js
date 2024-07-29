export default function getStudentIdsSum(studentList) {
  const sumOfIds = studentList.reduce((total, student) => total + student.id, 0);
  return sumOfIds;
}
