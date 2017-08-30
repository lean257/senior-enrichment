import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'
import newStudent from './NewStudentEntry'
import newCampus from './NewCampusEntry'

const rootReducer = combineReducers({
  campuses,
  students,
  newStudent,
  newCampus
})

export default rootReducer
