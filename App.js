import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Frontpage from './components/Frontpage';
import Planet from './components/Planet';
import style from './style/style';
import FetchApi from './components/FetchApi';

export default function App() {

  return (
<FetchApi/>
  );
}