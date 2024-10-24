import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
       backgroundColor: ColorSheet.Background,
       marginHorizontal: responsiveScreenWidth(3),
       borderRadius: 5,
       height: responsiveScreenHeight(15),
       paddingHorizontal: responsiveScreenWidth(3),
       marginVertical: responsiveScreenHeight(2),
  },
});

export default styles;
