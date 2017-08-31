import axios from 'axios'
import history from '../history'

const GET_CAMPUSES = 'GET_CAMPUSES'
const REMOVE_CAMPUS  = 'REMOVE_CAMPUS'
const CREATE     = 'CREATE_CAMPUS'
const UPDATE     = 'UPDATE_CAMPUS'

const getCampuses = campuses => ({type: GET_CAMPUSES, campuses})
const remove = id => ({ type: REMOVE_CAMPUS, id })
const create = campus  => ({ type: CREATE, campus })
const update = campus   => ({ type: UPDATE, campus })

const campusesReducer = function(state=[], action) {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case REMOVE_CAMPUS:
      return state.filter(campus => campus.id !== action.id)
    case CREATE:
      return [action.campus, ...state]
    case UPDATE:
      return [
        ...state.filter(campus => campus.id !== action.campus.id),
        Object.assign({}, action.campus)
      ]
    default: return state
  }
}

export default campusesReducer



export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses))
      })
  }
}

export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
}

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err))
}

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => {
         dispatch(update(res.data))
       })
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err))
}
