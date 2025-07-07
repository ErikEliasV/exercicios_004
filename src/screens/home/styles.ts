import styled from 'styled-components/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';

export const Container = styled(SafeAreaView)`
    background-color: #121212;
    align-items: center; 
    justify-content: center;
    flex: 1;
`

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
`

export const SubTitle = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 200;
    margin-top: 10px;
`

export const Input = styled.TextInput`
    background-color: #1E1E1E;
    border-radius: 5px;
    width: 80%;
    padding: 10px;
    color: #FFFFFF;
    border-width: 1px;
    border-color: #333333;
`

export const ButtonAdd = styled(TouchableOpacity)`
    background-color: #1DB954;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`

export const ButtonAddText = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
`

export const ViewRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 30px;
`

export const ViewList = styled.View`
    width: 100%;
    margin-top: 30px;
    gap: 10px;
    flex-direction: column;
`

export const ViewTask = styled.View`
    background-color: #1A1A1A;
    border-radius: 5px;
    border-width: 1px;
    border-color: #2E2E2E;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const TaskText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
`

