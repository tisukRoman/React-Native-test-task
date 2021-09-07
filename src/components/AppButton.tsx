import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { COLORS } from '../styles/colors';

export const AppButton = (props: {handler: any, children: string}) => {
    return (
        <Pressable style={styles.button} onPress={props.handler}>
          <Text style={styles.buttonTitle}>{props.children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      padding: 10,
      width: '100%',
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: COLORS.BLUE,
    },
    buttonTitle: {
      textAlign: 'center',
      color: COLORS.WHITE,
      letterSpacing: 1,
      fontWeight: '600',
    },
  });
  