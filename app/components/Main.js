import React, {Component} from 'react'
import AllCampuses from './AllCampuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import StudentsList from './StudentsList'
import NewStudentEntry from './NewStudentEntry'
import NavBar from './NavBar'
import store from '../store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {fetchCampuses, fetchStudents} from '../actions'

export default class Main extends Component {

  componentDidMount () {
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={AllCampuses} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={SingleStudent} />
              <Route path="/campuses/:campusId" component={StudentsList} />
              <Route path="/new-student" component={NewStudentEntry} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
