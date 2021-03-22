import React, {useEffect} from "react";
import './Image.css'
import next from './../../image/next.png'
import back from './../../image/back.png'
import close from '../../image/clouse.png'
import {Button} from "@material-ui/core";

let Image = (props) => {

  // useEffect(() => {
  //   localStorage.setItem("saveImage", JSON.stringify(props.saveIma))
  // },[props.saveIma]);
  //
  // useEffect( () => {
  //   let a = localStorage.getItem("saveImage");
  //   let save = JSON.parse(a);
  //   props.saveImage(save)
  // },[props.saveIma]);


  let a = props.image.length
  let imageNext = (e) => {
    for (let i = 0; i < props.image.length; i++) {
      if (props.image[a - 1].id === e) {
        props.setIdImage(props.image[0])
      } else if (props.image[i].id === e) {
        props.setIdImage(props.image[i + 1])
      }
    }
  };

  let imageBack = (e) => {
    for (let i = 0; i < props.image.length; i++) {
      if (props.image[0].id === e) {
        props.setIdImage(props.image[a - 1])
      } else if (props.image[i].id === e) {
        props.setIdImage(props.image[i - 1])
      }
    }
  };

  let saveImage = (e) => {
    for (let i = 0; i < props.image.length; i++) {
      if (props.image[i].id === e) {
        props.saveImage(props.image[i])
      }
    }
  };

  return (
    <div className='image'>
      <div className="modal-body">

        <div>
          {<img className='imagePhoto' src={props.imageId.download_url}
          />}
          <img src={close} className='close' onClick={props.onVisibilityFalse}/>
          <img src={back} className='buttunBack'
               onClick={() => {imageBack(props.imageId.id)}}
          />

          <img src={next} className='buttunNext'
               onClick={() => {imageNext(props.imageId.id)}}
          />
          <Button variant="contained"
            color="primary" size="small"
            className={'save'}
            onClick={() => {saveImage(props.imageId.id)}}
          >
            Save
          </Button>
          <p className='number'> {} -{props.image.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Image;
