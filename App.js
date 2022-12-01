import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, Pressable  } from 'react-native';


export default function App() {
  const [Altura, setAltura] = useState("")
  const [Peso, setPeso] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC</Text>
      <Image source={requice('./assets/bmi.png')} />
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
    
    <Button 
      style={[styles.button, styles.blue]}
      onPress={() => console.log(`Altura: ${Altura} | Peso: ${Peso}`)}
      title="Calcular"
    />

    <Pressable  
      style={styles.button}
      
      onPress={() => console.log(`Altura: ${Altura} | Peso: ${Peso}`)}
    >
      <Text style={styles.text}>CALCULAR</Text>
    </Pressable>

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
    marginTop: 15,
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
  }
  }
);
