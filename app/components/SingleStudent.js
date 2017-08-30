import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import React, {Component} from 'react'
import {withRouter} from 'react-router'

class SingleStudent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const students = this.props.students
    const studentId = Number(this.props.match.params.studentId)
    const filteredStudent = students.filter(student => student.id === studentId)[0]

    return (
      <div>
        <img className="media-object" src={filteredStudent.image} alt="image" height="92" width="92"/> <br />
        { filteredStudent.name } <br />
      { filteredStudent.email }
    </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state inside SingleStudent', state)
  return {
    students: state.students
  }
}
const mapDispatch = null;

const SingleStudentContainer = withRouter(connect(mapStateToProps, mapDispatch)(SingleStudent))
export default SingleStudentContainer
