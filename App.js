import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert
} from 'react-native';

import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelect from './src/screens/LevelSelect';

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExploded,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowAmount();

    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowAmount();

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showSelectLevel: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExploded(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Perdeu!", "Burro da porra! Vai dormir fedelho!");
    }

    if (won) {
      Alert.alert("Ganhou!", "Não é um animal no final das contas...");
    }

    this.setState({
      board,
      won,
      lost
    });
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert("Humpf! Ganhou... Bastardo!");
    }

    this.setState({board, won});
  }

  onLevelSelect = (level) => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

  closeModal = () => {
    this.setState({showSelectLevel: false});
  }

  openModal = () => {
    this.setState({showSelectLevel: true});
  }

  newGame = () => {
    this.setState(this.createState());
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LevelSelect
          isVisible={this.state.showSelectLevel}
          onLevelSelect={this.onLevelSelect}
          onCancel={this.closeModal}
          onFlagPress={this.openModal}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={this.newGame}
          onFlagPress={this.openModal}
        />

        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: "#aaa"
  }
});

export default App;
