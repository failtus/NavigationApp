import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/home.js'
import One from './components/one.js';
import Two from './components/two.js';
import Three from './components/three.js';
import Four from './components/four.js';

export const App = StackNavigator({
  Home: { screen: Home},
  One: { screen: One},
  Two: { screen: Two},
  Three: { screen: Three},
  Four: { screen: Four},
})