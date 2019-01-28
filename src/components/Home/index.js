import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import defaultTaskIcon from './task.png'

class Home extends Component {
  render() {
    const {projects} = this.props
    const projectsList = projects.length ? (
      projects.map(project => {
        return (
          <div className="col s12 m4" key={project.id}>
            <div className="project card">
              <div className="card-image">
                <img className="center" src={project.img ? project.img : defaultTaskIcon}/>
                <span className="card-title">{project.title}</span>
              </div>
              <div className="card-content green lighten-4">
                <span>{project.body}</span>
              </div>
              <div className="card-action green lighten-3 center">
                <Link to={'/project/' + project.id}>Open Project</Link>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Projects to show</div>
    );

    return (
      <div className="home">
        <h4 className="center">HOME</h4>
        <div className="container">
          <div className="row">
            {projectsList}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps)(Home)
