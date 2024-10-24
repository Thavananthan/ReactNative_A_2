import React from 'react';
import { View, TextInput, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
interface Props {
    style?: StyleProp<ViewStyle>;
    placeholder?: string;
    value?: string;
    maxLength?: number;
    onChangeText?: (text: string) => void;
  }

const DescriptionInput = (props:Props) => {
   const { value, onChangeText, placeholder, maxLength } = props;
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.container}
        multiline
        numberOfLines={5}
        maxLength={maxLength}
      />
    </View>
  );
};

export default DescriptionInput;
