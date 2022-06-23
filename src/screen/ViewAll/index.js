import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Button,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

import axios from '../../utils/axios';

import CardHome from '../../components/CardHome';
import Footer from '../../components/Footer';

function ViewAll(props) {
  // const handleDetail = () => {
  //   props.navigation.navigate('Detail');
  // };

  // const handleJoin = () => {};

  // const handleViewAll = () => {
  //   props.navigation.navigate('List');
  // };

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 2000);
  }, [page]);

  // const getDataMovie = async () => {
  //   try {
  //     const result = await axios.get(`movie?page=${page}&limit=9`);
  //     setData(result.data.data);
  //     setTotalPage(result.data.pagination.totalPage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getDataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(`movie?page=${page}&limit=9`);
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataMovie();
    }
  };

  const handleLoadMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      const newPage = page + 1;
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };

  const ListHeader = () => {
    return (
      <>
        <Text
          style={{
            color: '#14142B',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 25,
          }}>
          List Movie
        </Text>
        <ScrollView horizontal={true} style={{ marginBottom: 30 }}>
          <Text style={styles.btnDateActive}>September</Text>
          <Text style={styles.btnDate}>October</Text>
          <Text style={styles.btnDate}>November</Text>
          <Text style={styles.btnDate}>December</Text>
        </ScrollView>
      </>
    );
  };

  console.log(refresh);

  return (
    <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
      <View>
        <View style={{ paddingVertical: 40, paddingHorizontal: 24 }}>
          <View>
            <FlatList
              data={data}
              ListHeaderComponent={ListHeader}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image
                    source={{
                      uri: `${process.env.REACT_APP_URL_CLOUDINARY}/${item.image}`,
                    }}
                    style={{ width: 110, height: 170, borderRadius: 6 }}
                  />
                  <Text
                    style={{ color: '#14142B', fontSize: 14, marginTop: 12 }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: '#A0A3BD',
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom: 25,
                      maxWidth: 120,
                      textAlign: 'center',
                    }}>
                    {item.category}
                  </Text>
                  <TouchableOpacity
                    style={{ width: '100%' }}
                    onPress={() =>
                      props.navigation.navigate('Detail', { data: item })
                    }>
                    <Text style={styles.btnCard}>Details</Text>
                  </TouchableOpacity>
                </View>
              )}
              onRefresh={handleRefresh}
              refreshing={refresh}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() =>
                last ? (
                  <View>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>
                      -- No more data --
                    </Text>
                    {/* <Footer /> */}
                  </View>
                ) : loading ? (
                  <ActivityIndicator size="large" color="blue" />
                ) : null
              }
            />
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
}

export default ViewAll;
