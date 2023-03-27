import { useState, useEffect } from "react";
import {
    StyleSheet, Text,
    View, TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Button } from "react-native";

const initialState = {
    login: "",
    email: "",
    password: "",
};

export default function Registration() {
    const [display, setDisplay] = useState(Display.get("window").width);
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [name, setName] = useState(initialState);
    const [password, setPassword] = useState(true);

    useEffect(() => {
        const onChange = () => {
            const width = Display.get("window").width;

            setDisplay(width);
        }

        Display.addEventListener("change", onChange);
    }, []);

    const Keyboard = () => {
        setIsOnFocus(false);
        Keyboard.dismiss();
    };

    const onSubmit = () => {
        
    }

    return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <Button title={"Login"} style={styles.input} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
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
