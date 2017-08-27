import React from 'react'
import {connect} from 'react-redux'

function Students(props) {
  const students = props.students
  const campuses = props.campuses

  return(
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Campus</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
        {
          students && students.map(student => (
            <tr key={student.id}>
            <th scope="row">{student.id}</th>
            <th>{student.name}</th>
            <th>{campuses.filter(campus => campus.id === student.campusId)[0].name}</th>
            <th>X</th>
            </tr>
          ))
        }
        </tbody>
      </table>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const StudentsContainer = connect(mapStateToProps)(Students)
export default StudentsContainer
