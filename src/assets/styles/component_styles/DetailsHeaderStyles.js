import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const DetailsHeaderStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.topContainerBackground,
    flexDirection: 'row',
    paddingTop: hp('4%'),
    paddingHorizontal: wp('8%'),
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('68%'),
  },
  headingText: {
    ...TextStyles.lexendRegular16LessWhite,
  },
});
