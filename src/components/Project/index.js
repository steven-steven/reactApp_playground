import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { Redirect } from 'react-router'

class Project extends Component {
  
  render() {
    const {entries} = this.props
    if (entries === undefined){ 
      return <Redirect to='/notFound' />
    }
    const entryList = entries.length ? (
      entries.map(entry => {
        return (
          <div className="col s12" key={entry.id}>
            <div className="project card">
              <div className="card-content">
                <span className="right">{entry.date}</span>
                <span className="card-title red-text">{entry.title}</span>
                <div class="divider"></div>
                <div class="section">
                  
                  <p>{entry.body}</p>
                </div>
              </div>

            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Project Entries</div>
    );

    return (
      <div className="container">
        <div className="row">
          {entryList}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps)=>{
  const id = ownProps.match.params.project_id;
  return {
    entries: state.entries[id]
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addEntry: (id, content) => dispatch({
      type:'ADD_ENTRY',
      id,
      content
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Project)
