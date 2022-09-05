import React, { useState } from "react";
import { Button, ScrollView, View, TouchableOpacity, Text } from "react-native";

function Test() {
  const [headerShown, setHeaderShown] = useState(false);

  return (
    <>
      <Text>{headerShown ? "true" : "false"}</Text>
      <TouchableOpacity onPress={() => setHeaderShown(!headerShown)}>
        <Text>Đổi trạng thái</Text>
      </TouchableOpacity>
    </>
  );
}
export default Test;
