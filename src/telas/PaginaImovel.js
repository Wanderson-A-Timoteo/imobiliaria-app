import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const cores = {
  fundo: '#EDC4B3',
  verdeEscuro: '#545947',
  branco: '#FFF',
  vermelho: '#AC3131', 
};

export default function PaginaImovel({ route, navigation, setListaImoveis }) { 
  const { imovelDados } = route.params;

  const lidarCliqueExcluir = () => {
    Alert.alert(
      "Confirmar Exclusão",
      `Tem certeza que deseja excluir o imóvel "${imovelDados.titulo}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Excluir", 
          onPress: () => {
            setListaImoveis(listaAnterior => 
              listaAnterior.filter(imovel => imovel.id !== imovelDados.id) 
            );
            navigation.goBack(); 
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <Image source={imovelDados.imagem} style={estilos.imagemImovel} />
        <View style={estilos.conteudoContainer}>
          <Text style={estilos.titulo}>{imovelDados.titulo}</Text>
          <Text style={estilos.valor}>{imovelDados.valor}</Text>
          <Text style={estilos.descricao}>{imovelDados.descricao}</Text>
          <TouchableOpacity 
            style={estilos.botaoExcluir}
            onPress={lidarCliqueExcluir}
          >
            <Text style={estilos.textoBotao}>Excluir imóvel</Text>
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
  imagemImovel: {
    width: '100%',
    height: 250, 
    resizeMode: 'cover',
  },
  conteudoContainer: {
    padding: '5%',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.verdeEscuro, 
    marginBottom: 20,
  },
  descricao: {
    fontSize: 17,
    color: '#000',
    lineHeight: 24, 
    marginBottom: 30,
  },
  botaoExcluir: {
    backgroundColor: cores.vermelho, 
    padding: 18,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: cores.branco, 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
