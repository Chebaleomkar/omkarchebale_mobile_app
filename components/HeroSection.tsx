import { Bio } from '@/data';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import { SocialButton } from './SocialButton';

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    // Typewriter effect for roles
    useEffect(() => {
        const currentRole = Bio.roles[currentRoleIndex];

        const typeSpeed = isDeleting ? 500 : 700;
        const deleteSpeed = 500;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % Bio.roles.length);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);


    const openLink = async (url: string) => {
        try {
            await Linking.openURL(url);
        } catch  {
            Alert.alert('Error', 'Could not open link');
        }
    };
    return (
        <View className="min-h-screen  px-8 py-16">
            <LinearGradient
                colors={['#000000', '#1a1a2e', '#16213e']}
                className="absolute inset-0"
            />

            <View className="flex-1 justify-center items-center">
                <View className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center mb-12 border-4 border-white/20">
                    <Text className="text-7xl font-black text-white">OC</Text>
                </View>

                <Text className="text-white text-5xl font-black text-center mb-6 tracking-wide">
                    {Bio.name}
                </Text>

                <View className="h-16 mb-8">
                    <Text className="text-blue-400 text-2xl font-semibold text-center">
                        {displayedText}
                        <Text className="animate-pulse">|</Text>
                    </Text>
                </View>

                <Text className="text-gray-300 text-lg text-center leading-8 mb-12 px-6 max-w-md">
                    {Bio.description}
                </Text>

                <View className="flex-row mb-12">
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
                </View>

                <TouchableOpacity
                    onPress={() => openLink(Bio.resume)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-5 rounded-full border border-white/20"
                >
                    <Text className="text-white font-bold text-xl">Download Resume</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}