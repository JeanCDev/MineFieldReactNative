import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

import params from './src/params';
import Field from './src/components/Field';

class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade: {params.getRowAmount()} x {params.getColumnsAmount()}</Text>

        <Field />
        <Field opened/>
        <Field nearMines={1} opened/>
        <Field nearMines={2} opened/>
        <Field nearMines={5} mined/>
        <Field nearMines={5} opened mined/>
        <Field nearMines={6} mined opened exploded/>
        <Field flagged/>
        <Field flagged opened/>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5fcff",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default App;
