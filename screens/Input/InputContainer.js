import React, { useState } from "react";
import { CommonActions } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@USER", JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

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
  margin-bottom: 3px;
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
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fbc651;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
  z-index: 10;
`;

const InputButtonText2 = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const InputHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
  align-items: center;
`;

const InputHeaderIcon = styled.Image`
  width: 48px;
  height: 48px;
`;

const Padding = styled.View`
  height: 40px;
`;

export default ({ navigation }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [edu, setEdu] = useState("");

  return (
    <InputContainer>
      <InputHeaderContainer>
        <InputHeaderIcon
          source={require("../../assets/logo-black.png")}
        ></InputHeaderIcon>
        <InputHeaderText>인적 사항을 알려주세요 </InputHeaderText>
      </InputHeaderContainer>

      <InputGroup>
        <InputLabel>이름</InputLabel>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          placeholderTextColor="white"
          caretHidden={true}
          onChangeText={(val) => setName(val)}
        />
      </InputGroup>

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
            storeData({
              name: name,
              sex: sex,
              age: age,
              region: region,
              edu: edu,
            });

            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Tab" }],
              })
            );
          }}
        >
          <InputButtonText2>확인</InputButtonText2>
        </InputButton3>
      </InputGroup>
    </InputContainer>
  );
};
