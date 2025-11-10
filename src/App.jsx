import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Education, Experience, Projects, Skills, Contact, NotFound } from './pages'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
