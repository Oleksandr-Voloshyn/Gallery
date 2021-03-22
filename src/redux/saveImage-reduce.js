import {ApiIdImage, picturesApi} from "../api/api";

const SET_PICTURES = 'SET_PICTURES';
const SET_ID_IMAGE = 'SET_ID_IMAGE';
const ON_VISIBILITY_FALSE = 'ON_VISIBILITY_FALSE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ADD_PHOTO = 'ADD_PHOTO';
const SAVE_IMAGE = 'SAVE_IMAGE';

let initialState = {
  image : [],
  imageId: [],
  saveIma: [],
  visibility: false,
  currentPage: 1,
  pageSize: 12
}


const picturesReduser = (state = initialState, action) => {
  switch (action.type){
    case SET_PICTURES:
      return {
        ...state,
        image: action.image
      };

    case SET_ID_IMAGE:
      return {
        ...state,
        imageId: action.imageId,
        visibility: true
      };

    case ON_VISIBILITY_FALSE:
      return {
        ...state,
        visibility: false
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      };

    case ADD_PHOTO:
      return {
        ...state,
        image: [...state.image, ...action.page,],
      };

    case SAVE_IMAGE:
      return {
        ...state,
         //saveIma: [...state.saveIma, state.imageId]
        saveIma: [...state.saveIma.filter(i => i.id !== action.save.id), action.save]
      }
    default:
      return state;
  }

}


export const setPictures = (image) => ({type: SET_PICTURES, image});
export const setIdImage = (imageId) => ({type: SET_ID_IMAGE, imageId});
export const onVisibilityFalse = () => ({type: ON_VISIBILITY_FALSE});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page });
export const addPhoto = (page) => ({type: ADD_PHOTO, page});
export const saveImage = (save) => ({type: SAVE_IMAGE, save});


export const getPicturesThunk = (currentPage, perPage) => {
  return async (dispatch) => {
   let response = await picturesApi(currentPage, perPage)
        console.log(response.data.id)
        dispatch (setPictures(response.data));
  }
};

export const getImageId = (id) => async (dispatch) => {
  let response = await  ApiIdImage(id)
        dispatch(setIdImage(response.data))
        console.log(setIdImage(response.data))
};

export const addPhotoThunk = (currentPage, perPage) => {
  return async (dispatch) => {
   let response = await  picturesApi(currentPage, perPage)
        console.log(response.data)
        dispatch (addPhoto(response.data))
  }
};

export default picturesReduser;
