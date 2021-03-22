import React from "react";
import './Image.css'
import close from '../../image/clouse.png'

let Image = (props) => {

   let imageNext = (e) => {
   for (let i = 0; i < props.image.length; i++){
     if (props.image[i].id === e){
       props.setIdImage(props.image[i+1])
       console.log(props.imageId)
      }
    }
   }
  let imageBack = (e) => {
   for (let i = 0; i < props.image.length; i++){
     if (props.image[i].id === e){
       console.log(props.setIdImage(props.image[i-1]))
     }
    }
   }

  return (
    <div className='image' >
      <div className="modal-body">

        <div >
          {<img className='imagePhoto' src={props.imageId.download_url}
          />}
          <img src={close} className='close' onClick={props.onVisibilityFalse} />
             <button className='buttunBack' onClick={() => {imageBack(props.imageId.id)}}>Назад</button>
          <button className='buttunNext' onClick={() => {imageNext(props.imageId.id)}}> Вперед </button>
        </div>
      </div>
    </div>
  )
}

export default Image;
