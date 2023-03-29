import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './Screens/RegistrationScreen/RegistrationScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <Routes>
        <Route path="registration" element={<Registration />} />

        <Text>Open App to start on your app!</Text>
        <StatusBar style="auto" />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
