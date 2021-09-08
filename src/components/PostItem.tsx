import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';

type PostItemProps = {
  img: string;
  author: string;
};

export const PostItem = ({ img, author }: PostItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREY,
    marginBottom: 10,
    height: 250,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: 250,
  },
  textWrapper: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',

  },
  text: {
    textAlign: 'left',
    color: COLORS.WHITE,
  },
});
