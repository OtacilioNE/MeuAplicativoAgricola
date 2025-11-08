# 🌾 AppAgro: Registo de Plantações (Projeto React Native)

Este é o meu primeiro projeto prático desenvolvido com React Native e Expo, como parte da disciplina de Desenvolvimento de Aplicativos Móveis, lecionada pelo professor **Douglas Rohden**.

O projeto é um aplicativo de gestão de plantações, que evoluiu de um ecrã único para uma arquitetura profissional com navegação por abas, gestão de estado global (Context API) e persistência de dados no dispositivo.

## 🚀 Funcionalidades

* **Autenticação:** Tela de Login (simulada) para proteger o acesso à aplicação.
* **Navegação em Pilha (Stack):** Fluxo de Login -> App Principal.
* **Navegação por Abas (Tabs):** O app principal é dividido em "Plantações" (para listar) e "Registar" (para adicionar).
* **Formulário Completo:** Captura de dados com `TextInput` (Nome, Área), `Picker` (Tipo de Grão) e `Switch` (Irrigação).
* **Gestão de Estado Global:** Utilização da **React Context API** para criar um "cérebro" global. Isto permite que a aba de Registo atualize a lista na outra aba em tempo real.
* **Persistência de Dados:** Os registos são salvos no dispositivo usando `AsyncStorage`. Os dados não se perdem ao fechar e reabrir o aplicativo.
* **CRUD Básico:** Funcionalidade de Criar (Create), Ler (Read) e Apagar (Delete) registos, com um `Alert` de confirmação para exclusão.

## 🛠️ Tecnologias Utilizadas

* **React Native**
* **Expo** (com **Expo Router** para navegação baseada em ficheiros)
* **React Context API** (para gestão de estado global)
* **AsyncStorage** (para persistência de dados local)
* **@expo/vector-icons** (para os ícones das abas)
* **@react-native-picker/picker**

## 🏁 Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/OtacilioNE/MeuAplicativoAgricola
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd MeuAplicativoAgricola
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o projeto com Expo:**
    ```bash
    npx expo start
    ```

5.  **Abra no seu dispositivo ou simulador:**
    * Pressione `w` para abrir na Web.
    * Pressione `a` para abrir no simulador Android.
    * Pressione `i` para abrir no simulador iOS.
    * Escaneie o QR code com o app Expo Go no seu telemóvel.

## 🔑 Como Usar

Para fins de demonstração, a tela de login está com credenciais simuladas:

* **Email:** `admin`
* **Senha:** `123`

## 👨‍🏫 Agradecimentos

Este projeto é o resultado da atividade prática "Trabalho Prático: Aplicativo Completo" da disciplina de Desenvolvimento de Aplicativos Móveis, proposta pelo professor **Douglas Rohden**.

## 📄 Licença

Distribuído sob a licença MIT.
