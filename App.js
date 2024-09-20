import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [number, setNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numGuess === number) {
      Alert.alert(`Adivinaste en ${attempts + 1} intentos!`, 'Querés jugar otra vez?', [
        {
          text: 'Yes',
          onPress: () => {
            setNumber(generateRandomNumber());
            setGuess('');
            setAttempts(0);
          },
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ]);
    } else if (numGuess < number) {
      Alert.alert('Intentá con un número más alto');
    } else {
      Alert.alert('Intentá con un número más bajo');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adiviná el número</Text>
      <Text style={styles.instructions}>Ingresa un número entre 1 y 100:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={text => setGuess(text)}
      />
      <Button title="¿Adiviné?" onPress={handleGuess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    width: '80%',
    paddingHorizontal: 8,
  },
});
