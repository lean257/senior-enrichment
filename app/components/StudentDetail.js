import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import SingleStudent from './SingleStudent'
import {withRouter} from 'react-router'

class StudentDetail extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { student, campuses } = this.props;
    if (!student) return <div />  // the user id is invalid or data isn't loaded yet
    return (
      <div className="container">
        <SingleStudent student={student} />
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title large-font">Billing</h2>
          </div>
        </div>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students, campuses }, ownProps) => {
  const paramId = Number(ownProps.match.params.studentId)
  return {
    student: _.find(students, student => student.id === paramId),
    campuses
  }
}

const mapDispatch = { };

export default withRouter(connect(mapState, mapDispatch)(StudentDetail))
