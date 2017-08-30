import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {deleteStudent} from '../reducers/students'
import {addStudent} from '../reducers/NewStudentEntry'
import SingleStudent from './SingleStudent'
import NewStudentEntry from './NewStudentEntry'

class Students extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="user-query">
          <NewStudentEntry />
        </div>
        <br />
        <br />
        <div className="user-list">
        {
          this.props.students
            .map(student => <SingleStudent student={student} key={student.id} />)
        }
        </div>
      </div>
    )
  }
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
