import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";

import Logo from "../../assets/image/healthcare.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SocialSignInButton from "../../components/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import axios from "axios";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  var url = "http://localhost:9000/api/user/login";

  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState({});

  const navigation = useNavigation();

  //sign in press
  const onSignInPressed = () => {
    if (validateBlank()) {
      // console.warn(validateEmail(email));
      if (validateEmail(email)) {
        let errorsCheck = {};
        errorsCheck["email"] = "";
        seterror(errorsCheck);
        try {
          handleLogin(url, loginData);
        } catch (error) {
          Toast.show({
            type: "error",
            text1: "Thông báo",
            text2: "Thông tin email và mật khẩu không chính xác !",
          });
        }
      }
    }
  };
  //add new data

  useEffect(() => {
    setloginData({
      email: email,
      password: password,
    });
  }, [email, password]);



  const [data, setdata] = useState("");
  const handleLogin = async (url, data = {}) => {
    // axios
    // .get("http://10.0.2.2:9000/api/user/trang@gmail.com")
    // .then((response) => {
    //     console.warn(response);
    // });

    fetch("https://mywebsite.com/endpoint/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue",
      }),
    });
  };

  //forgot password press
  const onForgotPassPressed = () => {
    navigation.navigate("ForgotPassWord");
  };

  //onSignUpPress
  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  //validate email
  const validateEmail = (email) => {
    let errors = {};
    var check = true;
    var result = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (result === null) {
      errors["email"] = " Email không đúng định dạng! VD: xxx@yyy.com";
      check = false;
      seterror(errors);
    } else {
      errors["email"] = "";
      seterror(errors);
    }
    return check;
  };
  //check not input
  const validateBlank = () => {
    let errors = {};
    let formIsValid = true;
    if (!email) {
      formIsValid = false;
      errors["email"] = "Không được bỏ trống email !";
    } else if (!password) {
      formIsValid = false;
      errors["password"] = "Không được bỏ trống mật khẩu !";
    }
    seterror(errors);
    return formIsValid;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput placeholder="Email" value={email} setValue={setemail} />

        <Text style={styles.error}> {error["email"]}</Text>

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setpassword}
          secureTextEntry
        />
        <Text style={styles.error}> {error["password"]}</Text>
        <CustomButton
          onPress={onSignInPressed}
          text="Đăng nhập"
          type="PRIMARY"
        />
        <SocialSignInButton />
        <CustomButton
          onPress={onForgotPassPressed}
          text="Quên mật khẩu?"
          type="TERTIARY"
        />

        <CustomButton
          onPress={onSignUpPress}
          text="Bạn chưa có tài khoản? Tạo mới ngay"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "100%",
    maxWidth: 300,
    maxHeight: 200,
    borderRadius: 10,
    borderWidth: 0,
  },
  error: {
    fontSize: 12,
    color: "red",
    marginLeft: 15,
    marginBottom: 10,
    width: "100%",
  },
});

export default SignInScreen;
