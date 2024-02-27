import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentWeather} from '@app/redux';
import {Colors} from '@app/constants';
import HeaderMenuItem from './HeaderMenuItem';
import {HeaderStyles as Styles} from '@app/assets/styles';

export default function Header() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const {recentSearches} = useSelector(state => state?.recent || []);

  const [menuVisible, setMenuVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const keyboardDidHideCallback = () => {
    inputRef.current.blur?.();
  };

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHideCallback,
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);

  const EmptyError = () => {
    setTimeout(() => {
      setIsEmpty(false);
    }, 4000);

    return (
      <View style={Styles.errorContainer}>
        <Text style={Styles.errorText}>Please enter a city name</Text>
      </View>
    );
  };

  const HeaderMenu = () => {
    return (
      <View style={Styles.menuItemContainer}>
        <HeaderMenuItem
          data={Array.isArray(recentSearches) ? recentSearches : []}
          setMenuVisible={setMenuVisible}
          setInputValue={setInputValue}
        />
      </View>
    );
  };

  const submitCityHandler = cityName => {
    setInputValue(cityName);

    inputValue.trim()
      ? dispatch(getCurrentWeather({cityName: inputValue}))
      : setIsEmpty(true);
  };

  return (
    <View style={Styles.headerContainer}>
      <TextInput
        ref={inputRef}
        theme={{roundness: 12}}
        mode="outlined"
        placeholder="Search City"
        outlineStyle={{borderWidth: 1}}
        outlineColor={Colors.headerInputOutline}
        activeOutlineColor={Colors.headerInputActiveOutline}
        selectionColor={Colors.white}
        style={Styles.inputContainer}
        right={
          inputValue ? (
            <TextInput.Icon
              icon="close"
              onPress={() => {
                setInputValue('');
                setMenuVisible(true);
              }}
            />
          ) : (
            <TextInput.Icon
              icon="cloud-search-outline"
              onPress={() => {
                setMenuVisible(true);
              }}
            />
          )
        }
        onSubmitEditing={({nativeEvent: {text}}) => {
          submitCityHandler(text);
        }}
        onFocus={() => setMenuVisible(true)}
        onBlur={() => {
          setMenuVisible(false);
          // setIsEmpty(false);
        }}
        onPressOut={() => setMenuVisible(true)}
        value={inputValue}
        onChangeText={text => {
          setInputValue(text);
          setMenuVisible(false);
          setIsEmpty(false);
        }}
      />

      {isEmpty && <EmptyError />}

      {menuVisible && <HeaderMenu />}
    </View>
  );
}
