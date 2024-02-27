import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const HeaderStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.topContainerBackground,
    position: 'relative',
  },
  inputContainer: {
    backgroundColor: Colors.transparent,
    marginHorizontal: wp('8%'),
    marginTop: hp('4%'),
  },
  menuItemContainer: {
    position: 'relative',
  },
  errorContainer: {
    position: 'absolute',
    top: hp('11%'),
    left: wp('12%'),
  },
  errorText: {
    ...TextStyles.lexendRegular12LessWhite,
    color: Colors.errorText,
  },
});
