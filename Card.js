import React from 'react';
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const cardWidth = Math.round(viewportWidth * 0.8);
const cardHeight = Math.round(viewportHeight * 0.6);
const cardMargin = Math.round(viewportWidth * 0.02);
const cardBorderRadius = 2;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: cardHeight,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#333',
    fontSize: 12,
  },
});

export default class Card extends React.Component {
  render() {
    const { title, text, image } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );
  }
}