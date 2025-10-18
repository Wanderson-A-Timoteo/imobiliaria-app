import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CadastroImovel({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text>Tela de Cadastro de Imóvel</Text>
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
