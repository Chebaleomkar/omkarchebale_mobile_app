import { openLink } from "@/utils/openLink";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
const { width: screenWidth } = Dimensions.get('window');

const ProjectCard = ({ project }: { project: any }) => (
    <View style={{ width: screenWidth * 0.75 }} className="rounded-2xl px-6 py-5 mx-4 my-3 shadow-md border border-orange-600">

        {/* Header */}
        <View className="mb-3">
            <Text className="text-3xl font-bold text-white">
                {project.title}
            </Text>
        </View>

        {/* Description */}
        <Text className="text-gray-400 text-sm leading-6 mb-4">
            {project.description}
        </Text>

        {/* Tags */}
        <View className="flex-row flex-wrap mb-4">
            {project.tags.map((tag: any, index: number) => (
                <View
                    key={index}
                    className="bg-blue-100 dark:bg-blue-800 px-3 py-1.5 rounded-full mr-2 mb-2"
                >
                    <Text className="text-xs text-blue-800 dark:text-blue-200 font-medium">
                        {tag}
                    </Text>
                </View>
            ))}
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-3">
            {project.webapp && (
                <TouchableOpacity
                    onPress={() => openLink(project.webapp)}
                    activeOpacity={0.8}
                    className="flex-1 flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg"
                >
                    <Ionicons name="open-outline" size={16} color="#FFFFFF" />
                    <Text className="ml-2 text-white font-semibold text-sm">Live Demo</Text>
                </TouchableOpacity>
            )}

            {project.github && (
                <TouchableOpacity
                    onPress={() => openLink(project.github)}
                    activeOpacity={0.8}
                    className="flex-1 flex-row items-center justify-center bg-gray-100 dark:bg-gray-800 py-3 rounded-lg"
                >
                    <Ionicons
                        name="logo-github"
                        size={16}
                        color={project.theme === 'dark' ? '#D1D5DB' : '#374151'}
                    />
                    <Text className="ml-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                        View Code
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    </View>
);

export default ProjectCard;