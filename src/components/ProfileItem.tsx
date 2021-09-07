import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { COLORS } from '../styles/colors';

export const ProfileItem = () => {
  const auth = useSelector((state: AppState) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: auth.img }} />
      </View>
      <View>
        <Text style={styles.profileText}>Name: {auth.name}</Text>
        <Text style={styles.profileText}>Email: {auth.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 'auto',
    padding: 20,
    backgroundColor: COLORS.LIGHT_GREY,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10
  },
  imageWrapper: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    marginRight: 10,
    overflow: 'hidden'
  },
  image: {
    width: 50,
    height: 50,
  },
  profileText: {
    color: COLORS.WHITE
  }
});
