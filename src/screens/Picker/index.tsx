import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ChipsInput, Picker as Picke, Slider, Switch} from 'react-native-ui-lib';
import {PickerItemLabeledValue} from 'react-native-ui-lib/typings';

// import { Container } from './styles';

const Picker: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [languages, setLanguages] = useState({});
  const [val, setVal] = useState(0);
  const [list, setList] = useState([{}]);

  const options = [
    {label: 'JavaScript', value: 'js'},
    {label: 'Java', value: 'java'},
    {label: 'Python', value: 'python'},
    {label: 'C++', value: 'c++', disabled: false},
    {label: 'Perl', value: 'perl'},
  ];

  return (
    <>
      {/* <Switch value={selected} onValueChange={() => setSelected(!selected)} />
      <Text>{String(selected)}</Text>
      <View style={{flexDirection: 'row'}}>
        <Slider
          onValueChange={(value: number) => {
            setVal(value);
          }}
          value={0}
          minimumValue={0}
          maximumValue={100}
          step={1}
          containerStyle={{
            flex: 3,
            marginHorizontal: 8,
          }}
          disableRTL
        />
        <Text style={{flex: 1}}>{val}%</Text>
      </View>
      <Text>{Object.keys(list).length}</Text>
      <ChipsInput
        placeholder={'Placeholder'}
        chips={list}
        onCreateTag={(value: string) => {
          setList([...list, {label: value}]);
        }}
      /> */}
      <Picke
        placeholder="Favorite Language"
        floatingPlaceholder
        showSearch
        value={languages}
        topBarProps={{title: 'Languages'}}
        onChange={(items: PickerItemLabeledValue) => setLanguages(items)}
        mode="MULTI"
        // selectionLimit={3}
        searchPlaceholder={'Search a language'}>
        {options.map(option => (
          <Picke.Item
            key={option.value}
            value={option}
            disabled={option.disabled}
            // label={option.label}
          />
        ))}
      </Picke>
    </>
  );
};

export default Picker;
