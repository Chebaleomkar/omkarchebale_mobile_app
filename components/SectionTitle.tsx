import React from 'react'
import { Text, View } from 'react-native'

export default function SectionTitle({ title }: { title: string }) {
    return (
        <View className="mb-12 border-b border-blue-500 ">
            <Text className="text-white text-4xl font-black text-center mb-4 tracking-wide">
                {title}
            </Text>
        </View>
    )
}