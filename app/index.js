import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
// Importa o 'useRouter' para fazer a navegação
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // Pega o 'router' para poder navegar
  const router = useRouter(); 

  const handleLogin = () => {
    // Simulação de login (admin / 123)
    if (email.toLowerCase() === 'admin' && senha === '123') {
      // Navega para a rota '/main'
      // 'replace' impede o utilizador de "voltar" para o login
      router.replace('/(main)') 
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos. (Tente: admin / 123)');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.label}>Email (use 'admin')</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Senha (use '123')</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});