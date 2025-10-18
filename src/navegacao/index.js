import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import dadosIniciaisImoveis from '../dados/imoveis'; 

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
  const [imoveis, setImoveis] = useState(dadosIniciaisImoveis);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="PaginaInicial"
        screenOptions={{
          headerStyle: { backgroundColor: cores.fundo, elevation: 0, shadowOpacity: 0 },
          headerTintColor: cores.verdeEscuro,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="PaginaInicial" 
          options={{ title: '3 Cores Imobiliária', headerShown: false }} 
        >
          {props => (
            <PaginaInicial {...props} 
              listaImoveis={imoveis} 
            />
          )}
        </Stack.Screen>

        <Stack.Screen 
          name="CadastroImovel" 
          options={{ title: 'Cadastrar Novo Imóvel' }} 
        >
          {props => (
            <CadastroImovel {...props} 
              setListaImoveis={setImoveis} 
            />
          )}
        </Stack.Screen> 

        <Stack.Screen 
          name="PaginaImovel" 
          options={{ title: 'Detalhes do Imóvel' }} 
        >
          {props => (
            <PaginaImovel {...props} 
              setListaImoveis={setImoveis} 
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
