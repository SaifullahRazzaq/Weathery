import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const MoreWeatherDetailsStyles = StyleSheet.create({
  mainContainer: {
    height: 100,
  },
  horizontalLine: {
    width: wp('70%'),
    marginBottom: hp('1.5%'),
    borderBottomColor: Colors.lessWhite,
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity: 0.5,
  },
  weatherDetailsMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherDetailsContainer: {
    alignItems: 'center',
  },
  unitText: {
    ...TextStyles.lexendLight14LessWhite,
    paddingTop: hp('1%'),
  },
  descriptionText: {
    ...TextStyles.lexendLight12LessWhite,
    paddingTop: hp('0.2%'),
  },
});
