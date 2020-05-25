import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  Text,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { ListItem } from "../compornents/ListItem";
//types
import { State } from "../types/State";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteNames, RootStackParamList } from "../types/Navigation";

type Style = {
  container: ViewStyle;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, RouteNames.Clip>;
};

//style
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export const ClipScreen = ({ navigation }: Props) => {
  const clips = useSelector((state: State) => state.user.clips);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              navigation.navigate(RouteNames.Article, { article: item })
            }
          />
        )}
        keyExtractor={(item, index: number) => index.toString()}
      />
    </SafeAreaView>
  );
};
