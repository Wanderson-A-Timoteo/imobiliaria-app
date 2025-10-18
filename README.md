# 3 Cores Imobiliária

## Descrição

Este é um aplicativo móvel (Android) e web. O objetivo principal é criar uma interface simples, seguindo um layout pré-definido, para gerenciar anúncios de imóveis, implementando funcionalidades básicas de CRUD (Create, Read, Delete). O aplicativo permite listar imóveis existentes, visualizar seus detalhes, cadastrar novos imóveis (incluindo a seleção de imagem da galeria do dispositivo) e excluir anúncios.

## Funcionalidades Implementadas

* **Listagem de Imóveis:** Exibição dos imóveis disponíveis na tela inicial em formato de cards.
* **Visualização de Detalhes:** Ao clicar em um card, o usuário é levado a uma tela com informações completas do imóvel (imagem maior, título, descrição completa, valor).
* **Cadastro de Imóvel:** Formulário para adicionar um novo imóvel com os campos:
    * Título
    * Descrição
    * Valor (R$)
    * Seleção de Imagem (utilizando a galeria do dispositivo via `expo-image-picker`).
* **Exclusão de Imóvel:** Botão na tela de detalhes para remover um imóvel da lista (com caixa de diálogo de confirmação, adaptada para mobile e web).
* **Navegação:** Implementada com `React Navigation (Stack Navigator)` para gerenciar o fluxo entre as telas:
    * `PaginaInicial` -> `CadastroImovel`
    * `PaginaInicial` -> `PaginaImovel`
    * `CadastroImovel` -> `PaginaInicial` (após cadastro)
    * `PaginaImovel` -> `PaginaInicial` (após exclusão)
* **Compatibilidade:** Desenvolvido com foco em mobile (Android), mas também funcional na plataforma web (`react-native-web`), com ajustes para garantir a consistência (ex: lógica de exclusão com `Platform` e `window.confirm`).
* **Gerenciamento de Estado:** O estado da lista de imóveis é gerenciado no componente de navegação (`NavegacaoPrincipal`) e passado para as telas filhas via props.

## Tecnologias Utilizadas

* **React Native:** Framework principal para desenvolvimento multiplataforma.
* **Expo (SDK 54):** Plataforma e conjunto de ferramentas para facilitar o desenvolvimento React Native.
* **JavaScript:** Linguagem de programação base.
* **React Navigation:** Biblioteca para gerenciamento de navegação (Stack Navigator).
* **Expo Image Picker:** Módulo para acessar a galeria de mídia do dispositivo.
* **Git & GitHub:** Para controle de versão e gerenciamento do projeto (utilizando Git Flow com Feature Branches e Pull Requests).
* **Zsh & Oh My Zsh:** (Opcional, usado no ambiente de desenvolvimento) Para um terminal aprimorado.

## Configuração do Ambiente

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Pré-requisitos:**
    * Node.js (versão LTS recomendada) e npm instalados (gerenciados via `nvm` é uma boa prática).
    * Git instalado.
    * Expo CLI instalado globalmente (`npm install -g expo-cli`, opcional mas recomendado).
    * Um Emulador Android configurado (via Android Studio) ou um dispositivo físico com o app Expo Go instalado.
    * Se estiver usando Windows com WSL:
        * WSL 2 configurado.
        * Android Studio instalado no Windows.
        * Comunicação entre WSL e ADB configurada (ex: link simbólico `sudo ln -s /mnt/c/.../adb.exe /usr/local/bin/adb`).

2.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/Wanderson-A-Timoteo/imobiliaria-app.git
    ```

3.  **Navegue até o Diretório:**
    ```bash
    cd imobiliaria-app
    ```

4.  **Instale as Dependências:**
    ```bash
    npm install
    ```

## Rodando o Projeto

Após a configuração, você pode iniciar o aplicativo:

1.  **Inicie o Servidor Metro Bundler:**
    * Opção 1 (Padrão):
        ```bash
        npm start
        ```
        *(ou `npx expo start`)*
    * Opção 2 (Limpando o cache, recomendado após mudanças de branch ou problemas):
        ```bash
        npx expo start -c
        ```
        *(ou `npm start -- --clear`)*

2.  **Abra o Aplicativo:**
    * Com o Metro Bundler rodando e seu emulador/dispositivo pronto:
        * Pressione `a` no terminal para abrir no Emulador/Dispositivo Android (requer Expo Go instalado).
        * Pressione `w` no terminal para abrir no seu navegador web padrão.

## Estrutura de Pastas

A estrutura principal do projeto dentro da pasta `src` é organizada da seguinte forma:

* `src/assets/imagens/`: Contém as imagens estáticas (banner, casas)
* `src/componentes/`: Componentes React Native reutilizáveis (ex: CardImovel.js)
* `src/dados/`: Arquivos com dados iniciais ou mockados (ex: imoveis.js)
* `src/navegacao/`: Arquivos relacionados à configuração da navegação (ex: index.js com StackNavigator)
* `src/telas/`: Componentes que representam as telas/páginas do aplicativo

## Autor

* **Wanderson de Almeida Timóteo** - [Visitar perfil do Github](https://github.com/Wanderson-A-Timoteo)
