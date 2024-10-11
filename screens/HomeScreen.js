import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';

const HomeScreen = ({ navigation }) => {

    const HomeScreen = ({ navigation }) => {

        const handleButtonPress = () => {
          HapticFeedback.trigger('selection'); // Haptic feedback en el botón
          navigation.navigate('Notifications');
        };
      

  return (
    <View style={styles.container}>
      <Text>Bienvenido a la App de Domótica</Text>
      <Button
        title="Ver Notificaciones"
        onPress={handleButtonPress}
      />
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });