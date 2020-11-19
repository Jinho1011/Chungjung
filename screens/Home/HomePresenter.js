import React from "react";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { ActivityIndicator, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { width, height } = Dimensions.get("screen");

const Container = styled.ScrollView`
  flex: 1;
  padding-top: 60px;
  background-color: #fcfcfc;
`;

const Header = styled.View`
  display: flex;
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
`;

const HeaderUser = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #4b4b4b;
  font-weight: bold;
`;

const Slider = styled.View`
  width: ${width}px;
  height: 140px;
  padding: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.View`
  background-color: white;
  border-radius: 16px;
  height: 120px;
  margin-right: 8px;
  margin-left: 8px;
  padding: 16px;
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

const RecommandSection = styled.View`
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
  justify-content: space-between;
`;

const RecommandCategory = styled.Text`
  padding: 16px;
  font-size: 16px;
  color: #333;
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

export default ({ loading, policy, filtered, user }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="black" size="large"></ActivityIndicator>
    ) : (
      <>
        <Header>
          <HeaderSection>
            <HeaderIcon style={{ display: "none" }}>청정구역</HeaderIcon>
          </HeaderSection>
          <HeaderSection>
            <HeaderIcon>청정구역</HeaderIcon>
          </HeaderSection>
          <HeaderSection>
            <HeaderUser>{user.name}님</HeaderUser>
          </HeaderSection>
        </Header>
        <Slider>
          <Swiper
            controlsEnabled={false}
            loop
            timeout={3}
            springConfig={{ speed: 4, bounciness: 5 }}
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
            <RecommandSection key={p.id}>
              <RecommnadElements>
                <RecommandTitle>{p.title}</RecommandTitle>
                <RecommandCategory>{p.category} </RecommandCategory>
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
      </>
    )}
  </Container>
);