import React, { useContext } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Composer } from 'react-native-gifted-chat';
import { AppContext } from '../../../context';
import { Typography } from '../../../theme';
import { ThemeColors } from '../../../types';

const { FontWeights, FontSizes } = Typography;

const CustomComposer = composerProps => {
  const { theme } = useContext(AppContext);
  return (
    <Composer
      {...composerProps}
      multiline
      textInputProps={{ autoCorrect: false }}
      textInputStyle={styles(theme).inputStyle}
    />
  );
};

const styles = (theme = {} as ThemeColors) => StyleSheet.create({
  inputStyle: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    color: theme.text01,
    paddingTop: 10,
    paddingLeft: 10
  }
});

export default CustomComposer;