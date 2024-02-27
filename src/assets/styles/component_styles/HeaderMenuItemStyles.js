import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextStyles, Colors} from '@app/constants';

export const HeaderMenuItemStyles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    marginTop: hp('0.5%'),
    // height: hp('24%'),
    left: wp('8%'),
    right: wp('8%'),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.overlaySpinnerBackground,
    borderRadius: 12,
  },
  topContainer: {
    flexDirection: 'row',
    height: hp('3%'),
    paddingTop: hp('1%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
  },
  recentText: {
    ...TextStyles.lexendRegular12Link,
  },
  menuItemContainer: {
    marginVertical: hp('0.8%'),
  },
  menuItem: {
    minWidth: wp('100%'),
  },
  listContentContainer: {
    // maxHeight: hp('20%'),
    paddingVertical: hp('0.8%'),
  },
  emptyRecentTextContainer: {
    height: hp('8%'),
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
  },
  emptyRecentText: {
    ...TextStyles.lexendLight14LessWhite,
    textAlign: 'center',
    color: Colors.headerInputOutline,
  },
});
