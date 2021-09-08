import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={COLORS.WHITE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.WHITE,
    padding: 5,
  },
});
