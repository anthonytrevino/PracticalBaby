const initialState = {
  isBrandSelected : false ,
  brandSelected :  ' ',
  isCarSeatTypeSelected : false ,
  carSeatType : ' ' ,
  isColorSelected : false ,
  colorSelected : ' ' ,
  isMaxChildWeightSelected : false ,
  maxChildWeight : ' ' ,
  step: 0
}

const reducer = (state = initialState, action) => {
  if(action.type === "graco") {
    return {
      ...state,
      isBrandSelected : true ,
      brandSelected : action.brandSelected,
      step : action.step
    }
  }else if(action.type === "evenflo") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected,
      step : action.step
  }
}else if(action.type === "cosco") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected,
      step : action.step
  }
}else if(action.type === "chicco") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected,
      step : action.step
  }
}else if(action.type === "nopreferencebrand") {
    return {
      ...state,
      isBrandSelected : true,
      brandSelected : action.brandSelected,
      step : action.step
  }
}else if(action.type === "convertible") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType,
      step : action.step
    }
  }else if(action.type === "infant") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType,
      step : action.step
    }
  }else if(action.type === "child") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType,
      step : action.step
    }
  }else if(action.type === "3in1") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType,
      step : action.step
    }
  }else if(action.type === "nopreferencecarseat") {
    return {
      ...state,
      isCarSeatTypeSelected : true,
      carSeatType : action.carSeatType,
      step : action.step
    }
  }else if(action.type === "red") {
      return {
        ...state,
        isColorSelected : true,
        colorSelected : action.colorSelected,
        step : action.step
      }
    }else if(action.type === "blue") {
      return {
        ...state,
        isColorSelected : true,
        colorSelected : action.colorSelected,
        step : action.step
      }
    }else if(action.type === "pink") {
      return {
        ...state,
        isColorSelected : true,
        colorSelected : action.colorSelected,
        step : action.step
      }
    }else if(action.type === "black") {
      return {
        ...state,
        isColorSelected : true,
        colorSelected : action.colorSelected,
        step : action.step
      }
    }else if(action.type === "nopreferencecolor") {
      return {
        ...state,
        isColorSelected : true,
        colorSelected : action.colorSelected,
        step : action.step
      }
    }else if(action.type === "0-19") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight,
      step : action.step
    }
  }else if(action.type === "20-29") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight,
      step : action.step
    }
  }else if(action.type === "30-39") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight,
      step : action.step
    }
  }else if(action.type === "40-49") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight,
      step : action.step
    }
  }else if(action.type === "nopreferencechildweight") {
    return {
      ...state,
      isMaxChildWeightSelected : true,
      maxChildWeight : action.maxChildWeight,
      step : action.step
    }
  }

  else {
    return(state)
  }
}

export default reducer;
