import React, {Component} from 'react'
import AllCampuses from './AllCampuses'
import Students from './Students'
import StudentDetail from './StudentDetail'
import CampusDetail from './CampusDetail'
import NewStudentEntry from './NewStudentEntry'
import NewCampusEntry from './NewCampusEntry'
import NavBar from './NavBar'
import store from '../store'
import {Route, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import {fetchStudents} from '../reducers/students'
import {fetchCampuses} from '../reducers/campuses'
import history from '../history'

export default class Main extends Component {

  componentDidMount () {
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

  render () {
    return (
      <Router history={history}>
        <div id="main" className="container-fluid">
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={AllCampuses} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={StudentDetail} />
              <Route path="/campuses/:campusId" component={CampusDetail} />
              <Route path="/new-student" component={NewStudentEntry} />
              <Route path="/new-campus" component={NewCampusEntry} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
