import { Bio } from '@/data';
import { openLink } from '@/utils/openLink';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle
} from 'react-native-reanimated';
import { SocialButton } from './SocialButton';

export default function HeroSection({ scrollY }: { scrollY: any }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    // Typewriter effect for roles
    useEffect(() => {
        const currentRole = Bio.roles[currentRoleIndex];

        const typeSpeed = isDeleting ? 100 : 80;
        const deleteSpeed = 50;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 200);
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


    const avatarStyle = useAnimatedStyle(() => {
        const scale = interpolate(scrollY.value, [0, 200], [1, 0.6], Extrapolate.CLAMP);
        const translateY = interpolate(scrollY.value, [0, 100], [0, -30], Extrapolate.CLAMP);
        return {
            transform: [{ scale }, { translateY }],
        };
    });

    const nameStyle = useAnimatedStyle(() => {
        const scaleX = interpolate(scrollY.value, [0, 100], [1, 0.8], Extrapolate.CLAMP);
        const translateY = interpolate(scrollY.value, [0, 100], [0, -10], Extrapolate.CLAMP);
        return {
            transform: [{ scaleX }, { translateY }],
        };
    });

    return (
        <View className="min-h-screen  px-8 py-16">
            <LinearGradient
                colors={['#000000', '#1a1a2e', '#16213e']}
                className="absolute inset-0"
            />

            <View className="flex-1 justify-center items-center">
            
                <Animated.View
                    className="w-56 h-56 rounded-full items-center justify-center mb-4"
                    style={avatarStyle}
                >
                    <Image
                        source={{ uri: 'https://omkarchebale.vercel.app/profile.jpg' }}
                        className="w-full h-full rounded-full border-4 border-blue-600"
                        resizeMode="cover"
                    />
                </Animated.View>

                <Animated.Text
                    className="dark:text-white text-5xl font-black text-center mb-6 tracking-wide"
                    style={nameStyle}
                >
                    {Bio.name}
                </Animated.Text>

                <View className="h-16 mb-8 ">
                    <Text className="text-blue-500 text-2xl font-semibold text-center">
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