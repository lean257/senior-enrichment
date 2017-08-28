import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React from 'react'
import Student from './Student'

function SingleStudent (props) {
  const students = props.students
  const studentId = Number(props.match.params.studentId)
  const filteredStudent = students.filter(student => student.studentId === studentId);

  return (
    <div>
      <ul className="media-list">
        <Student student={filteredStudent} key={studentId} />
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
