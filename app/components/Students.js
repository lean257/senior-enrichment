import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {deleteStudent} from '../actions'

function Students (props) {

  const {students, campuses} = props
  return(
    <div>
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
        <th scope="row">{students.indexOf(student)+1}</th>
        <td><Link className="thumbnail" to={`/students/${student.id}`}>{student.name}</Link>
        </td>
        <td>
          <Link
            className="thumbnail"
            to={`/campuses/${student.campusId}`}>
            {campuses && campuses.filter(campus => campus.id === student.campusId)[0].name}
          </Link>
        </td>
        <td className="delete"
          value={student.id}
          onClick={props.handleDelete}>X</td>
        </tr>
        </tbody>
      ))
    }
    </table>
    <div><Link to='/new-student'>Add a New Student</Link></div>
  </div>
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
    handleDelete(evt){
      dispatch(deleteStudent(Number(evt.target.getAttribute('value'))))
    }
  }
}
//in order to use connect can it be a class or it needs to be a function?
const StudentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Students))
export default StudentsContainer
