import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 0,
      // @ts-ignore: fixed is available on web.
      position: Platform.OS === "web" ? "fixed" : "absolute",
      maxWidth: "100%",
      zIndex: 999999,
      elevation: 999999,
      alignSelf: 'center',
      ...(Platform.OS === "web" ? { overflow: "hidden", userSelect: 'none' } : null),
    },
    message: {
      color: "#333",
    },
});