import axios from 'axios'
import history from '../history'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE     = 'CREATE_USER'

const create = student  => ({ type: CREATE, student });

const studentsReducer = function(state=[], action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students
    case GET_STUDENT:
      return [...state, action.student]
    case DELETE_STUDENT:
      const newState = Object.assign([], state)
      const indexOfStudentToDelete = state.findIndex(student => student.id === action.studentId)
      newState.splice(indexOfStudentToDelete, 1)
      return newState
    case CREATE:
      return [action.student, ...state];
    default: return state
  }
}

export default studentsReducer

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


export function postStudent(student){
  return function thunk(dispatch){
    return axios.post('api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(getStudent(newStudent))
      history.push(`/students/${newStudent.id}`)
    })
    .catch(console.error)
  }
}

export const addStudent = student => dispatch => {
  axios.post('/api/students', student)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating user: ${student} unsuccesful`, err))
}
