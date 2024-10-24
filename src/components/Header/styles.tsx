import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: ColorSheet.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveScreenHeight(10),
    borderBottomColor: ColorSheet.Border,
    borderBottomWidth: 1,
  },
  button: {
    position: 'absolute',
    left: responsiveScreenWidth(2),
    backgroundColor: ColorSheet.Background,
    borderRadius: 50,
    height: responsiveScreenHeight(5),
    width: responsiveScreenHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: ColorSheet.Text,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '500',
  },
});

export default styles;
