import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {deleteStudent, updateStudent} from '../reducers/students'
import NewStudentEntry from './NewStudentEntry'

class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      name: this.props.student.name,
      email: this.props.student.email,
      image: this.props.student.image,
      campusId: this.props.student.campusId
    }
    this.removeStudent = this.removeStudent.bind(this)
    this.doneEdit = this.doneEdit.bind(this)
    this.clickEdit = this.clickEdit.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeImage = this.changeImage.bind(this)
    this.changeCampus = this.changeCampus.bind(this)
  }
  render() {
    const { student, campuses, students } = this.props
    if (this.state.isEditing) {
      return(
        <div className="list-group-item min-content user-item">
          <form className="media">
            <div className="media-left media-middle icon-container">
              <button
                type="submit"
                className=""
                onClick={this.doneEdit}
              >Save</button>
              <button
                type="cancel"
                className=""
                onClick={this.cancelEdit}
              >Cancel</button>
            </div>
            <div className="media-body">
              <h4 className="media-heading tucked">
                <input
                  name="name"
                  type="text"
                  required
                  className="form-like"
                  value={this.state.name}
                  onChange={this.changeName}
                />
              </h4>
              <h5 className="tucked">
                <input
                  name="email"
                  type="email"
                  className="form-like"
                  value={this.state.email}
                  onChange={this.changeEmail}
                />
              </h5>
              <h5 className="tucked">
                <input
                  name="image"
                  className="form-like"
                  value={this.state.image}
                  onChange={this.changeImage}
                />
              </h5>
              <h5>
                <select name="campus"
                  onChange={this.changeCampus}>
                  {
                    campuses.map(campus => (
                      <option key={campus.id}>{campus.name}</option>
                    ))
                  }
                </select>
              </h5>
            </div>
          </form>
        </div>
      )
    }
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
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>
          <div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.clickEdit}
                value={student.id}>
              <span className="glyphicon glyphicon-edit" /> 
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
  doneEdit(event) {
    const {student, updateStudent, campuses} = this.props
    event.preventDefault()
    const updatedStudent = {
      name: this.state.name,
      emai: this.state.email,
      campusId: this.state.campusId,
      image: this.state.image
    }
    updateStudent(student.id, updatedStudent)
    this.setState({isEditing: false})
  }
  cancelEdit(event) {
    return this.setState({isEditing: false})
  }
  changeName(event) {
    return this.setState({
      name: event.target.value
    })
  }
  changeEmail(event) {
    return this.setState({
      email: event.target.value
    })
  }
  changeImage(event) {
    return this.setState({
      image: event.target.value
    })
  }
  changeCampus(event) {
    return this.setState({
      campusId: this.props.campuses.filter(campus => campus.name === event.target.value)[0].id || this.state.campusId
    })
  }
}

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = {deleteStudent, updateStudent}

const SingleStudentContainer = withRouter(connect(mapState, mapDispatch)(SingleStudent))
export default SingleStudentContainer
