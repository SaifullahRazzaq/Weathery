import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from '@app/constants';

export const HomeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lessWhite,
  },
  topContainer: {
    height: hp('57%'),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bottomContainer: {
    flex: 1,
    paddingTop: hp('2%'),
  },
});
