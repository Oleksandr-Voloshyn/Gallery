import React, {Component} from 'react';
import './Gallery.css'
import Pagination from "../Pagination/ConAds";

class Gallery extends Component {

state = {
  count: this.props.currentPage + 1,
  newCount: this.props.currentPage
}

  onBltr = (e) =>{
this.props.onId(e)
  }

  updateCount = () => {
  this.setState({count: this.state.count + 1})
    this.props.addPhoto(this.state.count, 12)
    console.log(this.state.count, this.props.currentPage)
  }
//
componentDidMount() {
this.setState({newCount:this.props.currentPage})
  console.log(this.state.count)
}
componentDidUpdate(prevProps, prevState, snapshot) {
  if (this.props.currentPage !== this.state.count){
    this.setState({count: this.props.currentPage })
  }
}


//   viePhoto = ( ) => {
//   debugger;
//     this.setState((state, props) => ({count: state.count + this.props.currentPage}))
//     console.log("count" + this.state.count)
//     this.props.addPhoto(this.state.count, 12)
//     console.log(this.state.count + "count")
//
//     console.log(this.props.currentPage + "currentPage")
// }
  render() {

    return (
      <div>
        <div className='center'>
          <Pagination onPageChange={this.props.onPageChange}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
          />
          <div className='gallery'>
            {this.props.picturesPage.map(i => {
                return <div className='backGraund'>
                <img className='pictures' src={i.download_url}
                     onClick={ () => {this.onBltr(i.id)}}
                />
                <p>Author: {i.author}</p>
                <p><a href={i.download_url}> Doulounds</a></p>
                </div>
              })
            }
          </div>
        </div>
        <div className='addPhoto'>
          <button  onClick= {this.updateCount}> Add photo </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
