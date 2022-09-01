import react from "react";
import styled from "styled-components/native";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Home = ({ navigation: { navigate } }) => (
  <View>
    <Btn onPress={() => navigate("Write")}>
      <BtnText>Go Write</BtnText>
    </Btn>
    <Text>Home</Text>
  </View>
);

export default Home;
