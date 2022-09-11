import {Numbercomment,SetJob , Numberlike ,Addimg ,AddJob ,Adduser ,CheckLike ,Checkcomment ,CheckFollow ,Delete} from "./variabale"


export  const Setjob = (payload) => {
  return {
    type: SetJob,
    payload,
  };
};
export  const Addjob = (payload) => {
    return {
      type: AddJob,
      payload,
    };
  };
  export  const Addcommnet = (payload) => {
    return {
      type: AddJob,
      payload,
    };
  };
export  const Checklike = (payload) => {
    return {
      type: CheckLike,
      payload,
    };
  };
export  const Checkfollow = (payload) => {
  return {
    type: CheckFollow,
    payload,
  };
  };
export const Deletejob = (payload) => {
    return {
      type: Delete,
      payload,
    };
};
export const CheckComment = (payload) => {
  return {
    type: Checkcomment,
    payload,
  };
};
export const AddUser = (payload) => {
  return {
    type: Adduser,
    payload,
  };
};
export const AddImg = (payload) => {
  return {
    type: Addimg,
    payload,
  };
};
export const NumberLike = (payload) => {
  return {
    type: Numberlike,
    payload,
  };
};
export const NumberComment = (payload) => {
  return {
    type: Numbercomment,
    payload,
  };
};