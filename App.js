import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert,Image } from "react-native";
import ViewBoxesWithColorAndText from "./components/square";
import FormSquare from "./components/square";
import { ModalPortal } from 'react-native-modals';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FormSquare bgColor="blue" label="Square 1" />
      <FormSquare bgColor="red" label="Square 2" />
      <FormSquare bgColor="green" label="Square 3" /> */}
      {/* <Button
        title="Press me"
        onPress={() => Alert.alert('Hello')}
      /> */}
      <>
        <StackNavigator/>
        <ModalPortal />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});
