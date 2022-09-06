import React, { useReduce } from "react";
import { TextInput } from "react-native";
const init = {
  job: "",
  jobs: [],
};
const Delete = "Delete_job";
const AddJob = "Add_job";
const PostJob = "Post_job";
const Setjob = (payload) => {
  return {
    type: AddJob,
    payload,
  };
};
const Postjob = (payload) => {
  return {
    type: AddJob,
    payload,
  };
};
const Deletejob = (payload) => {
  return {
    type: AddJob,
    payload,
  };
};
const reduce = (state, action) => {
  switch (action.type) {
    case AddJob:
  }
};
function Reducer() {
  const [state, dispath] = useReduce(reduce, init);
  const { job, jobs } = state;
  return (
    <>
      <TextInput value={job} onChange={() => dispath(Setjob(e.target.value))} />
      <Text>{jobs}</Text>
    </>
  );
}
