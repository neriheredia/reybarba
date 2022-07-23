import React, { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  View,
} from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/ActionsAuth/RegisterAuth";
import ImageFeed from "../../components/ImageFeed/ImageFeed";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { singOutUser } from "../../utils/ActionsAuth/SingOut";
import { images } from "../../constants/images";
import { colors } from '../../constants/colors';
import { TAB_BAR_HEIGHT } from '../../helpers/app';
import { moderateScale } from "../../shared/helpers/scaling";

export const Feed = () => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [currentUser, setCurrentUser] = useState(false);
  const imagesArray = [
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
    imagesArray.forEach((_, index) => {
      offSets.push((height - TAB_BAR_HEIGHT) * index);
    });
    return offSets;
  }, [imagesArray, height]);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        return setCurrentUser(true);
      } else {
        return setCurrentUser(false);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={imagesArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageFeed
            coment={item}
            height={height}
            url={item.url}
            width={width}
          />
        )}
        style={{flex:1}}
        scrollEnabled={true}
        pagingEnabled={true}
        decelerationRate="fast"
        snapToOffsets={snapToOffsets}
      />
      {true && (
        <TouchableOpacity onPress={() => singOutUser()} style={styles.logout}>
          <Avatar.Image
            size={40}
            source={images.person2}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  logout: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: moderateScale(13,6),
    right: moderateScale(10,7),
  },
});
