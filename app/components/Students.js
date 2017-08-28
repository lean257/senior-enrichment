import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

function Students (props) {

  const {students, campuses} = this.props
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
    {
      students && students.map(student => (
        <tbody key={student.id}>
        <tr>
        <th scope="row">{student.id}</th>
        <th><Link className="thumbnail" to={`/students/${student.id}`}>{student.name}</Link>
        </th>
        <th>{campuses.filter(campus => campus.id === student.campusId)[0].name}</th>
        <th onClick={this.props.handleDelete}>X</th>
        </tr>
        </tbody>
      ))
    }
    </table>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleDelete(){
      dispatch(deleteStudent(ownProps.match.params.studentId))
    }
  }
}
//in order to use connect can it be a class or it needs to be a function?
const StudentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Students))
export default StudentsContainer
