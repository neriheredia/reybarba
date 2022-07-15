import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import CircleButton from "../CircleButton";
import Icon from "react-native-vector-icons/AntDesign";
import { ListItemProps } from "./interfaces";
import * as RootNavigation from "../../../../app/navigation/navigationRef/NavigationRef";
import { styles } from "./styles";
import ListPricesComponent from "../ListPricesComponent";
import { ICar } from "../../../screens/Home/components/ListView/interfaces";
import ActionAnimation from "../ActionAnimation/ActionAnimation";
import { IPublication } from "../../interfaces/Interfaces";
import { moderateScale } from "../../helpers/scaling";
import { addPointsInText } from "../../../helpers/app";

const optionsDefault = {
  prices: true,
  valoration: true,
  favoriteButton: true,
  reservationButton: true,
  shareButton: true,
  offersButton: true,
  kmVehicle: true,
  branchModel: true,
};

const ListItem = ({
  item,
  options = optionsDefault,
  setFeatureNotAvaiable,
  publications,
  setPublications,
}: ListItemProps) => {
  const [action, setAction] = useState<"like" | "dislike" | "">("");
  const notAvaiable = () =>
    setFeatureNotAvaiable && setFeatureNotAvaiable(true);

  const handleHeartAction = () => {
    if (publications && setPublications) {
      const publicationsAux: IPublication[] = publications.map(
        (publication) => {
          if (publication._id === item._id) {
            setAction(publication.liked ? "dislike" : "like");
            return {
              ...publication,
              liked: !publication.liked,
            };
          } else {
            return { ...publication };
          }
        }
      );
      setPublications(publicationsAux);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.topSide}>
        <View style={styles.imageBackgroundMask} />
        {item.pictures.length > 0 && (
          <Image
            style={styles.carImage}
            resizeMode="cover"
            source={{ uri: item.pictures[0] }}
          />
        )}
        <View style={styles.detailContainer}>
          <View style={styles.topLeftDetail}>
            {options.branchModel ? (
              <View style={{ maxWidth: "90%" }}>
                <Text
                  numberOfLines={1}
                  style={[styles.text, styles.textCarName]}
                >
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.text}>
                  {item.primaryDescription}
                </Text>
              </View>
            ) : null}
            <View style={styles.bottomLeft}>
              {options.valoration ? (
                <View style={styles.averageContainer}>
                  <Icon
                    size={14}
                    name="star"
                    color="#f9b536"
                    style={{ alignSelf: "center" }}
                  />
                  <Text style={styles.starsText}>{item.valuation}</Text>
                  <Text style={styles.starsAvg}>({item.valuation})</Text>
                </View>
              ) : null}
              {options.kmVehicle ? (
                <Text style={styles.textKms}>
                  {addPointsInText(item.secondaryDescription)} km
                </Text>
              ) : null}
            </View>
          </View>
          <ActionAnimation action={action} setAction={setAction} />
          <View style={styles.buttonsContainer}>
            {options.favoriteButton ? (
              <CircleButton
                onPress={handleHeartAction}
                style={styles.circleButton}
                size={16}
                type={item.liked ? "hearto" : "heart"}
              />
            ) : null}
            {options.shareButton ? (
              <CircleButton
                onPress={notAvaiable}
                style={styles.circleButton}
                size={16}
                type="share"
              />
            ) : null}
            {options.reservationButton ? (
              <CircleButton
                style={styles.circleButton}
                size={16}
                onPress={() =>
                  RootNavigation.navigate("ReserveNavigator", {
                    screen: "Reserve",
                    params: { publication: item },
                  })
                }
                type={item.reserved ? "keyo" : "key"}
              />
            ) : null}
            {options.offersButton ? (
              <CircleButton
                onPress={notAvaiable}
                style={styles.circleButton}
                size={16}
                type="label"
              />
            ) : null}
          </View>
        </View>
      </View>
      {options.prices ? (
        <ListPricesComponent
          publicationPrice={item.publicationPrice}
          sellPrice={item.salePrice}
          reSellPrice={item.pickUpPrice}
        />
      ) : null}
      {options.belowSection && options.belowOptions ? (
        <View style={styles.belowSection}>
          <View style={[styles.flexRow, styles.justifySpaceBeet]}>
            {options.belowOptions.branchModel ? (
              <View style={[styles.flexRow, { alignItems: "flex-end" }]}>
                <Text
                  style={[styles.text, styles.textCarName, styles.fontColor]}
                >
                  {item.title}
                </Text>
                <Text style={styles.year}>{item.primaryDescription}</Text>
              </View>
            ) : null}
            {options.belowOptions.status ? (
              <View style={[styles.statusWrapper]}>
                <Text style={styles.status}>{item.status}</Text>
                {/* //Todo: fix */}
              </View>
            ) : null}
          </View>
          <View
            style={[styles.flexRow, styles.justifySpaceBeet, styles.margins]}
          >
            {options.belowOptions.kmVehicle ? (
              <Text style={[styles.km, styles.fontColor]}>
                {addPointsInText(item.secondaryDescription)} km
              </Text>
            ) : null}
            {options.belowOptions.price ? (
              <Text style={styles.price}>
                $ {addPointsInText(item.publicationPrice)}
              </Text>
            ) : null}
          </View>
          {options.belowOptions.description ? (
            <Text style={styles.description}>{item.description}</Text>
          ) : // //Todo: fix
          null}
        </View>
      ) : null}
    </View>
  );
};

export default ListItem;
