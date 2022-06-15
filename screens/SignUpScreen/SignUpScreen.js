import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SocialSignInButton from "../../components/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";


const SignUpcreen = () => {
    const [fullname, setfullname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState('');
    const [passwordRepeate, setpasswordRepeate] = useState('')

    const navigation = useNavigation();
   
    //onSignUpPress
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };
    //register Press
    const onRegisterPress = () => {
        console.warn("onRegisterPress");
    }
    //onPrivicyPress
    const onPrivicyPress = () =>{
        console.warn("onPrivicyPress");
    }
    const onTermOfUsePressed = () =>{
        console.warn("onTermOfUsePressed");
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Đăng ký tài khoản</Text>

                <CustomInput
                    placeholder="Họ và tên "
                    value={fullname}
                    setValue={setfullname}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setemail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setpassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Confirm Password"
                    value={passwordRepeate}
                    setValue={setpasswordRepeate}
                    secureTextEntry
                />

                <CustomButton
                    onPress={onRegisterPress}
                    text="Đăng ký tài khoản"
                    type="PRIMARY"
                />
                <Text style={styles.text}>Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                    <Text style={styles.link} onPress = {onTermOfUsePressed}> Điều khoản</Text>,
                    <Text style={styles.link} onPress = {onPrivicyPress}>Chính sách</Text> của chúng tôi.</Text>
                
                <SocialSignInButton/>
                <CustomButton
                    onPress={onSignInPress}
                    text="Bạn đã có tài khoản? Đăng nhập"
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
        borderWidth: 0
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        // textTransform:'uppercase'
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: "#FDB075"
    }
});

export default SignUpcreen;
