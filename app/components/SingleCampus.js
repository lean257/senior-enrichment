import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {removeCampus, updateCampus} from '../reducers/campuses'
import NewCampusEntry from './NewCampusEntry'

class SingleCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
    this.removeCampus = this.removeCampus.bind(this)
    this.doneEdit = this.doneEdit.bind(this)
    this.clickEdit = this.clickEdit.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
  }
  render() {
    if (this.state.isEditing) {
      return (
        <div className="list-group-item min-content user-item">
          <form className="media" onSubmit={this.doneEdit}>
            <div className="media-left media-middle icon-container">
              <button
                type="submit"
                className="clickable"
              >Done</button>
              <button
                type="submit"
                className="clickable"
                onClick={this.cancelEdit}
              >Cancel</button>
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
    const { campus } = this.props
    return (
      <div className="list-group-item min-content students-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <img className="media-object img-circle" src={campus.image} height="120" width="120"/>
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/campuses/${campus.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Grace Hopper">{campus.name}</span>
            </h4>
          </NavLink>
          <div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.removeCampus}
                value={campus.id}>
              <span className="glyphicon glyphicon-remove" /> X
            </button>
          </div>
          <div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.clickEdit}
                value={campus.id}>
              <span className="glyphicon glyphicon-remove" /> Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
  removeCampus (event) {
    const { campus, removeCampus } = this.props;
    event.stopPropagation()
    removeCampus(campus.id)
  }
  clickEdit(event) {
    this.setState({isEditing: true})
  }
  doneEdit(event) {
    const {campus} = this.props
    const name = event.target.name.value
    const image = event.target.image.value
    const updatedCampus = {name, image}
    updateCampus(campus.id, campus)
  }
  cancelEdit(event) {
    this.setState({isEditing: false})
  }
}

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = {removeCampus, updateCampus};

export default withRouter(connect(mapState, mapDispatch)(SingleCampus))
