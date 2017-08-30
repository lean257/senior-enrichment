
const ADD_STUDENT = 'ADD_STUDENT'

export const addStudent = student => ({type: 'ADD_STUDENT', student})

export default function newStudentReducer (state='', action) {

  switch (action.type) {

    case ADD_STUDENT:
      return action.student

    default:
      return state;
  }

}
