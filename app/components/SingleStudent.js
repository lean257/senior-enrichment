import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React from 'react'
import Student from './Student'
import {withRouter} from 'react-router'

function SingleStudent (props) {
  const students = props.students
  const studentId = Number(props.match.params.studentId)
  const filteredStudent = students.filter(student => student.id === studentId);

  return (
    <div>
      <ul className="media-list">
        <Student student={filteredStudent[0]} key={studentId} />
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

const SingleStudentContainer = withRouter(connect(mapStateToProps)(SingleStudent))
export default SingleStudentContainer
