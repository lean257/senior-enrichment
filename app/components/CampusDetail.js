import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import SingleCampus from './SingleCampus'
import {withRouter} from 'react-router'
import SingleStudent from './SingleStudent'
import NewStudentEntry from './NewStudentEntry'

class CampusDetail extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { campus, studentsOfCampus } = this.props;
    if (!campus) return <div />
    return (
      <div className="container">
        <div className="user-query">
          <NewStudentEntry SelectedCampus={campus}/>
        </div>
        <br />
        <br />
        <div className="user-list">
        {
          studentsOfCampus.map(student => <SingleStudent student={student} key={student.id} />)
        }
        </div>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students, campuses }, ownProps) => {
  const paramId = Number(ownProps.match.params.campusId)
  return {
    campus: _.find(campuses, campus => campus.id === paramId),
    studentsOfCampus: _.filter(students, student => student.campusId === paramId),
    campuses
  }
}

const mapDispatch = { };

export default withRouter(connect(mapState, mapDispatch)(CampusDetail))
