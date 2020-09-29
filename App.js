import React, {useState} from 'react';
import {Text, Button} from 'react-native';
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

const AreaResult = styled.View`
  background-color: #f2f4;
`;

const App = () => {
  return (
    <Page>
      <Head>
        <Title>IMC</Title>
        <Subtitle>Índice de Massa Corporal</Subtitle>
      </Head>
        <Form>
          <Div>
            <Label>Peso:</Label>
            <Input />
          </Div>
          <Div>
            <Label>Altura:</Label>
            <Input />
          </Div>
        </Form>
        <Btn>
          <Button color="#3A3434" title="C A L C U L A R">
          </Button>
        </Btn>
        <AreaResult>
        <Text>Area de Resultado</Text>
        </AreaResult>
    </Page> 
  );
};

export default App;
