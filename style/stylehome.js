import * as React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export const stylehome = StyleSheet.create({
  projectuse: {
    marginTop: 20,
    marginLeft: 10,
  },
  textname: {
    top: 8,
    position: "absolute",
    fontSize: 16,
    left: 70,
  },
  textstatus: {
    top: 32,
    position: "absolute",
    fontSize: 10,
    left: 70,
  },
  addporst: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 2,
    backgroundColor: "#ccc",
    margin: 20,
  },
  textstatus_Block: {
    marginLeft: 10,
  },
  textadd: {
    fontSize: 16,
  },
  view: {
    backgroundColor: "#ccc",
    width: 360,
    height: 360,
    margin: 14,
    borderRadius: 8,
  },
  handleblock: {
    bottom: 10,
    position: "absolute",
    flexWrap: "nowrap",
    width: 360,
    display: "flex",
  },
  handlelike: {
    bottom: 10,
    position: "absolute",
    borderRadius: 4,
    width: 80,
    heightL: 28,
    paddingLeft: 10,
    marginLeft: 10,
  },
  handlecomment: {
    bottom: 10,
    position: "absolute",
    borderRadius: 4,
    width: 80,
    heightL: 28,
    paddingLeft: 10,
    marginLeft: 140,
  },
  handleshare: {
    bottom: 10,
    position: "absolute",
    borderRadius: 4,
    width: 80,
    heightL: 28,
    paddingLeft: 10,
    marginLeft: 270,
  },
  // buttonblock: {
  //   marginLeft: 20,
  //   position: "absolute",
  // },
});
