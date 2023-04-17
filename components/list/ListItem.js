import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        borderRadius: 5,
        padding: 20,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%"
    }
});