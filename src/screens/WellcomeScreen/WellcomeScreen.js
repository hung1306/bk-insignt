import { Text, StyleSheet } from "react-native"

export const WellcomeScreen = () => {
    return (
        <Text style={styles.container}>Wellcome Page</Text>
    )
}
const styles = StyleSheet.create({
    container: {
        fontFamily: 'OpenSans-BoldItalic',
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});