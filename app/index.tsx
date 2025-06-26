import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ClientProjectSection from '@/components/ClientProjectSection';
import ClientReviewSection from '@/components/ClientReviewSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';


const PortfolioApp = () => {

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <HeroSection />

        {/* Businesses I've Helped Section */}
        <ClientProjectSection />

        {/* Client Reviews Section */}
        <ClientReviewSection />

        {/* Skills Section */}
        <SkillSection />

        {/* Projects Section */}
        <ProjectSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PortfolioApp;