import { Platform, ToastAndroid, Alert } from "react-native";

const showMessage = (message: string, type: "success" | "danger") => {
  if (Platform.OS === "android") {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  } else {
    Alert.alert(type === "success" ? "Success!" : "Failed!", message);
  }
};

const showError = (message: string) => {
  showMessage(message, "danger");
};

export { showError };
