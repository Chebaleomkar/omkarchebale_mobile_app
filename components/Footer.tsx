import { Bio } from '@/data'
import { openLink } from '@/utils/openLink'
import React from 'react'
import { Text, View } from 'react-native'
import { SocialButton } from './SocialButton'

export default function Footer() {
    return (
        <View className=" py-16 px-8">
            <View className="items-center">
                <Text className="text-white text-3xl font-black mb-6">
                    {Bio.name}
                </Text>

                <Text className="text-gray-400 text-lg text-center mb-10">
                    Building digital solutions that make a difference
                </Text>

                <View className="flex-row mb-10">
                    <SocialButton
                        icon="logo-github"
                        onPress={() => openLink(Bio.github)}
                        color="#fff"
                    />
                    <SocialButton
                        icon="logo-linkedin"
                        onPress={() => openLink(Bio.linkedin)}
                        color="#0077B5"
                    />
                    <SocialButton
                        icon="logo-twitter"
                        onPress={() => openLink(Bio.twitter)}
                        color="#1DA1F2"
                    />
                    <SocialButton
                        icon="logo-instagram"
                        onPress={() => openLink(Bio.insta)}
                        color="#E4405F"
                    />
                </View>

                <View className="border-t border-slate-300 pt-8 w-full">
                    <Text className="text-gray-500 text-center text-base">
                        © 2025 {Bio.name}. All rights reserved.
                    </Text>
                </View>
            </View>
        </View>
    )
}