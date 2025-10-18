import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const cores = {
  fundo: '#EDC4B3',
  verdeEscuro: '#545947',
  branco: '#FFF',
  placeholder: '#8a8a8a',
};

export default function CadastroImovel({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const lidarCliqueCadastrar = () => {
    console.log('Dados para Cadastrar:');
    console.log('Título:', titulo);
    console.log('Descrição:', descricao);
    console.log('Valor:', valor);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.formularioContainer}>
        {/* Campo Título */}
        <Text style={estilos.label}>Título:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: Casa com 3 quartos"
          placeholderTextColor={cores.placeholder}
          value={titulo}
          onChangeText={setTitulo}
        />

        {/* Campo Descrição */}
        <Text style={estilos.label}>Descrição:</Text>
        <TextInput
          style={[estilos.input, estilos.inputDescricao]}
          placeholder="Ex: Casa espaçosa, com piscina e..."
          placeholderTextColor={cores.placeholder}
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
        />

        {/* Campo Valor */}
        <Text style={estilos.label}>Valor R$:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 550.000,00"
          placeholderTextColor={cores.placeholder}
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />

        {/* Botão Cadastrar */}
        <TouchableOpacity 
          style={estilos.botaoCadastrar}
          onPress={lidarCliqueCadastrar}
        >
          <Text style={estilos.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  formularioContainer: {
    flex: 1,
    padding: '5%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: cores.branco,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputDescricao: {
    height: 120,
    textAlignVertical: 'top',
  },
  botaoCadastrar: {
    backgroundColor: cores.verdeEscuro,
    padding: 18,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  textoBotao: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
