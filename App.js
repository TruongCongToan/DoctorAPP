import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForgotPassWord from './screens/ForgotPassWord/ForgotPassWord';
import NewPassWord from './screens/NewPassWord/NewPassWord';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import Tabs from './components/Tabs';
import Drawer from './components/Drawer/Drawer';

import 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();



  return (
    <>
      <SafeAreaView style={styles.root}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }} style={styles.root} >
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassWord" component={ForgotPassWord} />
            <Stack.Screen name="NewPassWord" component={NewPassWord} />
            <Stack.Screen name="HomeTab" component={Tabs} />
            <Stack.Screen name="HomeDrawer" component={Drawer} />
          </Stack.Navigator>
       
        </NavigationContainer>
        {/* <Drawer/> */}
      </SafeAreaView>
      <Toast />
    </>
  );


}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'

  },
});
