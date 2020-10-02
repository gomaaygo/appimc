import React, {useState} from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import styled from 'styled-components';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Head = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const Title = styled.Text`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
`;

const Form = styled.View`
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  width: 350px;
  flex-direction: row;
`;

const Div = styled.View`
  width: 170px;
  margin: 2px 2px 2px 2px;
`;

const Label = styled.Text`
  font-size: 20px;
  margin: 5px 0px 5px 5px;
`;

const Input = styled.TextInput`
  width: 165px;
  background-color: #E1E1E1;
  margin: 5px 0px 5px 5px;
  border-radius: 5px;
  color: #000;
  font-size: 18px;
`;

const Btn = styled.View`
  flex: 1;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  width: 400px;
  height: 100px;
`;

const LabelItem = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
`;

const Item = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  margin-top: -9px;
`;

const AreaResult  = styled.View`
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const styles = StyleSheet.create({
  result_good: {
    backgroundColor: '#2A9C43'
  },
  result_danger: {
    backgroundColor: '#C23838'
  }
});

const App = () => {
  const [weight, updateWeight] = useState("");
  const [height, updateHeight] = useState("");
  const [imc, updateImc] = useState("");
  const [classification, updateClassification] = useState("");
  const [obesity, updateObesity] = useState("");
  const [status, updateStatus] = useState("");

  const calc_imc = () => {
    updateImc(weight/(height*height));
    updateStatus("False");
    if(imc < 18.5){
      return updateClassification("magreza"), updateObesity("0");
    }else if(imc >= 18.5 && imc <= 24.9){
      return updateClassification("normal"), updateObesity("0"), updateStatus("True");
    }else if(imc >= 25.0 && imc <= 29.9){
      return updateClassification("sobrepeso"), updateObesity("1");
    }else if(imc >= 30.0 && imc <= 39.9){
      return updateClassification("obesidade"), updateObesity("2");
    }else{
      return updateClassification("obesidade grave"), updateObesity("3");
    }
  };

  return (
    <Page>
      <Head>
        <Title>IMC</Title>
        <Subtitle>Índice de Massa Corporal</Subtitle>
      </Head>
        <Form>
          <Div>
            <Label>Peso:</Label>
            <Input value={weight} onChangeText={(weight) => updateWeight(weight)} keyboardType="numeric" />
          </Div>
          <Div>
            <Label>Altura:</Label>
            <Input value={height} onChangeText={(height) => updateHeight(height)} keyboardType="numeric" />
          </Div>
        </Form>
        <Btn>
          <Button color="#3A3434" title="C A L C U L A R" onPress={calc_imc}>
          </Button>
        </Btn>
        {imc > "" && status == "True" &&
          <AreaResult style={styles.result_good}>
            <LabelItem>IMC</LabelItem>
            <Item>{imc.toFixed(2)}</Item>
            <LabelItem>CLASSIFICAÇÃO</LabelItem>
            <Item>{classification}</Item>
            <LabelItem>obesidade (GRAU)</LabelItem>
            <Item>{obesity}</Item>
          </AreaResult>
        }
        {imc > "" && status == "False" &&
          <AreaResult style={styles.result_danger}>
            <LabelItem>IMC</LabelItem>
            <Item>{imc.toFixed(2)}</Item>
            <LabelItem>CLASSIFICAÇÃO</LabelItem>
            <Item>{classification}</Item>
            <LabelItem>obesidade (GRAU)</LabelItem>
            <Item>{obesity}</Item>
          </AreaResult>
        }
    </Page> 
  );
};

export default App;
