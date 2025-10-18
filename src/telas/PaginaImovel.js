import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PaginaImovel({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text>Página de Detalhes do Imóvel</Text>
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
