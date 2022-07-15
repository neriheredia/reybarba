import React from "react";
import { View, Text } from "react-native";
import { addPointsInText } from "../../../helpers/app";
import { styles } from "./styles";

const ListPricesComponent = ({
  sellPrice = 0,
  publicationPrice = 0,
  reSellPrice = 0,
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.column, { marginLeft: 8 }]}>
        <Text style={styles.priceTitle}>Precio Venta</Text>
        <View style={styles.salePriceContainer}>
          <Text numberOfLines={1} style={styles.saleText}>
            $ {addPointsInText(sellPrice) || "-"}
          </Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.column}>
        <Text numberOfLines={1} style={styles.priceTitleBold}>
          Precio Publicación
        </Text>
        <View style={styles.salePriceBoldContainer}>
          <Text style={styles.saleTextBold}>
            $ {addPointsInText(publicationPrice) || "-"}
          </Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={[styles.column, { marginRight: 8 }]}>
        <Text numberOfLines={1} style={styles.priceTitle}>
          Precio Retoma
        </Text>
        <View style={styles.salePriceContainer}>
          <Text style={styles.saleText}>
            $ {addPointsInText(reSellPrice) || "-"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListPricesComponent;
