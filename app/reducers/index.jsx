import { combineReducers } from 'redux'
import campuses from './getCampuses'
import students from './students'

const rootReducer = combineReducers({
  campuses,
  students
})

export default rootReducer
