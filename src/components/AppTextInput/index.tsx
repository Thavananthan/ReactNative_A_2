import {View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import { Input } from 'react-native-elements';
import styles from './styles';
import {ColorSheet} from '../../utils/ColorSheet';

interface Props {
  style?: StyleProp<ViewStyle>;
  name?: string;
  placeholder?: string;
  value?: string;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  onChangeText?: (text: string) => void;
}

const AppTextInput = (props: Props) => {
  const {style, placeholder, value, onChangeText, keyboardType} = props;
  return (
    <View style={[styles.container, style]}>
      <Input
      keyboardType={keyboardType}
        placeholderTextColor={ColorSheet.Text}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        inputContainerStyle={styles.inputContainerStyle} 
      />
    </View>
  );
};

export default AppTextInput;
