import React from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { View, StatusBar, ToolbarAndroid, ScrollView, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';

const { width: viewportWidth } = Dimensions.get('window');
const cardWidth = Math.round(viewportWidth * 0.8);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor='rgba(0, 0, 0, 0.24)'
        />

        { Platform.OS == 'android' && Platform.Version >= 20 ?
          <View style={styles.statusBar} />
        : null }

        <ToolbarAndroid
          style={styles.toolbarAndroid}
          titleColor='#fff'
          title='Ollie'
        />

        <ScrollView
          style={styles.scrollView}
          indicatorStyle={'white'}
          scrollEventThrottle={200}
        >

          <Carousel
            sliderWidth={viewportWidth}
            itemWidth={cardWidth}
          >
            <Card title='Card #1' text='An awesome card...' image={require('./img/1.jpg')} />
            <Card title='Card #2' text='An awesome card...' image={require('./img/2.jpg')} />
            <Card title='Card #3' text='An awesome card...' image={require('./img/3.jpg')} />
          </Carousel>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  statusBar: {
    height: 24,
    backgroundColor: '#1E88E5',
  },
  toolbarAndroid: {
    height: 56,
    backgroundColor: '#2196F3',
    elevation: 4,
  },
  scrollView: {
    marginTop: 20,
  }
});
