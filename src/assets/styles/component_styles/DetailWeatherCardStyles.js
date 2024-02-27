import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const DetailWeatherCardStyles = StyleSheet.create({
  mainContainer: {
    height: hp('30%'),
    width: wp('85%'),
    borderRadius: 40,
    paddingHorizontal: wp('4%'),
    paddingTop: hp('1.2%'),
  },
  botContainer: {
    marginTop: hp('1%'),
    paddingHorizontal: wp('6%'),
  },
  backgroundImageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '110%',
  },
});
