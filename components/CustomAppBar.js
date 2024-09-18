import React from "react";
import { Appbar } from "react-native-paper";

export default function CustomAppBar({ back, navigation, route }) {
  return (
    <Appbar.Header
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {route.name === "Second" && (
        <Appbar.Action
          icon="arrow-left"
          color="black"
          style={{ marginRight: 15 }}
          onPress={() => navigation.goBack()}
        />
      )}

      <Appbar.Content title="Nav Demo" style={{ flex: 1 }} />

      {route.name === "Home" && (
        <Appbar.Action
          icon="arrow-right"
          color="black"
          style={{ marginLeft: "auto" }}
          onPress={() => navigation.navigate("Second")}
        />
      )}
    </Appbar.Header>
  );
}
