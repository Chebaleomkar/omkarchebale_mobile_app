import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ClientProjectSection from '@/components/ClientProjectSection';
import ClientReviewSection from '@/components/ClientReviewSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated';

const PortfolioApp = () => {

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <Animated.ScrollView
        className="flex-1"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <HeroSection scrollY={scrollY}  />

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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default PortfolioApp;