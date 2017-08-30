
const ADD_CAMPUS = 'ADD_CAMPUS'

export const addCampus = campus => ({type: 'ADD_CAMPUS', campus})

export default function newStudentReducer (state='', action) {

  switch (action.type) {

    case ADD_CAMPUS:
      return action.campus

    default:
      return state;
  }

}
