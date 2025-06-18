
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';
import { PickerItem } from './src/Picker';
import { useEffect, useState } from 'react';
import { api } from './src/services/api';
  
function App(){
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoin, setSelectedCoin] = useState(null);


  useEffect( () => {

    const loadCoins = async () => {
        const response = await api.get('all');
          let arrayCoins = [];
          Object.keys(response.data).map( (key) => {
            arrayCoins.push(
              {
                key: key, 
                value:key, 
                label:key
              })
          })
          setCoins(arrayCoins);
          setSelectedCoin(arrayCoins[0].key);
          setLoading(false);
        }
    loadCoins();
    },
  [])

  if(loading) {
    return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#252525'}}>
      <ActivityIndicator size="large" color="#fff" />
    </View>)
 }

  return (
    <View style={styles.container}>
      <View style={styles.coinArea}>
        <Text style={styles.text}>Selecione sua moeda</Text>
        <PickerItem 
          moedas={coins}
          selectedCoin={selectedCoin}
          setSelectedCoin={(coin) => setSelectedCoin(coin)}
             
        />
      </View>
      <View style={styles.valueArea}>
        <Text style={styles.title}>Selecione o valor para saber a conversão: R$</Text>
        <TextInput placeholder='P.e 1000' style={styles.input} keyboardType='numeric'>

        </TextInput>

      </View>
    </View>
);
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252525',
    paddingTop: 50
  },
  coinArea: {
    backgroundColor: '#F0F0F0',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8
  },
  text: {

    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingTop:5,
    paddingBottom: 5,

  },
  valueArea: {
    backgroundColor: '#F0F0F0',
    width: '90%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
    marginBottom: 1
  },
  title: {
    fontSize: 15,
    color: '#000',
    paddingTop:8,
    paddingBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 20,
    color: '#000',
    marginBottom: 10
  }
});

export default App;