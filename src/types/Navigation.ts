import { Article } from "./article";

export enum RouteNames {
  Home = "Home",
  Article = "Article",
  Clip = "Clip",
}

export type RootStackParamList = {
  [RouteNames.Home]: undefined;
  [RouteNames.Article]: { article: Article };
  [RouteNames.Clip]: undefined;
};
