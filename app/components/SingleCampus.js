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
      isEditing: false,
      name: this.props.campus.name,
      image: this.props.campus.image
    }
    this.removeCampus = this.removeCampus.bind(this)
    this.doneEdit = this.doneEdit.bind(this)
    this.clickEdit = this.clickEdit.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.updateCampusName = this.updateCampusName.bind(this)
    this.updateCampusImage = this.updateCampusImage.bind(this)
  }

  render() {
    const { campus } = this.props
    if (this.state.isEditing) {
      return (
        <div className="list-group-item min-content user-item">
          <form className="media">
            <div className="media-left media-middle icon-container">
              <button
                type="submit"
                onClick={this.doneEdit}
              >Save</button>
              <button
                type="cancel"
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
                  onChange={this.updateCampusName}
                />
              </h4>
              <h5 className="tucked">
                <input
                  name="picture"
                  type="text"
                  className="form-like"
                  value={this.state.image}
                  onChange={this.updateCampusImage}
                />
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
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>
          <div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.clickEdit}
                value={campus.id}>
              <span className="glyphicon glyphicon-edit" />
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
  updateCampusName(event) {
    const name = event.target.value
    return this.setState({name})
  }
  updateCampusImage(event) {
    const image = event.target.value
    return this.setState({image})
  }
  doneEdit(event) {
    const {campus, updateCampus} = this.props
    event.preventDefault()
    updateCampus(campus.id, {
      name: this.state.name,
      image: this.state.image
    })
    this.setState({isEditing: false})
  }
  cancelEdit(event) {
    return this.setState({isEditing: false})
  }
}

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = {removeCampus, updateCampus};

export default withRouter(connect(mapState, mapDispatch)(SingleCampus))
