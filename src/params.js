import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // proporção do cabeçalho (15%)
  difficultLevel: 0.1, // proporção do campo minado (10%)
  getColumnsAmount(){
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowAmount(){
    const height = Dimensions.get('window').height;
    const borderHeight = height * (1 - this.headerRatio);
    return Math.floor(borderHeight / this.blockSize);
  }
}

export default params;