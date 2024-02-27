import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Capitalize first letter of ever word after a space.
export const CapitalizeFirstLetter = message => {
  const errorMessage = message?.split(' ');

  const modifiedMessage = errorMessage?.map(
    item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(),
  );

  return modifiedMessage?.join(' ');
};

// Toast functionality.
const showToast = error => {
  Toast.show({
    type: 'error',
    text1: CapitalizeFirstLetter(error.title),
    text2: error.subtitle,
    visibilityTime: 4000,
    topOffset: hp('4%'),
    onPress: () => Toast.hide(),
  });
};

// Show toast message on various error types.
export const showError = error => {
  // Double tilde ~~ converts the value to an integer.
  switch (~~error.cod) {
    case 404:
      showToast({
        title: error.message,
        subtitle: 'Please enter a proper city name and search again.',
      });
      break;

    case 429:
      showToast({
        title: 'Temporarily Blocked',
        subtitle: error.message,
      });
      break;

    case 403:
      Alert.alert(
        'Permission Error',
        error.message,
        [
          {
            text: 'Ok',
          },
        ],
        {cancelable: true},
      );
      break;

    case 400:
      showToast({
        title: error.message,
        subtitle: 'Please enter proper coordinates',
      });
      break;

    default:
      showToast({
        title: 'Connection Error',
        subtitle: 'Could not connect to the internet.',
      });
  }
};
