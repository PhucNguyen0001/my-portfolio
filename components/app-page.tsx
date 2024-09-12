'use client'

import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { TypesOfJobs } from './sections/TypesOfJobs'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
export function AppPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      

      {/* Main Content */}
      <main>
        {/* 1. Introduce myself */}
        <About />

        {/* 2. My skills */}
        <Skills />

        {/* 3. Types of job I can do */}
        <TypesOfJobs />

        {/* 4. My experience */}
        <Experience />

        {/* 5. Contact form */}
        <Contact />
      </main>

      {/* 6. Footer with social networks */}
      <Footer />
    </div>
  )
}