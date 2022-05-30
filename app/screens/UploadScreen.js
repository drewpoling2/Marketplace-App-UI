import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          ></Progress.Bar>
        ) : (
          <LottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});
export default UploadScreen;