import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

const ReviewCard = ({ review }: { review: any }) => (
    <View
        className="bg-gray-900/90 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 mx-4"
        style={{ width: screenWidth * 0.65, minHeight: 300 }}
    >
        <View className="flex-row mb-6">
            {[...Array(review.rating)].map((_, i) => (
                <Ionicons key={i} name="star" size={24} color="#FFD700" />
            ))}
        </View>

        <Text className="text-gray-300 text-lg leading-7 mb-6 italic flex-1">
            &quot;{review.review}&quot;
        </Text>

        <View className="border-t border-gray-700 pt-6 mt-auto">
            <Text className="text-white font-bold text-xl mb-1">{review.by}</Text>
            <Text className="text-gray-400 text-base">{review.profession}</Text>
        </View>
    </View>
);

export default ReviewCard