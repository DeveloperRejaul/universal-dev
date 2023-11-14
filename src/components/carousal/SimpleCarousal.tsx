import { Box, FlatList, Text } from '@gluestack-ui/themed';
import React from 'react';
import { rh, rw } from 'src/constants/dimensions';

type ListItems = {
  id: string;
  title: string;
};

const DATA: ListItems[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };
function Item({ title }: ItemProps) {
  return (
    <Box
      width={rw(90)}
      justifyContent='center'
      height={'$full'}
      backgroundColor='$red400'
      borderRadius={'$md'}
      alignItems='center'
      marginHorizontal={rw(2.5)}>
      <Text>{title}</Text>
    </Box>
  );
}

export default function SimpleCarousal() {
  const onScroll = (event) => {};

  return (
    <Box height={'$40'}>
      <FlatList
        pagingEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        horizontal
        data={DATA}
        renderItem={({ item }: { item: any }) => <Item title={item.title} />}
        keyExtractor={(item: any) => item.id}
      />
    </Box>
  );
}
