import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type HomeRouteList = {
  HomeScreen: any;
  SecondScreen: any;
};

export type T_HomeNavigationType = {
  navigate: (data?: any) => void;
};

export type HomeNavigatorProp<T extends keyof HomeRouteList> =
  StackNavigationProp<HomeRouteList, T>;

export type HomeNavProps<T extends keyof HomeRouteList> = StackScreenProps<
  HomeRouteList,
  T
>;
