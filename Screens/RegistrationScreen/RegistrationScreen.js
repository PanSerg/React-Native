import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const initialState = {
    login: "",
    email: "",
    password: "",
};

export default function RegistrationScreen({navigation}) {
    const [dimensions, setDimensions] = useState(
      Dimensions.get("window").width);
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isHidePasw, setIsHidePasw] = useState(true);
    const [nameUser, setNameUser] = useState(initialState);

    useEffect(() => {
      const onChange = () => {
        const width = Dimensions.get("window").width;
        setDimensions(width);
      };

        Dimensions.addEventListener("change", onChange);
    }, []);
  

    const KeyboardHide = () => {
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
    <TouchableWithoutFeedback onPress={KeyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/Photo BG.png")}
          style={styles.img}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.from,
                paddingBottom: isOnFocus ? 32 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.image}></View>
              <Text style={{ ...styles.title }}>Зарегистрироваться</Text>
              <TextInput
                value={nameUser.login}
                placeholder="Логин"
                onFocus={() => setIsOnFocus(true)}
                style={styles.input}
                onChangeText={(value) =>
                  setNameUser((prev) => ({ ...prev, login: value }))
                }
              />
              <TextInput
                value={nameUser.email}
                placeholder="Электронный адрес"
                onFocus={() => setIsOnFocus(true)}
                style={styles.input}
                onChangeText={(value) =>
                  setNameUser((prev) => ({ ...prev, email: value }))
                }
              />
              <View>
                <TextInput
                  value={nameUser.password}
                  placeholder="Пароль"
                  secureTextEntry={isHidePasw}
                  onFocus={() => setIsOnFocus(true)}
                  style={styles.input}
                  onChangeText={(value) =>
                    setNameUser((prev) => ({ ...prev, password: value }))
                  }
                />
                <TouchableOpacity
                  onPress={ToggleSecure}
                  style={styles.showPassword}
                >
                  {isHidePasw ? (
                    <Feather name="eye" size={24} color="#c0c0c0" />
                  ) : (
                    <Feather name="eye-off" size={24} color="#c0c0c0" />
                  )}
                </TouchableOpacity>
              </View>
              {!isOnFocus && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={onSubmit}
                >
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
              )}
              {!isOnFocus && (
                <Text
                  style={styles.linkReg}
                  onPress={() => navigation.navigate("Login")}
                >
                  Уже есть аккаунт?
                  <Text style={styles.link}>Войти</Text>
                </Text>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  from: {
    position: "relative",
    backgroundColor: "#fff",
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  image: {
    top: -50,
    left: 125,
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  input: {
    position: "relative",
    width: 343,
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontFamily: "QR",
  },
  title: {
    color: "#000",
    fontSize: 30,
    marginBottom: 32,
    marginTop: 92,
    fontFamily: "QR",
  },
  showPassword: {
    position: "absolute",
    top: 15,
    left: 290,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 50,
    marginTop: 43,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    color: "#fff",
    fontFamily: "QR",
  },
  linkReg: {
    fontFamily: "QR",
    color: "#1B4371",
  },
  link: {
    color: "#0E7DFD",
  },
});
