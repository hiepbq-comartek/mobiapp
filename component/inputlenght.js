import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
function Inputlengh({ iplengh }) {
  let inputnumber = [];
  for (let i = 1; i < Math.ceil(iplengh.length / 40); i++) {
    inputnumber.push(i);
  }
  return (
    <>
      {inputnumber.map((i) => (
        <TextInput />
      ))}
    </>
  );
}
