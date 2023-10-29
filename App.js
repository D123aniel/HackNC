import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { React, useCallback, useState, useEffect } from 'react';

import { NativeBaseProvider, HStack, VStack, Box, Center } from 'native-base';

import { useFonts } from 'expo-font';

import { openBrowserAsync } from 'expo-web-browser';

import {entertainment, business, sports, health, technology} from './links.js';

const images = {
  bgr: require('./assets/bgr.png'),
  bleacher: require('./assets/bleacher.png'),
  buzzfeed: require('./assets/buzzfeed.png'),
  cnbc: require('./assets/cnbc.jpg'),
  cnn: require('./assets/cnn.png'),
  dab: require('./assets/dab.jpg'),
  eonline: require('./assets/eonline.jpg'),
  espn: require('./assets/espn.png'),
  hollywoodreporter: require('./assets/hollywood.png'),
  indystar: require('./assets/IndyStar.png'),
  investors: require('./assets/investors.png'),
  kcrg: require('./assets/kcrg.png'),
  ketv: require('./assets/KETV_logo.png'),
  kotaku: require('./assets/kotaku.png'),
  ksl: require('./assets/ksl.png'),
  lifehacker: require('./assets/lifehacker.png'),
  nintendolife: require('./assets/nintendo.png'),
  nypost: require('./assets/nypost.png'),
  sportsi: require('./assets/sportsi.png'),
  thehill: require('./assets/thehill.png'),
  theverge: require('./assets/theverge.png'),
  variety: require('./assets/variety.png'),
  wtatennis: require('./assets/WTA.png'),
  yahoo: require('./assets/yahoo.png'),
  youtube: require('./assets/Youtube_logo.png')
}

function determinePicture(pic){
  if(pic.indexOf('bgr')>-1){
    return 'bgr'
  }if(pic.indexOf('bleacher')>-1){
    return 'bleacher'
  }if(pic.indexOf('buzzfeed')>-1){
    return 'buzzfeed'
  }if(pic.indexOf('cnbc')>-1){ 
    return 'cnbc'
  }if(pic.indexOf('cnn')>-1){
    return 'cnn'
  }if(pic.indexOf('eonline')>-1){
    return 'eonline'
  }if(pic.indexOf('espn')>-1){
    return 'espn'
  }if(pic.indexOf('hollywoodreporter')>-1){
    return 'hollywoodreporter'
  }if(pic.indexOf('indystar')>-1){ 
    return 'indystar'
  }if(pic.indexOf('investors')>-1){
    return 'investors'
  }if(pic.indexOf('kcrg')>-1){
    return 'kcrg'
  }if(pic.indexOf('ketv')>-1){
    return 'ketv'
  }if(pic.indexOf('kotaku')>-1){
    return 'kotaku'
  }if(pic.indexOf('ksl')>-1){
    return 'ksl'
  }if(pic.indexOf('lifehacker')>-1){
    return 'lifehacker'
  }if(pic.indexOf('nintendolife')>-1){ 
    return 'nintendolife'
  }if(pic.indexOf('nypost')>-1){ 
    return 'nypost'
  }if(pic.indexOf('si.com')>-1){ 
    return 'sportsi'
  }if(pic.indexOf('thehill')>-1){
    return 'thehill'
  }if(pic.indexOf('theverge')>-1){
    return 'theverge'
  }if(pic.indexOf('variety')>-1){
    return 'variety'
  }if(pic.indexOf('wtatennis')>-1){
    return 'wtatennis'
  }if(pic.indexOf('yahoo')>-1){
    return 'yahoo'
  }if(pic.indexOf('youtube')>-1){
    return 'youtube'
  }
  else{
    return 'dab'
  } 
}

