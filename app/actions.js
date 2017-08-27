import axios from 'axios'

export const gotCampuses = campuses => ({type: 'GET_CAMPUSES', campuses})

export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(gotCampuses(campuses))
      })
  }
}

export const getCampus = campus => ({type:'GET_CAMPUS', campus})

export const getStudents = students => ({type: 'GET_STUDENTS', students})

export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
  }
}
