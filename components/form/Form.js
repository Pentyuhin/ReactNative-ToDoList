import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useState} from "react";

export default function Form({addHandler}) {
    const [text, setValue] = useState('')

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.main}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder={"Напишите задачу..."}/>
            <Button color={'green'} onPress={() => addHandler(text)} title={'Добавить задачу'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: '#000',
        borderBottomWidth: 1,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    },

});