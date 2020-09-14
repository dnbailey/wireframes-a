import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Box from "../components/Box";

export default () => {
  return (
    <Box color="#f00">
      <Text>
        Open up App.js to start working on your
        app!
      </Text>
      <StatusBar style="auto" />
    </Box>
  );
};
