import { Alert, Linking } from "react-native";

export const openLink = async (url: string) => {
    try {
        await Linking.openURL(url);
    } catch  {
        Alert.alert('Error', 'Could not open link');
    }
};