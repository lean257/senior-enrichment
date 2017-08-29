
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

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
    default: return state
  }
}

export default studentsReducer
