import React from 'react';
import {connect} from "react-redux";
import {
  addPhotoThunk,
  getImageId,
  getPicturesThunk,
  onVisibilityFalse,
  setCurrentPage,
  setIdImage
} from "../../redux/pictures-reduser";
import Gallery from "./Gallery";
import Image from "./Image";
import NewImage from "../Pagination/newImage/newImage";


class ContainerGallery extends React.Component {
  componentDidMount() {
    this.props.getPicturesThunk(this.props.currentPage, this.props.pageSize);

  }
   onId = (id) => {
     this.props.getImageId(id)
     console.log(id)
   }
   onPageChange = (page) => {
    this.props.setCurrentPage(page)

     this.props.getPicturesThunk(page, this.props.pageSize)
   }

  render() {
    return (
      <div>
        {this.props.visibility === true
          ?  <Image imageId={this.props.imageId}
                    visibility={this.props.visibility}
                    onVisibilityFalse={this.props.onVisibilityFalse}

                    image={this.props.picturesPage}
                    setIdImage={this.props.setIdImage}

          onId={this.onId}/>
          :  null}
        <Gallery picturesPage={this.props.picturesPage}
                 getImageId={this.props.getImageId}
                 onPageChange={this.onPageChange}
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage}
                 addPhoto={this.props.addPhotoThunk}
                  onId={this.onId}/>

      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    picturesPage: state.picturesPage.image,
    imageId: state.picturesPage.imageId,
    visibility: state.picturesPage.visibility,
    pageSize: state.picturesPage.pageSize,
    currentPage: state.picturesPage.currentPage,


  }
}
export default connect(mapStateToProps,
  {getPicturesThunk, getImageId,
    onVisibilityFalse, setCurrentPage, setIdImage, addPhotoThunk})(ContainerGallery)


