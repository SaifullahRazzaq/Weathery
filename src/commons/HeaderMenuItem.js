import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Menu} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Colors} from '@app/constants';
import {clearRecentSearches} from '@app/redux';
import {HeaderMenuItemStyles as Styles} from '@app/assets/styles';

export default function HeaderMenuItem({data, setMenuVisible, setInputValue}) {
  const dispatch = useDispatch();

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        <Text
          style={{
            ...Styles.recentText,
            color: Colors.inactiveWeatherDetailsCardText,
          }}>
          Recent searches
        </Text>

        {Array.isArray(data) && data.length > 0 ? (
          <TouchableOpacity onPress={() => dispatch(clearRecentSearches())}>
            <Text style={Styles.recentText}>Clear</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {Array.isArray(data) && data.length ? (
        <View style={{flex: 1}}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={data}
            keyExtractor={item => item}
            contentContainerStyle={Styles.listContentContainer}
            renderItem={({item}) => (
              <Menu.Item
                title={item}
                dense
                style={Styles.menuItem}
                onPress={() => {
                  setInputValue(item);
                  setMenuVisible(false);
                }}
              />
            )}
          />
        </View>
      ) : (
        <View style={Styles.emptyRecentTextContainer}>
          <Text style={Styles.emptyRecentText}>
            No recent searches to display...
          </Text>
        </View>
      )}
    </View>
  );
}
