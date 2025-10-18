import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PaginaInicial({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text>Página Inicial</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
