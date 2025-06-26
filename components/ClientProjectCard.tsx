import { Dimensions, Text, View } from "react-native";
const { width: screenWidth } = Dimensions.get('window');

const ClientProjectCard = ({ project }: { project: any }) => (
    <View
        className="bg-gradient-to-br flex flex-col justify-between from-blue-900/80 to-pink-900/80 rounded-3xl p-8 border border-blue-500/30 mx-3"
        style={{ width: screenWidth * 0.75, height: 500 }}
    >
        <View className="mb-6">
            <Text className="text-white text-2xl font-bold mb-2">{project.business}</Text>
            <Text className="text-purple-300 text-xl font-semibold mb-2">{project.project}</Text>
            <Text className="text-gray-400 text-base">{project.year}</Text>
        </View>

        <Text className="text-gray-300 text-lg leading-7 mb-6">
            {project.description}
        </Text>

        <View className="bg-green-500/20 px-6 py-4 rounded-2xl border border-green-500/30">
            <Text className="text-green-300 text-base font-semibold mb-2">Impact:</Text>
            <Text className="text-white text-base leading-6">{project.impact}</Text>
        </View>
    </View>
);


export default ClientProjectCard;