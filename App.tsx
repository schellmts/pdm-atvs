import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Car from "./components/Car";
import SearchBar from "./components/Elements/SearchBar";

export default function App() {
  let obj = {
    car: 'Corsa',
    brand: 'Chevrolet',
    hp: 240
  }


  const handleSearch = (data: string) => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Car car={obj.car} brand={obj.brand} hp={obj.hp} />
      <View>
        <SearchBar onSearch={handleSearch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
