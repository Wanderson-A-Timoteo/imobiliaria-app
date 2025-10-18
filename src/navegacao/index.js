import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from '../telas/PaginaInicial';
import CadastroImovel from '../telas/CadastroImovel';
import PaginaImovel from '../telas/PaginaImovel';

const Stack = createStackNavigator();

const cores = {
  fundo: '#EDC4B3',
  verdeEscuro: '#545947',
  branco: '#FFF',
};

export default function NavegacaoPrincipal() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="PaginaInicial"
        screenOptions={{
          headerStyle: {
            backgroundColor: cores.fundo,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: cores.verdeEscuro,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="PaginaInicial" 
          component={PaginaInicial} 
          options={{ title: '3 Cores Imobiliária' }} 
        />
        <Stack.Screen 
          name="CadastroImovel" 
          component={CadastroImovel} 
          options={{ title: 'Cadastrar Novo Imóvel' }} 
        />
        <Stack.Screen 
          name="PaginaImovel" 
          component={PaginaImovel} 
          options={{ title: 'Detalhes do Imóvel' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
