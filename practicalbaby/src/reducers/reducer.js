const initialState = {
  isBrandSelected : false ,
  brandSelected : ' ',
  isColorSelected : false ,
  colorSelected : ' ' ,
  isCarSeatTypeSelected : false ,
  carSeatType : ' ' ,
  isMaxChildWeightSelected : false ,
  maxChildWeight : ' ' ,
}

const reducer = (state = initialState, action) => {
  if(action.type === "brandSelected") {
    return {
      ...state,
      isBrandSelected : true ,
      brandSelected : ' '
    }
  }
}

export default reducer;
