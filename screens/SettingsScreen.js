import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';

const SettingsScreen = () => {
  // Estados para las configuraciones
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(true);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  // Función para alternar la vibración

  const toggleVibration = () => {
    setIsVibrationEnabled(previousState => !previousState);
    // Haptic Feedback cuando el usuario cambia la configuración
    HapticFeedback.trigger('selection');
  };

  // Función para alternar las notificaciones
  
  const toggleNotifications = () => {
    setIsNotificationEnabled(previousState => !previousState);
    // Haptic Feedback cuando el usuario cambia la configuración
    HapticFeedback.trigger('selection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Configuración de vibración */}
      <View style={styles.setting}>
        <Text>Vibración</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isVibrationEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleVibration}
          value={isVibrationEnabled}
        />
      </View>

      {/* Configuración de notificaciones */}
      <View style={styles.setting}>
        <Text>Notificaciones</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isNotificationEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={isNotificationEnabled}
        />
      </View>

      {/* Botón para guardar la configuración (puedes agregar lógica aquí para guardar los cambios) */}
      <Button title="Guardar Configuración" onPress={() => alert('Configuración guardada')} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SettingsScreen;
