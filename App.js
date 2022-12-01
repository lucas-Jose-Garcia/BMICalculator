import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import logoImg from './assets/bmi.png';
import { StyleSheet, Image, Text, View, TextInput, Button, Pressable  } from 'react-native';




export default function App() {
  const [Altura, setAltura] = useState("")
  const [Peso, setPeso] = useState("")
  const [Bmi, setBmi] = useState("")

  function calcular(Altura, Peso) {
    if (Altura != "" && Peso != "") {
      setBmi(Peso /((Altura / 100)*(Altura / 100)))
      console.log(`BMI: ${Bmi}`)
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>IMC</Text> */}
      <Image 
      style={styles.logoImage}
      source={logoImg} 
      />
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        placeholder="Altura em cm"
        keyboardType='numeric'
        value={Altura}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        placeholder="Peso em kg"
        keyboardType='numeric'
        value={Peso}
      />
    

    <Pressable  
      style={[styles.button, styles.blue]}
      onPress={() => calcular(Altura, Peso)}
    >
      <Text style={styles.text}>CALCULAR</Text>
    </Pressable>

    <Text style={styles.result}>{Bmi.toFixed(2)}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%'
  },
  title: {
    paddingTop: 70,
    fontSize: 30,
    paddingBottom: 10,
    color: '#2296F3'
  },
  logoImage: {
    marginTop: 70,
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '100%',
    margin: 15,
    borderWidth: 1,
    padding: 10
  },
  button: {
    height: 50,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blue: {
    backgroundColor: '#2296F3',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  result: {
    fontSize: 35,
    fontWeight: 'bold',
  }
  }
);
