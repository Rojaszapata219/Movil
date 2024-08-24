import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.style1}></View>
      <View style={styles.style3}>
        <View style={styles.style2}></View>
        <View style={styles.style2}></View>
        <View style={styles.style2}></View>
        <View style={styles.style2}></View>
        <View style={styles.style2}></View>
        <View style={styles.style2}></View>
      </View>
      <View style={styles.style4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "top",
    height: "100%",
    width: "100%",
    marginTop: 40,
    gap: 50
  },

  style1: {
    height: "20%",
    width: "90%",
    backgroundColor: "green",
    borderRadius: 20

  },

  style2: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 20
  },

  style3: {
  
    flexDirection: 'row',
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },

  style4: {
    height: "40%",
    width: "90%",
    backgroundColor: "yellow",
    borderRadius: 20
  }


});
