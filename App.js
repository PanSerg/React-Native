import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './Screens/LoginScreen/LoginScreen';

export default function App() {
  // conct[isReady, setIsReady] = useState(false);
  const routing = useRoute(false);

  const [fontsLoaded] = useFonts();
  console.log('hello');
  return (
    <View>
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