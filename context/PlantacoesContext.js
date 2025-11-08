import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

// Chave do AsyncStorage
const STORAGE_KEY = '@plantacoes_app';

// 1. Criar o Contexto
const PlantacoesContext = createContext();

// 2. Criar o "Provedor" (o componente que gere o estado)
export function PlantacoesProvider({ children }) {
  const [listaPlantacoes, setListaPlantacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar os dados ao iniciar
  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
      if (dadosSalvos) {
        setListaPlantacoes(JSON.parse(dadosSalvos));
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível carregar os dados salvos.');
    } finally {
      setLoading(false);
    }
  };

  // Função para salvar a lista completa (helper)
  const salvarDados = async (novaLista) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
      setListaPlantacoes(novaLista); // Atualiza o estado global
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  // Função para adicionar uma plantação (usada pelo formulário)
  const adicionarPlantacao = (novaPlantacao) => {
    const novaLista = [...listaPlantacoes, novaPlantacao];
    salvarDados(novaLista);
  };

  // Função para deletar (usada pela lista)
  const deletarPlantacao = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja deletar este registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: () => {
            const novaLista = listaPlantacoes.filter((item) => item.id !== id);
            salvarDados(novaLista);
          },
        },
      ]
    );
  };

  // O "value" é o que os componentes "filho" vão poder aceder
  const value = {
    listaPlantacoes,
    loading,
    adicionarPlantacao,
    deletarPlantacao,
  };

  return (
    <PlantacoesContext.Provider value={value}>
      {children}
    </PlantacoesContext.Provider>
  );
}

// 3. Criar o "Hook" (o atalho para usar o contexto)
export function usePlantacoes() {
  const context = useContext(PlantacoesContext);
  if (!context) {
    throw new Error('usePlantacoes deve ser usado dentro de um PlantacoesProvider');
  }
  return context;
}