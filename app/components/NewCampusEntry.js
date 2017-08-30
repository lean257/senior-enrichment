import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCampus, postCampus} from '../reducers/campuses'
import {addCampus} from '../reducers/NewCampusEntry'
import { withRouter } from 'react-router'
import store from '../store'

class NewCampusEntry extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {newCampus} = this.props
    return(
      <form onSubmit={this.props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Add a New Campus</label>
          <input
          className="form-control"
          type="text"
          name="campusName"
          placeholder="Enter campus name"
          value={newCampus}
          onChange={this.props.handleChangeInput}
          />
          <input
          className="form-control"
          type="text"
          name="campusPic"
          placeholder="Enter campus picture Url"
          value={newCampus.image}
          />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Add</button>
      </div>
      </form>
    )
  }

}

const mapState = ({ campuses, newCampus }) => ({ campuses, newCampus })
const mapDispatch = (dispatch) => ({
  handleChangeInput(evt) {
    dispatch(addCampus(evt.target.value))
  },
  handleSubmit(evt) {
    evt.preventDefault()
    const campusName = evt.target.campusName.value
    const campusImg = evt.target.campusPic.value || 'https://cdn2.iconfinder.com/data/icons/bubble-education-icons-1/360/Ruler_and_Pencil-512.png'
    store.dispatch(postCampus({
      name: campusName,
      image: campusImg
    }))
    store.dispatch(addCampus(''))
    // this.props.history.push(`/campuses/${this.props.newCampus.id}`)
  }
})
export default withRouter(connect(mapState, mapDispatch)(NewCampusEntry))
