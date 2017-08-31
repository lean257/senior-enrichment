import axios from 'axios'
import history from '../history'

const GET_STUDENTS = 'GET_STUDENTS'
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE     = 'CREATE_STUDENT'
const UPDATE     = 'UPDATE_STUDENT'

const update = student   => ({ type: UPDATE, student })
const create = student  => ({ type: CREATE, student });
const deleteStudentSuccess = studentId => ({type: 'DELETE_STUDENT', studentId})
const getStudents = students => ({type: 'GET_STUDENTS', students})

const studentsReducer = function(state=[], action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students
    case DELETE_STUDENT:
      const newState = Object.assign([], state)
      const indexOfStudentToDelete = state.findIndex(student => student.id === action.studentId)
      newState.splice(indexOfStudentToDelete, 1)
      return newState
    case CREATE:
      return [action.student, ...state]
    case UPDATE:
      return [
        ...state.filter(student => student.id !== action.student.id),
        Object.assign({}, action.student)
      ]
    default: return state
  }
}

export default studentsReducer

export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
  }
}

export function deleteStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then(() => {
      dispatch(deleteStudentSuccess(studentId))
    })
    .catch(console.error)
  }
}

export const addStudent = student => dispatch => {
  axios.post('/api/students', student)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating user: ${student} unsuccesful`, err))
}
export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
       .then(res => {
         console.log('res.data inside axios', res.data)
         dispatch(update(res.data))
       })
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err))
}
