import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const SocialButton = ({ icon, onPress, color }: { icon: string, onPress: () => void, color: string }) => (
    <TouchableOpacity
        onPress={onPress}
        className="w-14 h-14 rounded-full items-center justify-center mx-3 border-2 border-white/20"
        style={{ backgroundColor: color + '15' }}
    >
        <Ionicons name={icon as any} size={28} color={color} />
    </TouchableOpacity>
);
