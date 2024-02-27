import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '@app/constants';

export const DetailsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.topContainerBackground,
    position: 'relative',
  },
  topContainer: {
    height: hp('25%'),
    paddingTop: hp('3%'),
    marginBottom: hp('8%'),
  },
  weatherCardContainer: {
    position: 'absolute',
    width: wp('100%'),
    top: hp('25%'),
    alignItems: 'center',
    zIndex: 1,
  },
  botContainer: {
    backgroundColor: Colors.lessWhite,
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: hp('22%'),
    paddingHorizontal: wp('8%'),
  },
});
