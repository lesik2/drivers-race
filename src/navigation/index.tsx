import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from './routes';
import { DriversListScreen } from '@src/screens/DriversListScreen';
import { DriversInfoScreen } from '@src/screens/DriverInfoScreen';
import { DriversRaceListScreen } from '@src/screens/DriverRaceListScreen';
import { createStaticNavigation } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  initialRouteName: ScreenNames.DRIVERS_LIST,
  screens: {
    [ScreenNames.DRIVERS_LIST]: {
      screen: DriversListScreen,
      options: {
        title: 'Drivers',
      },
    },
    [ScreenNames.DRIVER_INFO]: {
      screen: DriversInfoScreen,
      options: {
        title: 'Driver Info',
      },
    },
    [ScreenNames.DRIVER_RACE_LIST]: {
      screen: DriversRaceListScreen,
      options: {
        title: 'Driver Race',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export const AppNavigation = () => {
  return <Navigation />;
};
