import { Text, View } from 'react-native'

export const SkillCard = ({ skill }: { skill: any }) => (
    <View className="bg-black/40 border border-green-400 rounded-2xl p-5 m-2 items-center min-w-[120px]">
        <View className="w-full items-center">
            <Text className="text-blue-300 text-lg font-semibold tracking-wide text-center">
                {skill.name}
            </Text>
        </View>
    </View>
)
