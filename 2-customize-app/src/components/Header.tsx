import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

import { ThemeContext } from '../hooks/useTheme';

export function Header() {
  const { handleNextTheme, currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity style={[
      styles.header,
      {
        backgroundColor: currentTheme.primary
      }
    ]} activeOpacity={.8} onPress={handleNextTheme}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
