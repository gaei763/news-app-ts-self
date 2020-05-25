import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ViewStyle, FlatList } from "react-native";
import axios from "axios";
import Constants from "expo-constants";
//compornents
import { ListItem } from "../compornents/ListItem";
import { Loading } from "../compornents/Loading";
//types
import { StackNavigationProp } from "@react-navigation/stack";
import { Article } from "../types/Article";
import { RouteNames, RootStackParamList } from "../types/Navigation";

type Style = {
  container: ViewStyle;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, RouteNames.Home>;
};

//style
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

//定数
const URL: string = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

export const HomeScreen = ({ navigation }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      console.log(response);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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
      {loading && <Loading />}
    </SafeAreaView>
  );
};
