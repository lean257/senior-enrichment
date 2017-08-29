import React, {Component} from 'react'
import store from '../store'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

function StudentsList (props) {
  const students = props.students
  const campusId = Number(props.match.params.campusId)
  const filteredStudents = students.filter(students => students.campusId === campusId);

  return (
    <table className="table">
      <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      </tr>
      </thead>
      {
        filteredStudents && filteredStudents.map(student => (
          <tbody key={student.id}>
            <tr>
              <th scope="row">{filteredStudents.indexOf(student)+1}</th>
              <td><Link className="thumbnail" to={`/students/${student.id}`}>{student.name}</Link>
              </td>
            </tr>
          </tbody>
        ))
      }
    </table>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

const AllStudentsContainer = withRouter(connect(mapStateToProps)(StudentsList))
export default AllStudentsContainer
