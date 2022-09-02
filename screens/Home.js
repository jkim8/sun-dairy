import react, { useEffect } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { useDB } from "../context";

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 50;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  elevation: 5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const Home = ({ navigation: { navigate } }) => {
  const realm = useDB(
    useEffect(() => {
      const feelings = realm.objects("Feeling");
      console.log(feelings);
    }, [])
  );

  return (
    <View>
      <Title>Sun Diary</Title>
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </View>
  );
};

export default Home;
