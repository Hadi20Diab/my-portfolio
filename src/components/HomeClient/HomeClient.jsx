"use client"

import dynamic from 'next/dynamic'
import Loading from '../Loading/Loading'

const HeroSection = dynamic(() => import('../HeroSection/HeroSection'), {
  ssr: false,
  loading: () => <Loading />,
})

const AboutSection = dynamic(() => import('../AboutSection/AboutSection'), {
  ssr: false,
  loading: () => <Loading />,
})

const SkillsSection = dynamic(() => import('../SkillsSection/SkillsSection'), {
  ssr: false,
  loading: () => <Loading />,
})

const ProjectsSection = dynamic(() => import('../ProjectsSection/ProjectsSection'), {
  ssr: false,
  loading: () => <Loading />,
})

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}
