import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type PostRouteList = {
  PostScreen: any;
};

export type HomeNavigatorProp<T extends keyof PostRouteList> =
  StackNavigationProp<PostRouteList, T>;

export type HomeNavProps<T extends keyof PostRouteList> = StackScreenProps<
  PostRouteList,
  T
>;
