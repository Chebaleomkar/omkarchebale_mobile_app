import { openLink } from '@/utils/openLink';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SectionTitle from './SectionTitle';

export default function ContactSection() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        const mailtoUrl = `mailto:omkarchebale0@gmail.com?subject=Contact from ${contactForm.name}&body=${contactForm.message}%0D%0A%0D%0AFrom: ${contactForm.name}%0D%0AEmail: ${contactForm.email}`;
        openLink(mailtoUrl);

        // Reset form
        setContactForm({ name: '', email: '', message: '' });
        Alert.alert('Success', 'Thank you for your message!');
    };


    return (
        <View className=" bg-gray-950 py-20 px-8">
            <SectionTitle title="Let's Work Together" />

            <View className="bg-gray-900/90 rounded-3xl p-8 border border-gray-700/50">
                <TextInput
                    placeholder="Your Name"
                    placeholderTextColor="#9CA3AF"
                    value={contactForm.name}
                    onChangeText={(text) => setContactForm({ ...contactForm, name: text })}
                    className="bg-gray-800 rounded-2xl p-6 text-white text-lg mb-6 border border-gray-600"
                />

                <TextInput
                    placeholder="Your Email"
                    placeholderTextColor="#9CA3AF"
                    value={contactForm.email}
                    onChangeText={(text) => setContactForm({ ...contactForm, email: text })}
                    keyboardType="email-address"
                    className="bg-gray-800 rounded-2xl p-6 text-white text-lg mb-6 border border-gray-600"
                />

                <TextInput
                    placeholder="Your Message"
                    placeholderTextColor="#9CA3AF"
                    value={contactForm.message}
                    onChangeText={(text) => setContactForm({ ...contactForm, message: text })}
                    multiline
                    numberOfLines={6}
                    className="bg-gray-800 rounded-2xl p-6 text-white text-lg mb-8 border border-gray-600"
                    style={{ textAlignVertical: 'top', minHeight: 120 }}
                />

                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl py-6"
                >
                    <Text className="text-white font-bold text-xl text-center">
                        Send Message
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}