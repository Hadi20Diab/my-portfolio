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

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}
