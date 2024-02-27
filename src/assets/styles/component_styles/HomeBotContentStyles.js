import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextStyles} from '@app/constants';

export const HomeBotContentStyles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  nextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    height: hp('18%'),
    marginTop: hp('2%'),
  },
  todayText: {
    ...TextStyles.lexendSemiBold22LessBlack,
  },
  nextText: {
    ...TextStyles.lexendRegular16Link,
    paddingRight: wp('1%'),
  },
});
