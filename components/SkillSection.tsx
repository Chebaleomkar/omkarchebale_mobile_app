import { skills } from '@/data'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import SectionTitle from './SectionTitle'
import { SkillCard } from './SkillCard'

export default function SkillSection() {
    return (
        <View className="py-20 px-8">
            <SectionTitle title="Skills & Technologies" />
            {skills.map((category, categoryIndex) => (
                <View key={categoryIndex} className="mb-12">
                    <Text className="text-white text-2xl font-bold mb-8 text-center">
                        {category.title}
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View className="flex-row px-4">
                            {category.skills.map((skill, i) => (
                                <SkillCard key={i} skill={skill} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
            ))}
        </View>
    )
}