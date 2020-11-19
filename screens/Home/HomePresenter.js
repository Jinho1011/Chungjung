import React from "react";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { ActivityIndicator, Dimensions, StatusBar } from "react-native";
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
  padding-bottom: 10px;
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

const Slider = styled.View`
  width: ${width}px;
  height: 180px;
  padding: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.View`
  background-color: white;
  border-radius: 16px;
  height: 100%;
  margin-right: 8px;
  margin-left: 8px;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
`;

const SlideHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 4px;
  margin-bottom: 10px;
`;

const SlideBene = styled.Text`
  font-size: 16px;
  color: #333;
`;

const Recommand = styled.View`
  padding: 16px;
`;

const RecommandHeader = styled.Text`
  font-size: 16px;
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
  background-color: #546ea4;
  margin-right: 10px;
  border-radius: 12px;
`;

const RecommandUserText = styled.Text`
  color: white;
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
  background-color: #ff7979;
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
              {policy.map((p) => (
                <Section key={p.id}>
                  <SlideHeader>{p.title}</SlideHeader>
                  {p.url ? <SlideBene>{p.url}</SlideBene> : null}
                  <SlideBene>{p.benefits}</SlideBene>
                </Section>
              ))}
            </Swiper>
          </Slider>
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
                  <RecommandCategoryContainer>
                    <RecommandCategory>{p.category} </RecommandCategory>
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
