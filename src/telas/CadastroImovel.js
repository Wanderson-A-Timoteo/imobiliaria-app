import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

const cores = {
  fundo: '#EDC4B3',
  verdeEscuro: '#545947',
  branco: '#FFF',
  placeholder: '#8a8a8a',
  azulClaro: '#A5DDD6',
};

export default function CadastroImovel({ navigation, setListaImoveis }) { 
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [imagemUri, setImagemUri] = useState(null);

  const selecionarImagem = async () => {
    const permissaoResultado = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissaoResultado.granted === false) {
      Alert.alert("Permissão Necessária", "É preciso permitir o acesso à galeria!");
      return;
    }

    const pickerResultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResultado.canceled) {
      setImagemUri(pickerResultado.assets[0].uri);
    }
  };

  const lidarCliqueCadastrar = () => {
    if (!titulo || !descricao || !valor || !imagemUri) {
      Alert.alert("Erro", "Por favor, preencha todos os campos e selecione uma imagem.");
      return;
    }

    const novoImovel = {
      id: String(Date.now()),
      imagem: { uri: imagemUri },
      titulo: titulo,
      descricao: descricao,
      valor: valor, 
    };

    setListaImoveis(listaAnterior => [novoImovel, ...listaAnterior]);

    setTitulo('');
    setDescricao('');
    setValor('');
    setImagemUri(null);

    navigation.goBack(); 
  };

  return (
    <SafeAreaView style={estilos.container}> 
      <ScrollView> 
        <View style={estilos.formularioContainer}>
          <Text style={estilos.label}>Título:</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: Casa com 3 quartos"
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={estilos.label}>Descrição:</Text>
          <TextInput
            style={[estilos.input, estilos.inputDescricao]}
            placeholder="Ex: Casa espaçosa, com piscina e..."
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={4}
          />

          <Text style={estilos.label}>Valor R$:</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 550.000,00"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />

          <TouchableOpacity 
            style={estilos.botaoImagem}
            onPress={selecionarImagem}
          >
            <Text style={estilos.textoBotaoImagem}>Selecionar Imagem</Text>
          </TouchableOpacity>

          {imagemUri && (
            <Image source={{ uri: imagemUri }} style={estilos.imagemPreview} />
          )}

          <TouchableOpacity 
            style={estilos.botaoCadastrar}
            onPress={lidarCliqueCadastrar}
          >
            <Text style={estilos.textoBotaoCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  botaoImagem: {
    backgroundColor: cores.azulClaro,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoImagem: {
    color: cores.verdeEscuro, 
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagemPreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 15,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  botaoCadastrar: {
    backgroundColor: cores.verdeEscuro,
    padding: 18,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  textoBotaoCadastrar: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
