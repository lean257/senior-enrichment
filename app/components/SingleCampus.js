import React, {Component} from 'react'
import store from '../store'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {deleteStudent} from '../reducers/students'

function SingleCampus (props) {
  const students = props.students
  const campusId = Number(props.match.params.campusId)
  const filteredStudents = students.filter(students => students.campusId === campusId);

  return (
    <div>
    <table className="table">
      <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Delete</th>
      </tr>
      </thead>
      {
        filteredStudents && filteredStudents.map(student => (
          <tbody key={student.id}>
            <tr>
              <th scope="row">{filteredStudents.indexOf(student)+1}</th>
              <td><Link className="thumbnail" to={`/students/${student.id}`}>{student.name}</Link>
              </td>
              <td><button
                className="delete"
                value={student.id}
                onClick={props.handleDelete}> X
              </button></td>
            </tr>
          </tbody>
        ))
      }
    </table>
    <button><Link to='/new-student'>Add Student</Link></button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    handleDelete(evt){
      dispatch(deleteStudent(Number(evt.target.getAttribute('value'))))
    }
  }
}

const AllStudentsContainer = withRouter(connect(mapStateToProps, mapDispatch)(SingleCampus))
export default AllStudentsContainer
