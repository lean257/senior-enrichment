import { combineReducers } from 'redux'
import campuses from './getCampuses'
import students from './students'
import newStudent from './NewStudentEntry'

const rootReducer = combineReducers({
  campuses,
  students,
  newStudent
})

export default rootReducer
