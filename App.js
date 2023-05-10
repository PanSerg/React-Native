import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
// import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { useRoute } from './Router';

export default function App() {
  const routing = useRoute(true);
  const [fontsLoaded] = useFonts();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>{routing}</NavigationContainer>;
    </View>
  ); 
};


//   return (
//     <View style={styles.container}>
//       {/* <RegistrationScreen /> */}
//       <LoginScreen />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });