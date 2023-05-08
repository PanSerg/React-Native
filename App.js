import { View } from 'react-native';
import Registration from './Screens/RegistrationScreen/RegistrationScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  const routing = useRoute(true);

  const [fontsLoaded] = useFonts();

  return (
    <View>
      <NavigationContainer>{routing}</NavigationContainer>;
    </View>
  ); 
};

