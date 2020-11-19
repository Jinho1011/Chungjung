import React from "react";
import styled from "styled-components/native";
import YoutubePlayer from "react-native-youtube-iframe";

const Image = styled.Image``;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fcfcfc;
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
      <Image source={Images[route.route.params.id - 1]}></Image>
      <YoutubePlayer height={220} videoId={route.route.params.url} />
    </Container>
  );
};