export default function App() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    );
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  },[]);

  let [fontsLoaded] = useFonts ({
    'Bebas': require('./assets/fonts/Bebas.ttf'),
    'Orbitron-Black': require('./assets/fonts/Orbitron-Black.ttf'),
    'Orbitron-Regular': require('./assets/fonts/Orbitron-Regular.ttf')
  })
  
  const [news1, setNews1] = useState('https://www.google.com')
  const [news2, setNews2] = useState('https://www.google.com')
  const [news3, setNews3] = useState('https://www.google.com')
  const [news4, setNews4] = useState('https://www.google.com')
  const [news5, setNews5] = useState('https://www.google.com')
  const [news6, setNews6] = useState('https://www.google.com')

  if (!fontsLoaded) {
    return <Text> Loading... </Text>
  }

  const imgPath = require('./assets/dab.jpg')
  return (
    <NativeBaseProvider>
      <Box minHeight="800px" bg="#FFFDD0" >
        <VStack space={10} alignItems="center" marginTop="50">
          <Text style={{fontFamily:'Bebas', fontSize: 40}}>Morning Mosaic</Text>
          <Text style={styles.date} >{currentDate.toLocaleString()}</Text>

          <Text style={styles.category}>Select a Category</Text>

          <VStack space={2} alignItems="center">
            <HStack space={3} alignItems="center">
              <Pressable onPress={() => {
                setNews1(entertainment[0])
                setNews2(entertainment[1])
                setNews3(entertainment[2])
                setNews4(entertainment[3])
                setNews5(entertainment[4])
                setNews6(entertainment[5])
              }}>
                <Text style={styles.smaller_title}>Entertainment</Text>
              </Pressable>
              <Pressable onPress={() => {
                setNews1(business[0])
                setNews2(business[1])
                setNews3(business[2])
                setNews4(business[3])
                setNews5(business[4])
                setNews6(business[5])
              }}>
                <Text style={styles.smaller_title}>Business</Text>
              </Pressable>
              <Pressable onPress={() => {
                setNews1(sports[0])
                setNews2(sports[1])
                setNews3(sports[2])
                setNews4(sports[3])
                setNews5(sports[4])
                setNews6(sports[5])
              }}>
                <Text style={styles.smaller_title}>Sports</Text>
              </Pressable>
            </HStack>
            <HStack space={2} alignItems="center">
              <Pressable onPress={() => {
                setNews1(health[0])
                setNews2(health[1])
                setNews3(health[2])
                setNews4(health[3])
                setNews5(health[4])
                setNews6(health[5])
              }}>
                <Text style={styles.smaller_title}>Health</Text>
              </Pressable>
              <Pressable onPress={() => {
                setNews1(technology[0])
                setNews2(technology[1])
                setNews3(technology[2])
                setNews4(technology[3])
                setNews5(technology[4])
                setNews6(technology[5])
              }}>
                <Text style={styles.smaller_title}>Technology</Text>
              </Pressable>
            </HStack>
          </VStack>
          <HStack space={3} justifyContent="center">
            <VStack>
              <Pressable onPress={() => {openBrowserAsync(news1)}}>
                <Image source={images[determinePicture(news1)]} style={styles.logo}/>
              </Pressable>
              <Pressable onPress={() => {openBrowserAsync(news2)}}>
                <Image source={images[determinePicture(news2)]} style={styles.logo}/>
              </Pressable>
            </VStack>
            <VStack>
              <Pressable onPress={() => {openBrowserAsync(news3)}}>
                <Image source={images[determinePicture(news3)]} style={styles.logo}/>
              </Pressable>
              <Pressable onPress={() => {openBrowserAsync(news4)}}>
                <Image source={images[determinePicture(news4)]} style={styles.logo}/>
              </Pressable>
            </VStack>
            <VStack>
              <Pressable onPress={() => {openBrowserAsync(news5)}}>
                <Image source={images[determinePicture(news5)]} style={styles.logo}/>
              </Pressable>
              <Pressable onPress={() => {openBrowserAsync(news6)}}>
                <Image source={images[determinePicture(news6)]} style={styles.logo}/>
              </Pressable>
            </VStack>
          </HStack>
          <StatusBar style="auto"/>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  smaller_title: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginTop: 0,
    backgroundColor: '#FFFFF0',
    borderRadius: 100,
    borderWidth: 1,
    paddingLeft: 7,
    paddingRight: 5
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  date: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Orbitron-Regular'
  },
  image: {
    width: 100,
    height: 75
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 100,
    overflow:'hidden',
    borderRadius: 100
  },
  button: {
    borderColor: 'red',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row'
  }
});

