import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardImovel({ imovel, onPress }) {
  
  const breveDescricao = imovel.descricao.substring(0, 70) + '...';

  return (
    <TouchableOpacity style={estilos.containerCard} onPress={onPress}>
      {/* ESPAÇO PARA IMAGEM  */}
      <Image source={imovel.imagem} style={estilos.imagemCard} />

      <View style={estilos.textoContainer}>
        {/* Título do anúncio  */}
        <Text style={estilos.tituloCard}>{imovel.titulo}</Text>
        
        {/* Breve descrição do anúncio  */}
        <Text style={estilos.descricaoCard}>{breveDescricao}</Text>
        
        {/* R$ Valor  */}
        <Text style={estilos.valorCard}>{imovel.valor}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    backgroundColor: '#A5DDD6',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: '5%',
    width: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imagemCard: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  descricaoCard: {
    fontSize: 14,
    color: '#545947',
    marginVertical: 4,
  },
  valorCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
