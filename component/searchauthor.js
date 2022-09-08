import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default function Searchauthor() {
  return (
    <View style={style.authors}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Text>quang hiep</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  textcheckmail: {
    marginLeft: 32,
    color: "red",
  },
  authors: {
    marginTop: 32,
    width: 360,
    backgroundColor: "red",
    marginLeft: 16,
    height: 160,
  },
});
