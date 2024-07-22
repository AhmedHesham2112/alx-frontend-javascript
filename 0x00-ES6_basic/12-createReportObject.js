/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) =>
      Object.keys(employeesList).length,
  };
}
