import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IO from 'react-native-vector-icons/Ionicons';
import {DetailsHeaderStyles as Styles} from '@app/assets/styles';

export default function DetailsHeader() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={Styles.mainContainer}>
      <View>
        <TouchableOpacity onPress={navigateToHome}>
          <IO name="md-chevron-back" size={30} />
        </TouchableOpacity>
      </View>

      <View style={Styles.headingContainer}>
        <Text style={Styles.headingText}>Next 7 Days</Text>
      </View>
    </View>
  );
}
