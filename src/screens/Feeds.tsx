import React, { Dispatch, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { PostItem } from '../components/PostItem';
import { AppState } from '../store';
import { COLORS } from '../styles/colors';
import { FeedState } from '../types/StateTypes';
import { getFeeds, refreshFeeds } from './../actions/feedActions';

export const Feeds = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const feeds: FeedState = useSelector((state: AppState) => state.feed);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
  };

  const refreshHandler = () => {
    setRefreshing(true);
  };

  useEffect(() => {
    dispatch(getFeeds(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setRefreshing(false);
    dispatch(refreshFeeds());
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        renderItem={({ item }: any) => (
          <PostItem img={item.download_url} author={item.author} />
        )}
        keyExtractor={(item: any) => item.id}
        ListFooterComponent={<Loader />}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={1}
        refreshing={refreshing}
        onRefresh={refreshHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK,
    padding: 20,
  },
});
