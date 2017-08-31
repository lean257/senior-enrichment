import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addCampus} from '../reducers/campuses'
import {withRouter} from 'react-router'
import store from '../store'

class NewCampusEntry extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const image = evt.target.picture.value || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hMiLX5coE1NDUpnmS2sILZj-h0qgFTM4A9w-47ibusjWoU_q'
    this.props.addCampus({name, image})
    evt.target.name.value = ''
    evt.target.picture.value = ''
  }
  render(){
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
                placeholder="Grace Hopper"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="picture"
                type="picture"
                placeholder="Campus Image"
                className="form-like"
              />
            </h5>
            </div>
          </form>
        </div>
    )
  }
}

const mapState = ({ students, campuses }) => ({ students, campuses })

const mapDispatch = {addCampus}

export default withRouter(connect(mapState, mapDispatch)(NewCampusEntry))
