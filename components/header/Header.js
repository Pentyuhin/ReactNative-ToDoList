import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        backgroundColor: 'silver',
        height: 100,
    },
    text: {
        fontWeight: 700,
        color: 'red',
        fontSize: 15,
        textAlign: "center"
    }
});