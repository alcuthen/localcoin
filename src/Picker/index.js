import { Picker } from '@react-native-picker/picker';

export function PickerItem(props) {

    let coinsItems = props.moedas.map((coin, index) => { 
        return (
            <Picker.Item 
                label={coin.key} 
                value={coin.key} 
                key={index} 
            />
        )
    })

  return (
    <Picker> 
        selectedValue={props.selectedCoin}
        onValueChange={(itemValue) => props.selectedCoin(itemValue)}
        {/* <Picker.Item label="BTC" value="BTC" key={0}/> */}
        {coinsItems}
    </Picker>
  )
}