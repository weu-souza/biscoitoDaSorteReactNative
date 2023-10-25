import React, { Component, cloneElement } from "react";
import { Text, View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.reset = this.reset.bind(this)

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento',
      'O riso é a menor distância entre duas pessoas',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossivel.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  }
  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }
  reset() {
    this.setState({
      textoFrase: '',
      img: require('./src/biscoito.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnResetContainer}>
          <TouchableOpacity style={styles.btnReset} onPress={this.reset}>
            <View style={styles.btnResetArea}>
              <Text style={styles.btnResetTexto}>X</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Image
          source={this.state.img}
          style={styles.img}></Image>
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
     justifyContent: 'center',
     
   },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#dd7b22'
  },
  btnReset: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 25,

  },
  btnResetArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnResetTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'red'
  },
  btnResetContainer: {
    alignSelf:'flex-end',
    marginRight:60
  


  }
})

export default App;

