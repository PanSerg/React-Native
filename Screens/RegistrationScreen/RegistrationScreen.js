import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const initialState = {
    login: "",
    email: "",
    password: "",
};

export default function Registration({navigation}) {
    const [dimensions, setDimensions] = useState(
      dimensions.get("window").width
    );
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isHidePasw, setIsHidePasw] = useState(true);
    const [nameUser, setNameUser] = useState(initialState);

    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get("window").width;

            setDimensions(width);
        }

        Dimensions.addEventListener("change", onChange);
    }, []);

    const Keyboard = () => {
        setIsOnFocus(false);
        Keyboard.dismiss();
    };

    const onSubmit = () => {
      console.log(nameUser);
      setNameUser(initialState);
    };
  
    const ToggleSecure = () => {
      setIsHidePasw((prev) => !prev);
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <img>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.from,
                  paddingBottom: isOnFocus ? 32 : 100,
                  width: dimensions,
                }}
              >
                <h2>Зарегистрироваться</h2>
                <TextInput
                  value={nameUser.login}
                  onChangeText={(value) =>
                    setNameUser((prev) => ({ ...prev, login: value }))
                  }
                  placeholder="Логин"
                  onFocus={() => setIsOnFocus(true)}
                  style={styles.input}
                />
                <TextInput
                  value={nameUser.email}
                  onChangeText={(value) =>
                    setNameUser((prev) => ({ ...prev, email: value }))
                  }
                  placeholder="Электронный адрес"
                  onFocus={() => setIsOnFocus(true)}
                  style={styles.input}
                />
                <TextInput
                  value={nameUser.password}
                  onChangeText={(value) =>
                    setNameUser((prev) => ({ ...prev, password: value }))
                  }
                  placeholder="Пароль"
                  secureTextEntry={isHidePasw}
                  onFocus={() => setIsOnFocus(true)}
                  style={styles.input}
                />
                <TouchableOpasity onPress={ToggleSecure}>
                  {isHidePasw ? (
                    <Feather name="eye" size={24} color="#c0c0c0" />
                  ) : (
                    <Feather name="eye-off" size={24} color="#c0c0c0" />
                  )}
                </TouchableOpasity>
                {!isOnFocus && (
                  <TouchableOpasity
                    activeOpasity={0.8}
                    style={styles.button}
                    onPress={onSubmit}
                  >
                    Зарегистрироваться
                  </TouchableOpasity>
                )}
                {!isOnFocus && (
                  <Text
                    style={styles.linkReg}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Уже есть аккаунт?
                    <Text>Войти</Text>
                  </Text>
                )}
              </View>
            </KeyboardAvoidingView>
          </img>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
