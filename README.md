# react-native-guess-the-number

La presente es una aplicación de juego simple con React Native llamado "Guess the Number". En este juego, el usuario debe adivinar un número aleatorio generado por la aplicación.

### Paso 1: Configuración del Entorno de Desarrollo

1. **Instalar Node.js**: Asegúrate de tener instalado Node.js. Puedes descargarlo de [nodejs.org](https://nodejs.org/).
2. **Instalar Expo CLI**: Expo es una herramienta que simplifica el desarrollo de React Native. Ejecuta el siguiente comando para instalar Expo CLI globalmente:
   ```bash
   npm install -g expo-cli
   ```

### Paso 2: Crear una Nueva Aplicación con Expo

1. **Crear el Proyecto**:
   ```bash
   expo init GuessTheNumber
   cd GuessTheNumber
   ```

2. **Iniciar el Proyecto**:
   ```bash
   npx expo start
   ```
   Esto abrirá Expo Developer Tools en tu navegador. Puedes escanear el código QR con la aplicación Expo Go en tu teléfono para ver la aplicación en tu dispositivo.
  
  p/ ver cómo configurar para crear el sdk p/ Android:
  https://blog.expo.dev/the-new-expo-cli-f4250d8e3421

### Paso 3: Desarrollar el Juego

1. **Instalar Dependencias Necesarias**:
   ```bash
   npm install @react-native-picker/picker
   ```

2. **Modificar el Código en `App.js`**:

```jsx
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
      Alert.alert(`You guessed it in ${attempts + 1} attempts!`, 'Would you like to play again?', [
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
      Alert.alert('Try a higher number');
    } else {
      Alert.alert('Try a lower number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number</Text>
      <Text style={styles.instructions}>Enter a number between 1 and 100:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={text => setGuess(text)}
      />
      <Button title="Submit Guess" onPress={handleGuess} />
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
```

### Paso 4: Explicación del Código

1. **Importaciones y Estado Inicial**:
   - Importamos React y otros componentes necesarios.
   - Definimos los estados `guess`, `number` y `attempts` para manejar la entrada del usuario, el número aleatorio y la cantidad de intentos.

2. **Generación de Número Aleatorio**:
   - La función `generateRandomNumber` crea un número aleatorio entre 1 y 100.

3. **Manejo de Adivinanza**:
   - La función `handleGuess` verifica la adivinanza del usuario.
   - Si el usuario adivina correctamente, muestra una alerta y pregunta si quiere jugar de nuevo.
   - Si el número es menor o mayor, muestra una alerta correspondiente.

4. **Interfaz de Usuario**:
   - Mostramos un título, instrucciones y un `TextInput` para que el usuario ingrese su adivinanza.
   - Un `Button` para enviar la adivinanza.

### Paso 5: Probar la Aplicación

1. **Ejecutar la Aplicación**:
   - Usa Expo Go para probar la aplicación en tu dispositivo.
   - Asegúrate de que la funcionalidad de adivinanza y alertas funcione correctamente.

### Paso 6: Publicar la Aplicación

1. **Construir la Aplicación**:
   - Si estás listo para publicar tu aplicación, puedes usar Expo para construir un archivo APK o IPA.
   ```bash
   expo build:android
   expo build:ios
   ```

2. **Publicar en Tiendas de Aplicaciones**:
   - Sigue las instrucciones de Google Play Store o Apple App Store para publicar tu aplicación.
