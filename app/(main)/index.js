import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// 1. Importar o nosso hook
import { usePlantacoes } from '../../context/PlantacoesContext';

export default function ListaPlantacoesScreen() {
  // 2. Aceder ao estado global
  const { listaPlantacoes, loading, deletarPlantacao } = usePlantacoes();

  const renderItem = ({ item }) => (
    <View style={styles.itemLista}>
      <View style={styles.itemTextoContainer}>
        <Text style={styles.itemNome}>{item.nome} ({item.tipo})</Text>
        <Text>Área: {item.area} ha</Text>
        <Text>Irrigação: {item.irrigacao ? 'Ativa' : 'Inativa'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deletarPlantacao(item.id)} // 3. Usar a função do contexto
        style={styles.botaoDeletar}
      >
        <Text style={styles.textoBotaoDeletar}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.containerCenter}>
        <Text>Carregando registros...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
      data={listaPlantacoes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.listaVazia}>Nenhum registro encontrado.</Text>}
      ListHeaderComponent={<Text style={styles.tituloLista}>Registos Salvos</Text>}
    />
  );
}

// (Estilos - pode copiar e colar)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloLista: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  itemLista: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
  },
  itemTextoContainer: {
    flex: 1,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoDeletar: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  textoBotaoDeletar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listaVazia: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
});