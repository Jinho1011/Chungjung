import React, { useState, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
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

var regionArr = [
  {
    label: "서울특별시",
    value: "서울특별시",
  },
  {
    label: "경기도",
    value: "경기도",
  },
  {
    label: "강원도",
    value: "강원도",
  },
  {
    label: "",
    value: "서울특별시",
  },
  {
    label: "서울특별시",
    value: "서울특별시",
  },
];

const InputContainer = styled.View`
  padding: 12px;
  padding-top: 80px;
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
  border-bottom-width: 2px;
  border-bottom-color: black;
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
  background-color: #525252;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const InputButtonText2 = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default ({ navigation }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");

  return (
    <InputContainer>
      <InputHeaderText>인적 사항을 알려주세요 👋 </InputHeaderText>

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
      </InputGroup>

      <InputGroup
        style={{
          zInedx: 4000,
        }}
      >
        <InputLabel>지역</InputLabel>
        <DropDownPicker
          items={regionArr}
          containerStyle={{ height: 46 }}
          placeholder="지역을 선택하세요"
          onChangeItem={(item) => setAge(item.value)}
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
      </InputGroup>

      <InputGroup
        style={{
          zInedx: 10,
        }}
      >
        <InputLabel>학력</InputLabel>
        <DropDownPicker
          items={ageArr}
          containerStyle={{ height: 46 }}
          placeholder="학력을 선택하세요"
          onChangeItem={(item) => setAge(item.value)}
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
      </InputGroup>

      {/* <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setPass(val)}
      /> */}

      {/* <TextInput
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setEmail(val)}
      /> */}

      <InputButton3
        onPress={() => {
          storeData("USER", {});

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
    </InputContainer>
  );
};
