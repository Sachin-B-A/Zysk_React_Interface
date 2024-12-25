import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import BlogPosts from './components/BlogPosts';
import SectionDivider from './components/common/SectionDivider';

function App() {
  return (
    <Layout>
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <BlogPosts />
    </Layout>
  );
}

export default App;