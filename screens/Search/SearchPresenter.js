import React, { useState } from "react";
import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";
import { ActivityIndicator, Dimensions, StatusBar } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

var ageArr = [];

for (var i = 0; i < 64; i++) {
  var age = i + 18;
  ageArr.push({
    label: age.toString(),
    value: age.toString(),
  });
}

var eduArr = [
  {
    label: "대학생",
    value: "대학생",
  },
  {
    label: "대학원생",
    value: "대학원생",
  },
  {
    label: "대졸",
    value: "대졸",
  },
  {
    label: "고졸",
    value: "고졸",
  },
];

var regionArr = [
  {
    label: "서울",
    value: "서울",
  },
  {
    label: "경기",
    value: "경기",
  },
  {
    label: "부산",
    value: "부산",
  },
  {
    label: "인천",
    value: "인천",
  },
  {
    label: "대구",
    value: "대구",
  },
  {
    label: "광주",
    value: "광주",
  },
  {
    label: "대전",
    value: "대전",
  },
  {
    label: "울산",
    value: "울산",
  },
  {
    label: "강원",
    value: "강원",
  },
  {
    label: "충북",
    value: "충북",
  },
  {
    label: "충남",
    value: "충남",
  },
  {
    label: "전북",
    value: "전북",
  },
  {
    label: "전남",
    value: "전남",
  },
  {
    label: "경남",
    value: "경남",
  },
  {
    label: "제주",
    value: "제주",
  },
];

const InputContainer = styled.View`
  padding: 12px;
  padding-top: 60px;
  background: #fcfcfc;
  height: 100%;
  display: flex;
`;

const InputHeaderText = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-bottom: 36px; ;
`;

const InputLabel = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-bottom: 12px;
`;

const TextInput = styled.TextInput`
  border-radius: 6px;
  height: 52px;
  font-size: 24px;
  font-weight: 800;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  color: black;
  border-bottom-width: 1px;
  border-bottom-color: #333;
`;

const InputGroup = styled.View`
  margin-bottom: 32px;
`;

const ButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputButton1 = styled.TouchableOpacity`
  width: 180px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #525252;
  background-color: ${(props) => (props.sex == "남성" ? "#F3F3F3" : "#fff")};
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const InputButton2 = styled.TouchableOpacity`
  width: 180px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #525252;
  background-color: ${(props) => (props.sex == "여성" ? "#F3F3F3" : "#fff")};
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const InputButtonText = styled.Text`
  text-align: center;
`;

const InputButton3 = styled.TouchableOpacity`
  width: 100%;
  margin-top: 48px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fbc651;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const InputButtonText2 = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

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

const View = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
`;

const Header = styled.View`
  display: flex;
  padding-top: 60px;
  flex-direction: row;
  width: 100%;
  padding-bottom: 90px;
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

const SearchBarContainer = styled.View`
  display: flex;
  align-items: center;
`;

const OptionButton = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: #35314c;
  width: 100px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 16px;
`;

const OptionText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

const Modal = styled.Modal``;

const ModalView = styled.View`
  padding: 20px;
  background-color: #fff;
  border-radius: 24px;
  width: ${width}px;
  position: absolute;
  box-shadow: 0px -5px 16px rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;
`;

const CategoryGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const CategoryButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 16px;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryText = styled.Text`
  color: #ccc;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

const HeaderUser = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #4b4b4b;
  font-weight: bold;
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

const checkAge = (ageRange, age) => {
  var range = ageRange.split("-");
  var start = parseInt(range[0]);
  var end = parseInt(range[1]);

  if (start <= age && age <= end) return true;
  else false;
};

const checkEdu = (eduOpt, edu) => {
  if (eduOpt == "무관") {
    return true;
  } else {
    if (eduOpt.includes(edu)) return true;
    else false;
  }
};

export default ({ loading, policy }) => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState("설자리");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [edu, setEdu] = useState("");
  const navigation = useNavigation();
  const goToDetail = (id, url) => {
    navigation.navigate("Detail", {
      id,
      url,
    });
  };

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="black" size="large"></ActivityIndicator>
      ) : (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <ModalView>
              <InputGroup>
                <InputLabel>성별</InputLabel>
                <ButtonGroup>
                  <InputButton1
                    onPress={() => {
                      setSex("남성");
                    }}
                    sex={sex}
                  >
                    <InputButtonText>남</InputButtonText>
                  </InputButton1>
                  <InputButton2
                    onPress={() => {
                      setSex("여성");
                    }}
                    sex={sex}
                  >
                    <InputButtonText>여</InputButtonText>
                  </InputButton2>
                </ButtonGroup>
              </InputGroup>

              <InputGroup
                style={{
                  zInedx: 5000,
                }}
              >
                <InputLabel>나이</InputLabel>
                <DropDownPicker
                  items={ageArr}
                  containerStyle={{ height: 46 }}
                  placeholder="나이를 선택하세요"
                  onChangeItem={(item) => setAge(item.value)}
                  zIndex={2000}
                  style={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    backgroundColor: "#fff",
                    borderColor: "#ffffff",
                    shadowColor: "#4d4d4d",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                  }}
                  dropDownStyle={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    backgroundColor: "#fff",
                    borderColor: "#ffffff",
                    shadowColor: "#4d4d4d",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                  }}
                />
                <Padding></Padding>
                <InputLabel>지역</InputLabel>
                <DropDownPicker
                  items={regionArr}
                  containerStyle={{ height: 46 }}
                  placeholder="지역을 선택하세요"
                  onChangeItem={(item) => setRegion(item.value)}
                  zIndex={1800}
                  style={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    backgroundColor: "#fff",
                    borderColor: "#ffffff",
                    shadowColor: "#4d4d4d",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                  }}
                  dropDownStyle={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    backgroundColor: "#fff",
                    borderColor: "#ffffff",
                    shadowColor: "#4d4d4d",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                  }}
                />
                <Padding></Padding>

                <InputLabel>학력</InputLabel>
                <DropDownPicker
                  items={eduArr}
                  containerStyle={{ height: 46 }}
                  placeholder="학력을 선택하세요"
                  onChangeItem={(item) => setEdu(item.value)}
                  zIndex={1600}
                  style={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    backgroundColor: "#fff",
                    borderColor: "#ffffff",
                    shadowColor: "#4d4d4d",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                  }}
                  dropDownStyle={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    backgroundColor: "#fff",
                    borderColor: "#ffffff",
                    shadowColor: "#4d4d4d",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                  }}
                />

                <InputButton3
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <InputButtonText2>적용</InputButtonText2>
                </InputButton3>
              </InputGroup>
            </ModalView>
          </Modal>
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
          <SearchBarContainer>
            <SearchBar
              placeholder="검색"
              value={search}
              lightTheme={true}
              onChangeText={(text) => setSearch(text)}
              containerStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,
                elevation: 15,
                borderRadius: "18px",
                width: "100%",
                backgroundColor: "white",
              }}
              inputContainerStyle={{
                backgroundColor: "white",
              }}
            />
          </SearchBarContainer>
          <OptionButton
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <OptionText>옵션 선택</OptionText>
          </OptionButton>

          <CategoryGroup>
            <CategoryButton
              onPress={() => {
                setSelected("설자리");
              }}
            >
              <CategoryText>설자리</CategoryText>
            </CategoryButton>
            <CategoryButton
              onPress={() => {
                setSelected("일자리");
              }}
            >
              <CategoryText>일자리</CategoryText>
            </CategoryButton>
            <CategoryButton
              onPress={() => {
                setSelected("살자리");
              }}
            >
              <CategoryText>살자리</CategoryText>
            </CategoryButton>
            <CategoryButton
              onPress={() => {
                setSelected("놀자리");
              }}
            >
              <CategoryText>놀자리</CategoryText>
            </CategoryButton>
          </CategoryGroup>

          {policy.map((p) => {
            if (
              p.category == selected &&
              (sex == "" ? true : p.sex == "무관" ? true : p.sex == sex) &&
              (age == "" ? true : checkAge(p.age, age)) &&
              (edu == "" ? true : checkEdu(p.edu, edu)) &&
              (search == "" ? true : p.title.includes(search))
            )
              return (
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
              );
          })}

          <Padding></Padding>
          <StatusBar barStyle={"light-content"}></StatusBar>
        </View>
      )}
    </Container>
  );
};
