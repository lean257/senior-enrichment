import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addStudent} from '../reducers/NewStudentEntry'
import {getStudent, postStudent} from '../reducers/students'
import {withRouter} from 'react-router'
import store from '../store'

class NewStudentEntry extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const name = evt.target.studentName.value
    const email = evt.target.studentEmail.value
    const img = evt.target.studentPic.value || 'https://s-media-cache-ak0.pinimg.com/736x/49/31/d2/4931d228854f9b9ef6158cde2515e752--mini-yorkie-adorable-puppies.jpg'
    const campusName = evt.target.studentCampus.value
    const selectedCampusId = this.props.campuses.filter(campus => campus.name === campusName)[0].id || 1
    store.dispatch(postStudent({
      name: name,
      campusId: selectedCampusId,
      email: email,
      image: img
    }))
    evt.target.studentName.value = ''
  }
  render(){
    const {newStudent} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Add a New Student</label>
          <input
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Enter student name"
          value={this.props.newStudent}
          onChange={this.props.handleChangeInput}
          />
          <input
          className="form-control"
          type="text"
          name="studentEmail"
          placeholder="Enter student email"
          value={newStudent.email}
          />
          <input
          className="form-control"
          type="text"
          name="studentPic"
          placeholder="Enter student picture Url"
          value={newStudent.image}
          />
        <select name="studentCampus">
          {
            this.props.campuses.map(campus => (
              <option value={campus.name} key={campus.id}>{campus.name}</option>
            ))
          }
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Add</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {
    newStudent: state.newStudent,
    campuses: state.campuses
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleChangeInput(evt) {
      dispatch(addStudent(evt.target.value))
    }
  }
}

const NewStudentEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry))

export default NewStudentEntryContainer
