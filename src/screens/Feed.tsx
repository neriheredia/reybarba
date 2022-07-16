import React, { useMemo } from "react";
import { StyleSheet, FlatList, useWindowDimensions } from "react-native";

import ImageFeed from "../components/ImageFeed/ImageFeed";

export const Feed = () => {
  const { height, width } = useWindowDimensions();
  const images = [
    {
      id: 1,
      title: "Hola",
      url: "https://i.pinimg.com/564x/4a/67/c7/4a67c7597dbe38aba3263dfcb142c9c4.jpg",
      color: "red",
    },
    {
      id: 2,
      title: "Hola CHE",
      url: "https://i.pinimg.com/564x/9f/35/a0/9f35a044763ce8c4bbf1ae43e3086e90.jpg",
      color: "gray",
    },
    {
      id: 3,
      title: "HolaASSADA",
      url: "https://i.pinimg.com/564x/e6/e1/92/e6e19283e17d147492bb328e8d043277.jpg",
      color: "blue",
    },
    {
      id: 4,
      title: "HolaAss",
      url: "https://i.pinimg.com/564x/d0/92/0d/d0920d6d62ea3824efa33eea9b713f14.jpg",
      color: "yellow",
    },
    {
      id: 5,
      title: "HolaASSADA",
      url: "https://i.pinimg.com/564x/45/92/9e/45929e10dc2699ecad6a3aa06719d903.jpg",
      color: "green",
    },
    {
      id: 6,
      title: "HolaASSADA",
      url: "https://i.pinimg.com/564x/84/a1/8b/84a18bff5f7e7f5768737122721a14b3.jpg",
      color: "black",
    },
  ];

  const snapToOffsets = useMemo(() => {
    let offSets: Array<number> = [];
    images.forEach((_, index) => {
      offSets.push(height * index);
    });
    return offSets;
  }, [images, height]);

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ImageFeed coment={item} height={height} url={item.url} width={width} />
      )}
      scrollEnabled={true}
      pagingEnabled={true}
      decelerationRate="fast"
      snapToOffsets={snapToOffsets}
    />
  );
};

const styles = StyleSheet.create({});
