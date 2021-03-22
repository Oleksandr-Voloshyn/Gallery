import React, {Component} from 'react';
import {connect} from "react-redux";
import './../Gallery/Gallery.css'

class ContainerSaveImage extends Component {
  render() {
    return (
      <div className='center'>
      <div className='gallery'>
        {this.props.saveIma.map(i => {
          return <div className='backGraund'>
          <img className='pictures'  src={i.download_url}/>
          </div>
          })}
      </div>
      </div>
    );
  }
}

let mapstateToProps = (state) => {
  return {
    saveIma: state.picturesPage.saveIma,
  }
}

export default connect(mapstateToProps )(ContainerSaveImage);
