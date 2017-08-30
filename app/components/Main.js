import React, {Component} from 'react'
import AllCampuses from './AllCampuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'
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
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={AllCampuses} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={SingleStudent} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route path="/new-student" component={NewStudentEntry} />
              <Route path="/new-campus" component={NewCampusEntry} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
