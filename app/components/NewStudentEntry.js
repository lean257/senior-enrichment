import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addStudent} from '../reducers/students'
import {withRouter} from 'react-router'
import store from '../store'

class NewStudentEntry extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const email = evt.target.email.value
    const image = evt.target.picture.value || 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/90.png'
    const campusName = evt.target.campus.value
    const campusId = this.props.campuses.filter(campus => campus.name === campusName)[0].id || 1
    this.props.addStudent({name, email, image, campusId})
    evt.target.name.value = ''
    evt.target.email.value = ''
    evt.target.campus.value = ''
  }
  render(){
    const {SelectedCampus} = this.props
    return (
      <div className="list-group-item min-content user-item">
        <form className="media" onSubmit={this.handleSubmit}>
          <div className="media-left media-middle icon-container">
            <button
              type="submit"
              className="glyphicon glyphicon-plus clickable"
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <input
                name="name"
                type="text"
                required
                placeholder="Jean Doe"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="email"
                type="email"
                placeholder="email@website.com"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
              <input
                name="picture"
                type="picture"
                placeholder="pic URL"
                className="form-like"
              />
            </h5>
            <h5>
              <select name="campus">
                {
                  SelectedCampus ? <option>{SelectedCampus.name}</option> :
                  this.props.campuses.map(campus => (
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
}

const mapState = ({ students, campuses }) => ({ students, campuses })

const mapDispatch = {addStudent}

const NewStudentEntryContainer = withRouter(connect(mapState, mapDispatch)(NewStudentEntry))

export default NewStudentEntryContainer
