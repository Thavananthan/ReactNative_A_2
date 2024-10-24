import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ColorSheet} from '../../utils/ColorSheet';

interface Props {
  title: string;
  onPress?: () => void;
}

const Header = (props: Props) => {
  const {title, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <FontAwesome name="angle-left" size={30} color={ColorSheet.BackButton} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
