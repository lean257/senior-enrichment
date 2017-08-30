import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {removeCampus} from '../reducers/campuses'

class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.removeCampus = this.removeCampus.bind(this)
  }
  render() {
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
        </div>
      </div>
    );
  }
  removeCampus (event) {
    const { removeCampus } = this.props;
    event.stopPropagation();
    removeCampus(Number(event.target.getAttribute('value')))
  }
}

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = {removeCampus};

const SingleStudentContainer = withRouter(connect(mapState, mapDispatch)(SingleStudent))
export default SingleStudentContainer
