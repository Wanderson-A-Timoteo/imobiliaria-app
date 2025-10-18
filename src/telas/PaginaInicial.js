import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { bannerPrincipal } from '../dados/imoveis';
import CardImovel from '../componentes/CardImovel';

export default function PaginaInicial({ navigation, listaImoveis }) {
  
  const lidarCliqueCadastrar = () => {
    navigation.navigate('CadastroImovel'); 
  };

  const lidarCliqueCard = (imovel) => {
    navigation.navigate('PaginaImovel', { imovelDados: imovel }); 
  };

  const renderizarItem = ({ item }) => (
    <CardImovel 
      imovel={item} 
      onPress={() => lidarCliqueCard(item)} 
    />
  );

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.containerCabecalho}>
        <Image source={bannerPrincipal} style={estilos.banner} />
        <Text style={estilos.tituloCabecalho}>3 Cores Imobiliária</Text>
      </View>

      <TouchableOpacity 
        style={estilos.botaoCadastro} 
        onPress={lidarCliqueCadastrar}
      >
        <Text style={estilos.textoBotao}>Cadastrar novo imóvel</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloLista}>Nossos Imóveis:</Text>

      <FlatList
        data={listaImoveis}
        renderItem={renderizarItem}
        keyExtractor={item => item.id}
        style={estilos.lista}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDC4B3',
  },
  containerCabecalho: {
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  tituloCabecalho: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#545947',
    marginVertical: 15,
  },
  botaoCadastro: {
    backgroundColor: '#545947',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: '5%',
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tituloLista: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '5%',
    marginBottom: 10,
  },
  lista: {
    width: '100%',
  },
});
