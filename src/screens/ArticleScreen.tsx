import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  Text,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from "../compornents/ClipButton";
import { Loading } from "../compornents/Loading";
import InputArea from "../compornents/InputArea";
//types
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RouteNames, RootStackParamList } from "../types/Navigation";
import { State } from "../types/State";
import { Article } from "../types/Article";
type Style = {
  container: ViewStyle;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, RouteNames.Article>;
  route: RouteProp<RootStackParamList, RouteNames.Article>;
};

//style
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const ArticleScreen = ({ navigation, route }: Props) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  const clips = useSelector((state: State) => state.user.clips);

  //関数
  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip(article));
    } else {
      dispatch(addClip(article));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <InputArea article={article} />
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  );
};

export default ArticleScreen;
