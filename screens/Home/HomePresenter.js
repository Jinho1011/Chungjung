import React from "react";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { ActivityIndicator, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fcfcfc;
`;

const Background = styled.Image`
  flex: 1;
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  top: 0;
`;

const Header = styled.View`
  display: flex;
  padding-top: 60px;
  flex-direction: row;
  width: 100%;
  padding-bottom: 24px;
`;

const HeaderSection = styled.View`
  flex: 1;
`;

const HeaderIcon = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const HeaderUser = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #4b4b4b;
  font-weight: bold;
`;

const SliderContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const Slider = styled.View`
  width: 100%;
  height: 180px;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.View`
  background-color: white;
  border-radius: 16px;
`;

const SlideImage = styled.Image`
  border-radius: 16px;

  height: 180px;
  width: 100%;
`;

const Recommand = styled.View`
  margin-top: 24px;
  padding: 16px;
`;

const RecommandHeader = styled.Text`
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
`;

const RecommandUserContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const RecommandUser = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 14px;
  padding-left: 14px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  border-radius: 12px;
  border-width: 2px;
  border-color: #34314c;
`;

const RecommandUserText = styled.Text`
  color: #34314c;
  font-size: 16px;
  font-weight: bold;
`;

const RecommandSection = styled.TouchableOpacity`
  padding-bottom: 10px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
`;

const RecommnadElements = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: space-between;
`;

const RecommandCategoryContainer = styled.View`
  border-radius: 16px;
  ${(props) => {
    if (props.category == "설자리") {
      return "background-color: #61c99c";
    } else if (props.category == "일자리") {
      return "background-color: #FCC751";
    } else if (props.category == "살자리") {
      return "background-color: #47B8E0";
    } else if (props.category == "놀자리") {
      return "background-color: #FF7473";
    }
  }};
`;

const RecommandCategory = styled.Text`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 14px;
  padding-left: 14px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const RecommandTitle = styled.Text`
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
`;

const RecommnadElement = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RecommandSub = styled.Text`
  flex: 1;
  font-size: 16px;
  padding-right: 16px;
  font-weight: bold;
  color: #333;
`;

const RecommandMain = styled.Text`
  flex: 4;
  font-size: 16px;
  color: #262626;
  overflow: hidden;
`;

const Padding = styled.View`
  padding-top: 60px;
`;

const StatusBar = styled.StatusBar``;

const Images = [
  require("../../assets/banner1.png"),
  require("../../assets/banner2.png"),
];

export default ({ loading, policy, filtered, user }) => {
  const navigation = useNavigation();
  const goToDetail = (id, url) => {
    if (id == 1) {
      navigation.navigate("Detail", {
        id,
        url,
      });
    } else if (id == 2) {
      navigation.navigate("Detail", {
        id,
        url,
      });
    } else if (id == 3) {
      navigation.navigate("Detail", {
        id,
        url,
      });
    } else if (id == 4) {
      navigation.navigate("Detail", {
        id,
        url,
      });
    }
  };

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="black" size="large"></ActivityIndicator>
      ) : (
        <>
          <Background
            source={require("../../assets/homeBackground.png")}
          ></Background>
          <Header>
            <HeaderSection>
              <HeaderIcon style={{ display: "none" }}>청정구역</HeaderIcon>
            </HeaderSection>
            <HeaderSection>
              <HeaderIcon>청정구역</HeaderIcon>
            </HeaderSection>
            <HeaderSection>
              <HeaderIcon style={{ display: "none" }}>청정구역</HeaderIcon>
            </HeaderSection>
          </Header>
          <SliderContainer>
            <Slider>
              <Swiper
                controlsEnabled={true}
                loop
                timeout={3}
                springConfig={{ speed: 4, bounciness: 5 }}
                controlsProps={{
                  prevTitle: "<",
                  nextTitle: ">",
                }}
              >
                {Images.map((i) => (
                  <Section key={i}>
                    <SlideImage
                      source={i}
                      style={{
                        resizeMode: "cover",
                      }}
                    ></SlideImage>
                  </Section>
                ))}
              </Swiper>
            </Slider>
          </SliderContainer>

          <Recommand>
            <RecommandHeader>사용자 맞춤형 정책</RecommandHeader>
            <RecommandUserContainer>
              <RecommandUser>
                <RecommandUserText>{user.age}살</RecommandUserText>
              </RecommandUser>
              <RecommandUser>
                <RecommandUserText>{user.sex}</RecommandUserText>
              </RecommandUser>
              <RecommandUser>
                <RecommandUserText>{user.region}</RecommandUserText>
              </RecommandUser>
              <RecommandUser>
                <RecommandUserText>{user.edu}</RecommandUserText>
              </RecommandUser>
            </RecommandUserContainer>

            {filtered.map((p) => (
              <RecommandSection
                key={p.id}
                onPress={() => goToDetail(p.id, p.url)}
              >
                <RecommnadElements>
                  <RecommandTitle>{p.title}</RecommandTitle>
                  <RecommandCategoryContainer category={p.category}>
                    <RecommandCategory>{p.category}</RecommandCategory>
                  </RecommandCategoryContainer>
                </RecommnadElements>

                <YoutubePlayer
                  height={220}
                  videoId={p.url == "" ? "I5jPmK5sSIM" : p.url}
                />

                <RecommnadElement>
                  <RecommandSub>혜택</RecommandSub>
                  <RecommandMain>{p.benefits}</RecommandMain>
                </RecommnadElement>
                <RecommnadElement>
                  <RecommandSub>현재 상태</RecommandSub>
                  <RecommandMain>{p.state}</RecommandMain>
                </RecommnadElement>
              </RecommandSection>
            ))}
          </Recommand>
          <Padding></Padding>
          <StatusBar barStyle={"light-content"}></StatusBar>
        </>
      )}
    </Container>
  );
};
