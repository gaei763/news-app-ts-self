import React from "react";
import { StyleSheet, View, TextInput, ViewStyle } from "react-native";
import { Article } from "../types/Article";

type Style = {
  container: ViewStyle;
  input: ViewStyle;
};

type Props = {
  article: Article;
};

//style
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    margin: 5,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "rgba(200,200,200,0.2)",
  },
});
const InputArea = ({ article }: Props) => {
  return (
    <View>
      <TextInput
        defaultValue={article.memo}
        placeholder="クリップしたニュースにメモを入力出来ます"
        onChangeText={(value) => {
          article.memo = value;
        }}
        style={styles.input}
      />
    </View>
  );
};

export default InputArea;
