import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'

const studentsReducer = function(state=[], action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students
    case GET_STUDENT:
      return [...state, action.students]
    default: return state
  }
}

export default studentsReducer
