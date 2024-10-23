import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieScreen from "../screens/MovieScreen";
import TvScreen from "../screens/TvScreen";
import SearchScreen from "../screens/SearchScreen";
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Tv!"
    screenOptions={{
      tabBarLabelStyle: {
        backgroundColor: "red",
      },
    }}
  >
    <Tab.Screen
      name="Movie"
      component={MovieScreen}
      options={{
        tabBarLabelStyle: {
          backgroundColor: "purple",
        },
      }}
    />
    <Tab.Screen name="Tv!" component={TvScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Tab.Navigator>
);
export default Tabs;

/*
utk navgation kita ada kenal dengan initialROuteName itu artinya 
yg akan dituju atau dirender misalkan diatas awal pasti defaultnya adalah movie 
tapu dngn kita set ditab.navigator bisa ke Tv ,jadi pd start awal dia akan ke screen Tv 

-options adalah sama jika kita mau utak atik di tab,navigator utk smua tab misalkan tabBarLabelStyle 
aetinya tulisan/label  yg ada pada tabBar stylenya kita atur 
utk atur berlaku pada smua sceeen set di tabNavigatior
screenOptions={{
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 100 },
    tabBarStyle: { backgroundColor: 'powderblue' },
  }}
>
utk berlaku hanya pada scteen ya saja maka dgn =option set di tab,screen-nya 



*/
