import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {removeCampus} from '../reducers/campuses'
import NewCampusEntry from './NewCampusEntry'
import SingleCampus from './SingleCampus'

class AllCampuses extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {campuses} = this.props
    return (
      <div className="container">
        <div className="user-query">
          <NewCampusEntry />
        </div>
        <br />
        <br />
        <div className="user-list">
          {
            campuses.map(campus => {
              return (<SingleCampus campus={campus} key={campus.id} />)
            })
          }
        </div>
      </div>
    )
  }
}

const mapState = ({campuses}) => ({campuses})
const mapDispatch = { removeCampus };

const AllCampusesContainer = withRouter(connect(mapState, mapDispatch)(AllCampuses))
export default AllCampusesContainer
