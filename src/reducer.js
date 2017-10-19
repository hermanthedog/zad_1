import {GET_PRODUCTS } from './productActions';

import uuid from 'uuid';

const initialState = [];

export const reducer = (state = initialState, action)=>{
  switch(action.type){
    case 'GET_PRODUCTS':
      return action.data.data.product;
    default:
      return state;
  }
}



export default reducer;