import React from 'react';
import { SafeAreaView } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default function SafeAreaComp({ children }) {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>{children}</SafeAreaView>
  );
}
