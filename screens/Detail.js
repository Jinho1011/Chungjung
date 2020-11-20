import React from "react";
import styled from "styled-components/native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const imageHeight = [3358, 2911, 4396, 3480];

const Container = styled.ScrollView`
  flex: 1;
  width: ${width}px;
`;

const View = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  width: ${width}px;
  padding-bottom: 40px;
`;

const PolicyImage = styled.Image`
  height: ${(props) => (props.imageHeight * width) / 947}px;
  width: ${width}px;
  margin-bottom: 20px;
`;

export default (route) => {
  const Images = [
    require("../assets/policy1.png"),
    require("../assets/policy2.png"),
    require("../assets/policy3.png"),
    require("../assets/policy4.png"),
  ];
  return (
    <Container>
      <View>
        <PolicyImage
          source={Images[route.route.params.id - 1]}
          imageHeight={imageHeight[route.route.params.id - 1]}
          // resizeMode={"cover"}
        ></PolicyImage>
        <YoutubePlayer height={220} videoId={route.route.params.url} />
      </View>
    </Container>
  );
};
