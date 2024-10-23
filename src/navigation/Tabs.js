import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieScreen from "../screens/MovieScreen";
import TvScreen from "../screens/TvScreen";
import SearchScreen from "../screens/SearchScreen";
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movie" component={MovieScreen} />
    <Tab.Screen name="Tv!" component={TvScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Tab.Navigator>
);
export default Tabs;
