import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/home/HeroSection';
import StorySection from '../components/home/StorySection';
import ExperienceSection from '../components/home/ExperienceSection';
import FeaturedMenu from '../components/home/FeaturedMenu';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InstagramGrid from '../components/social/InstagramGrid';

export default function Home() {
  return (
    <MainLayout transparentNav>
      <HeroSection />
      <StorySection />
      <ExperienceSection />
      <FeaturedMenu />
      <TestimonialsSection />
      <InstagramGrid />
    </MainLayout>
  );
}
