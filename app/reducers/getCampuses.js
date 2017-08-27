import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'

const campusesReducer = function(state=[], action) {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case GET_CAMPUS:
      return [...state, action.campus]
    default: return state
  }
}

export default campusesReducer
