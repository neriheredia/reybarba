import React, { memo } from "react";
import { View, Text, Image } from "react-native";
import CircleButton from "../CircleButton";
import Icon from "react-native-vector-icons/AntDesign";
import { ListItemProps } from "./interfaces";
import { styles } from "./styles";
import { addPointsInText } from "../../../helpers/app";

const SimilarVehicleListItem = ({ item }: ListItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.topSide}>
        <View style={styles.imageBackgroundMask} />
        <Image style={styles.carImage} resizeMode="cover" source={item.image} />
        <View style={styles.detailContainer}>
          <View style={styles.topLeftDetail}>
            <View>
              <Text style={[styles.text, styles.textCarName]}>{item.name}</Text>
              <Text style={styles.text}>{item.date}</Text>
            </View>
            <View style={styles.bottomLeft}>
              {/* <View style={styles.averageContainer}>
                                <Icon size={14} name="star" color="#f9b536" style={{alignSelf:"center"}} />
                                <Text style={styles.starsText}>4.2</Text>
                                <Text style={styles.starsAvg}>(4)</Text>
                            </View> */}
              <Text style={styles.textKms}>{addPointsInText(item.kms)} km</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomSide}>
        <View style={styles.column}>
          <Text style={styles.priceTitle}>Precio Venta</Text>
          <View style={styles.salePriceContainer}>
            <Text style={styles.saleText}>$ {item.salePrice}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.column}>
          <Text style={styles.priceTitleBold}>Precio Linze</Text>
          <View style={styles.salePriceBoldContainer}>
            <Text style={styles.saleTextBold}>$ {item.salePrice}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.column}>
          <Text style={styles.priceTitle}>Precio Venta</Text>
          <View style={styles.salePriceContainer}>
            <Text style={styles.saleText}>$ {item.salePrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(SimilarVehicleListItem);
