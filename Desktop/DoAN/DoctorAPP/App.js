import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInScreen from './screens/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    
          <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFC'

  },
});
