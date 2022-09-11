import {Numbercomment,SetJob,Addcommnet , Numberlike ,Addimg ,AddJob ,Adduser ,CheckLike ,Checkcomment ,CheckFollow ,Delete} from "./variabale"

export default Reduce = (state, action) => {
  let newSate='';
    switch (action.type) {
      case SetJob:{
        return newSate={
          ...state,
          job : action.payload
        }
      }
      case AddJob:{
        return newSate={
          ...state,
          jobs : [...state.jobs,action.payload]
        }
      }
      case Addcommnet:{
        return newSate={
          ...state,
          job:'',
          jobs : [...state.jobs,action.payload]
        }
      }
      case Delete:{
        return newSate={
          ...state,
          job : action.payload
        }
      }
      case CheckLike:{
        return newSate={
          ...state,
          checklike : action.payload
        }
      }
      case CheckFollow:{
        return newSate={
          ...state,
          checkFollow : action.payload
        }
      }
      case Adduser:{
        return newSate={
          ...state,
          author : action.payload
        }
      }
      case Addimg:{
        return newSate={
          ...state,
          addImg : action.payload
        }
      }
      case Numberlike:{
        return newSate={
          ...state,
          numberlike : action.payload
        }
      }
      case Numbercomment:{
        return newSate={
          ...state,
          numbercomment : action.payload
        }
      }
      case Checkcomment:{
        return newSate={
          ...state,
          Checkcomment : action.payload
        }
      }
    }
    return newSate
  };