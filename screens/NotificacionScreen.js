import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';

const NotificationScreen = () => {

    useEffect(() => {
        // Haptic feedback al cargar la pantalla
        HapticFeedback.trigger('notification');
      }, []);

  return (
    <View style={styles.container}>
      <Text>No hay notificaciones aún.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default NotificationScreen;