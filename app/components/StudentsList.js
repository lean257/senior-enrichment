import React, {Component} from 'react'
import store from '../store'
import Student from './Student'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

function StudentsList (props) {
  const students = props.students
  const campusId = Number(props.match.params.campusId)
  const filteredStudents = students.filter(students => students.campusId === campusId);

  return (
    <div>
      <ul className="media-list">
        { filteredStudents.map(student => <Student student={student} key={student.id} />) }
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

const AllStudentsContainer = withRouter(connect(mapStateToProps)(StudentsList))
export default AllStudentsContainer
