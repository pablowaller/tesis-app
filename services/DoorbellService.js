import React, { useEffect, useState } from 'react';
import { triggerVibration } from '../utils/hapticFeedback';

// Simulación de evento IoT o push
export const listenToDoorbell = () => {
  // Aquí puedes integrar WebSocket, API o cualquier conexión IoT
  const eventReceived = true; // Simula que el timbre se presionó
  if (eventReceived) {
    triggerVibration(); // Activa la vibración cuando recibes la señal del timbre
  }
};


const DoorbellScreen = () => {
  const [doorbellPressed, setDoorbellPressed] = useState(false);

  // Simulador de recepción de la señal del timbre
  const onDoorbellPress = () => {
    setDoorbellPressed(true);
    Alert.alert("Timbre presionado", "Alguien está tocando el timbre");
    triggerVibration(); // Activa la vibración
  };

  // Este useEffect podría escuchar eventos de un servidor o API
  useEffect(() => {
    if (doorbellPressed) {
      // Aquí puedes ejecutar cualquier lógica adicional, como actualizar una pantalla
    }
  }, [doorbellPressed]);

  return (
    <View>
      <Text>Simulador de Timbre</Text>
      <Button title="Tocar Timbre" onPress={onDoorbellPress} />
    </View>
  );
};

export default DoorbellScreen;

export const captureImage = async () => {
  try {
    // URL del ESP32-CAM o cualquier otro dispositivo Arduino que capture la imagen
    const response = await fetch('http://esp32-cam.local/capture'); // Supongamos que expone una API simple
    const imageBlob = await response.blob();

    // Convertir la imagen a ArrayBuffer (binario) para Amazon Rekognition
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result); // Devuelve el ArrayBuffer
      reader.onerror = reject;
      reader.readAsArrayBuffer(imageBlob);
    });

  } catch (error) {
    console.error('Error al capturar la imagen desde el módulo Arduino:', error);
    return null;
  }
};

/*
// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { triggerVibration } from '../utils/hapticFeedback'; // Importa la función de vibración

const HomeScreen = () => {
  const [doorbellPressed, setDoorbellPressed] = useState(false);

  // Simula recibir la señal del timbre
  const onDoorbellPress = () => {
    setDoorbellPressed(true);
    Alert.alert("Timbre presionado", "Alguien está tocando el timbre");
    triggerVibration(); // Activa la vibración
  };

  // useEffect podría ser usado para escuchar notificaciones push o eventos IoT en tiempo real
  useEffect(() => {
    if (doorbellPressed) {
      // Aquí puedes ejecutar lógica adicional si alguien tocó el timbre
    }
  }, [doorbellPressed]);

  return (
    <View>
      <Text>Simulador de Timbre</Text>
      <Button title="Tocar Timbre" onPress={onDoorbellPress} />
    </View>
  );
};

export default HomeScreen;
*/