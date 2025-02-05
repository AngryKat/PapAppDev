import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type Props = {
  children: ReactNode;
  onHide: () => void;
  visible: boolean;
};

export function AppBottomSheet({ children, onHide, visible }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      onHide();
      return;
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    []
  );

  useEffect(() => {
    if (!bottomSheetRef.current) return;
    if (visible) bottomSheetRef.current.present();
    else bottomSheetRef.current.close();
  }, [bottomSheetRef, visible]);
  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      style={{ borderRadius: 40, overflow: "hidden" }}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
    >
      <BottomSheetView style={styles.container}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -24,
  },
});
