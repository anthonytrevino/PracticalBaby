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
  if(action.type === "graco") {
    return {
      ...state,
      isBrandSelected : true ,
      brandSelected : action.brandSelected
    }
  }else if(action.type === "evenflo") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected
  }
}else if(action.type === "cosco") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected
  }
}else if(action.type === "chicco") {
    return {
      ...state,
      isColorSelected : true,
      colorSelected : action.brandSelected
  }
}else if(action.type === "nopreferencebrand") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected
  }
}else if(action.type === "red") {
    return {
      ...state,
      isColorSelected : true,
      colorSelected : action.colorSelected
    }
  }else if(action.type === "blue") {
    return {
      ...state,
      isColorSelected : true,
      colorSelected : action.colorSelected
    }
  }else if(action.type === "pink") {
    return {
      ...state,
      isColorSelected : true,
      colorSelected : action.colorSelected
    }
  }else if(action.type === "black") {
    return {
      ...state,
      isColorSelected : true,
      colorSelected : action.colorSelected
    }
  }else if(action.type === "nopreferencecolor") {
    return {
      ...state,
      isColorSelected : true,
      colorSelected : action.colorSelected
    }
  }else if(action.type === "convertible") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType
    }
  }else if(action.type === "infant") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType
    }
  }else if(action.type === "child") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType
    }
  }else if(action.type === "3in1") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType
    }
  }else if(action.type === "nopreferencecarseat") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType
    }
  }else if(action.type === "0-19") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight
    }
  }else if(action.type === "20-29") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight
    }
  }else if(action.type === "30-39") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight
    }
  }else if(action.type === "40-49") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight
    }
  }else if(action.type === "nopreferencechildweight") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight
    }
  }

  else {
    return(state)
  }
}

export default reducer;
