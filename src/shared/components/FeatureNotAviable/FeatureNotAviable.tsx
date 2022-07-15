import React from "react";
import { View, Text } from "react-native";
import Modal from "../Modal/Modal";
import { styles } from "./styles";
import LottieView from "lottie-react-native";
import { gif } from "../../../constants/images";
import Button from "../Button";
import { moderateScale, verticalModerateScale } from "../../helpers/scaling";

interface FeatureNotAviableProps {
  setOpenModal: (a: boolean) => void;
  openModal: boolean;
  onClose?: Function;
}

const FeatureNotAviable = ({
  setOpenModal,
  openModal,
  onClose,
}: FeatureNotAviableProps) => {
  const _onClose = () => {
    setOpenModal(false);
    onClose && onClose();
  };

  return (
    <Modal
      setOpenModal={setOpenModal}
      openModal={openModal}
      type="center"
      onClose={_onClose}
    >
      <View
        style={{
          flexDirection: "column",
          position: "relative",
          height: moderateScale(260, 1.1),
        }}
      >
        <View style={styles.wrapper}>
          <View style={styles.gifWrapper}>
            <LottieView source={gif.car} autoPlay loop />
          </View>
          <View style={styles.content}>
            <Text
              numberOfLines={2}
              ellipsizeMode={"tail"}
              style={styles.mainText}
            >
              {"¡Falta poco!"}
            </Text>
            <Text
              numberOfLines={3}
              ellipsizeMode={"tail"}
              style={styles.descriptionText}
            >
              {
                "Esta sección aún no está disponible \n Estamos trabajando en ello."
              }
            </Text>
            <Button
              title="Entendido"
              onPress={_onClose}
              stylesCustom={{ marginTop: verticalModerateScale(30, 1.1) }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default FeatureNotAviable;
