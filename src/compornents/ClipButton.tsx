import React from "react";
import { StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Style = {
  container: ViewStyle;
};

type Props = {
  onPress: () => void;
  enabled: boolean;
};

//style
const styles = StyleSheet.create<Style>({
  container: {
    padding: 5,
  },
});

const ClipButton = ({ onPress, enabled }: Props) => {
  const name = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};

export default ClipButton;
