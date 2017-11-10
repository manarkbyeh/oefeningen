import React, { Component } from 'react';



class ProjectItem extends Component {

  render() {

    return (
      <li className="ProjectItem">
     
        {this.props.project.title}
      </li>
    );
  }
}

export default ProjectItem;