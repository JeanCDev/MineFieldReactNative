import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';

export default function LevelSelect(props) {
  return (
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o nível de dificuldade</Text>

          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelect(0.1)}
          >
            <Text style={styles.buttonLabel}>Noob</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => props.onLevelSelect(0.2)}
          >
            <Text style={styles.buttonLabel}>Meia boca</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelect(0.3)}
          >
            <Text style={styles.buttonLabel}>Dos meus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  frame:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  container: {
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  title: {
    fontWeight: "bold",
    fontSize: 30
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: "#eee",
    fontWeight: "bold"
  },
  bgEasy: {
    backgroundColor: "#49b65d"
  },
  bgNormal: {
    backgroundColor: "#2765f7"
  },
  bgHard: {
    backgroundColor: "#f26337"
  }
});