import {StyleSheet} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSheet.Primary,
    padding: 10,
  },
  title: {
    fontSize: responsiveScreenFontSize(2),
    color: ColorSheet.Secondary,
    fontWeight: 'bold',
    marginHorizontal: responsiveScreenWidth(3),
  },
});

export default styles;
