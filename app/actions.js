import axios from 'axios'

export const gotCampuses = campuses => ({type: 'GET_CAMPUSES', campuses})

export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(gotCampuses(campuses))
      })
  }
}

export const getCampus = campus => ({type:'GET_CAMPUS', campus})

export const getStudents = students => ({type: 'GET_STUDENTS', students})
export const getStudent = student => ({type: 'GET_STUDENT', student})

export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
  }
}

export const deleteStudentSuccess = studentId => ({type: 'DELETE_STUDENT', studentId})

export function deleteStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then(() => {
      dispatch(deleteStudentSuccess(studentId))
    })
    .catch(console.error)
  }
}

export const addStudent = student => ({type: 'ADD_STUDENT', student})

export function postStudent(student){
  return function thunk(dispatch){
    return axios.post('api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(getStudent(newStudent))
    })
    .catch(console.error)
  }
}
