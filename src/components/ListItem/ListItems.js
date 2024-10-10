import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text, Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',   decription:"sdsdsdsdsd",

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chines',   decription:"sdsdsdsdsd",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ICT',   decription:"sdsdsdsdsd",
  }, {
    id: '58694a0f-3da1-42471f-bd96-145571e29d72',
    title: 'ICT',   decription:"sdsdsdsdsd",
  }, {
    id: '58694a0f-3da1-4271f-bd96-145571e29d72',
    title: 'ICT',   decription:"sdsdsdsdsd",
  }, {
    id: '58694a0f-3da1-4471f-bd96-145571e29d72',
    title: 'ICT',
    decription:"sdsdsdsdsd",
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    <Text style={[styles.decription, {color: textColor}]}>{item.decription}</Text>
  </TouchableOpacity>
);

const ListItems = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#ccc' : '#cca';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
   
      <FlatList style={styles.titlearea}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  item: {
    padding: 20,
   
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  titlearea:{
    width:"100%",
  },
});

export default ListItems;