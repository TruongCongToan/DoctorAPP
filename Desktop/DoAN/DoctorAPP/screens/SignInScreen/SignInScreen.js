import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from "react-native";
import Logo from "../../assets/image/health-care.jpg";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  //sign in press
  const onSignInPressed = () => {
    console.warn("sign in");
  };
  //forgot password press
  const onForgotPassPressed = () => {
    console.warn("forgot password ?");
  };
  //onSignInWithGoogle
  const onSignInWithGoogle = () => {
    console.warn("onSignInWithGoogle");
  };
  //onSignInWithFacebook
  const onSignInWithFacebook = () => {
    console.warn("onSignInWithFacebook");
  };
  //onSignUpPress
  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  };
  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setusername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setpassword}
          secureTextEntry
        />

        <CustomButton
          onPress={onSignInPressed}
          text="Đăng nhập"
          type="PRIMARY"
        />
        <CustomButton
          onPress={onForgotPassPressed}
          text="Quên mật khẩu?"
          type="TERTIARY"
        />
        <CustomButton
          onPress={onSignInWithGoogle}
          text="Đăng nhập bằng Google"
          type="PRIMARY"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={onSignInWithFacebook}
          text="Đăng nhập bằng Facebook"
          type="PRIMARY"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
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
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    borderRadius: 10,
  },
});

export default SignInScreen;
