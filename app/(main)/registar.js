import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
// 1. Importar o hook e o router
import { useRouter } from 'expo-router';
import { usePlantacoes } from '../../context/PlantacoesContext';

export default function RegistarPlantacaoScreen() {
  // 2. Aceder à função 'adicionar' do contexto
  const { adicionarPlantacao } = usePlantacoes();
  const router = useRouter(); // Para navegar

  // Estado local *apenas* para o formulário
  const [nomeCultura, setNomeCultura] = useState('');
  const [areaPlantada, setAreaPlantada] = useState('');
  const [tipoGrao, setTipoGrao] = useState('soja');
  const [irrigacaoAtiva, setIrrigacaoAtiva] = useState(false);
  const [erro, setErro] = useState(null);

  const handleAdicionar = () => {
    setErro(null);
    if (!nomeCultura.trim() || !areaPlantada.trim()) {
      setErro('Nome da cultura e área são obrigatórios.');
      return;
    }
    const areaNum = parseFloat(areaPlantada);
    if (isNaN(areaNum) || areaNum <= 0) {
      setErro('A área plantada deve ser um número positivo.');
      return;
    }

    const novaPlantacao = {
      id: Date.now().toString(),
      nome: nomeCultura,
      area: areaNum,
      tipo: tipoGrao,
      irrigacao: irrigacaoAtiva,
    };

    // 3. Chamar a função do contexto
    adicionarPlantacao(novaPlantacao);

    // 4. Limpar o formulário (opcional, mas bom)
    setNomeCultura('');
    setAreaPlantada('');
    setTipoGrao('soja');
    setIrrigacaoAtiva(false);

    // 5. Navegar de volta para a lista
    router.push('/(main)'); // Vai para a aba 'index'
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollView}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome da Cultura:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Milho Safrinha"
          value={nomeCultura}
          onChangeText={setNomeCultura}
        />
        <Text style={styles.label}>Área Plantada (em hectares):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 150.5"
          value={areaPlantada}
          onChangeText={setAreaPlantada}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Tipo de Grão:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipoGrao}
            onValueChange={(itemValue) => setTipoGrao(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Soja" value="soja" />
            <Picker.Item label="Milho" value="milho" />
            <Picker.Item label="Trigo" value="trigo" />
            <Picker.Item label="Algodão" value="algodao" />
            <Picker.Item label="Outro" value="outro" />
          </Picker>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Irrigação Ativa?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={irrigacaoAtiva ? '#f5dd4b' : '#f4f3f4'}
            value={irrigacaoAtiva}
            onValueChange={setIrrigacaoAtiva}
          />
        </View>
        {erro && <Text style={styles.erro}>{erro}</Text>}
        <Button title="Adicionar Registro" onPress={handleAdicionar} color="#27AE60" />
      </View>
    </ScrollView>
  );
}

// (Estilos - pode copiar e colar)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});