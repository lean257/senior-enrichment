import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {deleteStudent} from '../reducers/students'

class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
    this.removeStudent = this.removeStudent.bind(this)
    // this.doneEdit = this.doneEdit.bind(this)
    // this.clickEdit = this.clickEdit.bind(this)
    // this.cancelEdit = this.cancelEdit.bind(this)
  }
  render() {
    const { student, campuses } = this.props
    // if (this.state.isEditing) {
    //   return
    // }
    return (
      <div className="list-group-item min-content students-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <img className="media-object img-circle" src={student.image} />
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/students/${student.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{student.name}</span>
            </h4>
            <h5 className="tucked">
              <span>{student.email}</span>
            </h5>
            <h5 className="tucked">
              <span>{campuses && campuses.filter(campus => campus.id === student.campusId)[0].name}</span>
            </h5>
          </NavLink>
          <div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.removeStudent}
                value={student.id}>
              <span className="glyphicon glyphicon-remove" /> X
            </button>
          </div>
        </div>
      </div>
    );
  }
  removeStudent (event) {
    const { student, deleteStudent } = this.props;
    event.stopPropagation()
    deleteStudent(student.id)
  }
  clickEdit(event) {
    this.setState({isEditing: true})
  }
}

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = {deleteStudent};

const SingleStudentContainer = withRouter(connect(mapState, mapDispatch)(SingleStudent))
export default SingleStudentContainer
