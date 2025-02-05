import React from "react";
import {
  Modal,
  ModalProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import colors from "@/config/colors";

type Props = ModalProps & { contentStyle?: StyleProp<ViewStyle> };

export function AppModal({ children, contentStyle, ...modalProps }: Props) {
  return (
    <Modal {...modalProps} animationType="fade" transparent>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, contentStyle]}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  today: {
    color: colors.primary,
  },
  modalView: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
});
