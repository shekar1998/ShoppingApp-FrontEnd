import React from 'react';
import {FlatList} from 'react-native';

export default function VirtualizedView(props: any) {
  return (
    <FlatList
      style={{width: '100%', height: '100%'}}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
