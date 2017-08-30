import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {removeCampus} from '../reducers/campuses'

function AllCampuses (props) {
  const campuses = props.campuses

  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses && campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <NavLink className="thumbnail" to={`/campuses/${campus.id}`}>
                <img src={ campus.image } height="92" width="92"/>
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </NavLink>
            </div>
          ))
        }
      </div>
      <button><NavLink to={`/new-campus`}>Add Campus</NavLink></button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses
  }
}
const mapDispatch = { removeCampus };

const AllCampusesContainer = withRouter(connect(mapStateToProps, mapDispatch)(AllCampuses))
export default AllCampusesContainer
