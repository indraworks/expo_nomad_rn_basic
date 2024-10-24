import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieScreen from "../screens/MovieScreen";
import TvScreen from "../screens/TvScreen";
import SearchScreen from "../screens/SearchScreen";
import { useColorScheme } from "react-native";
const Tab = createBottomTabNavigator();

const Tabs = ({ isDark }) => {
  // const isDark = useColorScheme() === "dark"; //gak dipakai props isDark dari App.js
  return (
    <Tab.Navigator
      initialRouteName="Tv!"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        //kita buat garis kotanya berwarna
        tabBarActiveTintColor: isDark ? "#ffa801" : "black",
        tabBarLabelPosition: "beside-icon",
        headerTitleAlign: "center",
        //mis mau warna utk titlenya header
        headerTitleStyle: {
          color: "purple",
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
      <Tab.Screen
        name="Tv!"
        component={TvScreen}
        options={{ tabBarBadge: 7 }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};
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
-pada screenOption :kita praktek gunakan tabBarLabelPosition utk taruh label tulisan sebelah dari icon pada tabnya 
  ppiluhab ada beside dan below icons 

-kita praktek tabBarBadge yaitu muncul pada icons sprti sbuah notifikasi,nnti ada merah bulat 
 pada icon nerupa angka kluar.kita coba pada options
 jadi biasanya dari api nnti kita bisa pakai utk notif dan lewat proops ke tabnavgatorkita dan dimunculkan pada icon tabs kita! 

taBBarActivetinColor ini adalah garis dari icon warna bisa berubah jika lagi kita select dan kita active disitu 
tabBarInActivetintColor jika gak active atau dtinggal maka warnanya nerubah sesii setting kita

kita juga bisa utk atur header tulisan yg atas posisi dietangah 
kita bisa juga buat headerRight yaitu sbuah functuon yg hasilkan element react
bisa nnti trender ini sudah pernah aplikasi di appfood delivery

dari kesimpulan screenOptions utk smua screen berlaku setpropertynya 
dan utk option hanya berlaku pada screen dia sndri .

kita gunakan usecolorSchema utk atur dark,mode nah kita gunakan ini 
kita gunaka screenOption pada tab.Navigator 
utk statusnya kita bisa gunaian cmd+shift a utk ubah status /toggle dgn emulator ?? ( check )
itu tak berlaku diandroid utk toglecolorScheme trpaksa buat button yg nnti supaya kalau kita tekan maka 
dia akan buat warna toggle /berubah2 saling opposite 


*/
