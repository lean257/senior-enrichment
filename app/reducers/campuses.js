import axios from 'axios'
import history from '../history'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'

export const getCampuses = campuses => ({type: 'GET_CAMPUSES', campuses})
export const getCampus = campus => ({type: 'GET_CAMPUS', campus})

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



export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses))
      })
  }
}

//request to server
export function postCampus(campus){
  // console.log('campus inside postCampus', campus)
  return function thunk(dispatch){
    return axios.post('api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      // console.log('newCampus inside axios', newCampus)
      dispatch(getCampus(newCampus))
      history.push(`/campuses/${newCampus.id}`)
    })
    .catch(console.error)
  }
}

// import axios from 'axios';
// import {REMOVE as REMOVE_STUDENT} from './students'
// /* -----------------    ACTION TYPES ------------------ */
//
// const INITIALIZE = 'INITIALIZE_CAMPUSES';
// const CREATE     = 'CREATE_CAMPUS';
// const UPDATE     = 'UPDATE_CAMPUS';
// const REMOVE     = 'REMOVE_CAMPUS';
//
// /* ------------   ACTION CREATORS     ------------------ */
//
// const init   = campuses => ({ type: INITIALIZE, campuses });
// const create = campus   => ({ type: CREATE, campus });
// const remove = id      => ({ type: REMOVE, id });
// const update = campus   => ({ type: UPDATE, campus });
//
// /* ------------       REDUCERS     ------------------ */
//
// export default function reducer (campuses = [], action) {
//   switch (action.type) {
//
//     case INITIALIZE:
//       return action.campuses;
//
//     case CREATE:
//       return [action.campus, ...campuses];
//
//     case REMOVE:
//       return campuses.filter(campus => campus.id !== action.id);
//
//     case REMOVE_STUDENT:
//       return campuses.filter(campus => campus.student_id !== action.id);
//
//     case UPDATE:
//       return campuses.map(campus => (
//         action.campus.id === campus.id ? action.campus : campus
//       ));
//
//     default:
//       return campuses;
//   }
// }
//
// /* ------------   THUNK CREATORS     ------------------ */
//
// export const fetchcampuses = () => dispatch => {
//   axios.get('/api/campuses')
//        .then(res => dispatch(init(res.data)))
//        .catch(err => console.error('Fetching campuses unsuccessful', err));
// };
//
// export const fetchcampus = (id) => dispatch => {
//   axios.get(`/api/campuses/${id}`)
//        .then(res => dispatch(update(res.data)))
//        .catch(err => console.error('Fetching campus unsuccessful', err));
// };
//
// // optimistic
// export const removecampus = id => dispatch => {
//   dispatch(remove(id));
//   axios.delete(`/api/campuses/${id}`)
//        .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
// };
//
// export const addcampus = campus => dispatch => {
//   axios.post('/api/campuses', campus)
//        .then(res => dispatch(create(res.data)))
//        .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
// };
//
// export const updatecampus = (id, campus) => dispatch => {
//   axios.put(`/api/campuses/${id}`, campus)
//        .then(res => dispatch(update(res.data)))
//        .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
// };