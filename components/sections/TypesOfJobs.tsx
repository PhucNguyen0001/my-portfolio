'use client'
import { Code, Server, GitBranch } from 'lucide-react'

export function TypesOfJobs() {

  return (
    <section id="services" className="bg-purple-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">Types of jobs I can do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Frontend Developer', description: 'Creating responsive and interactive user interfaces using modern frameworks like React.', icon: Code, level: 'Senior' },
            { title: 'Backend Developer', description: 'Building robust server-side applications and APIs using Node.js, Python, and databases.', icon: Server, level: 'Mid-level' },
            { title: 'DevOps', description: 'Setting up CI/CD pipelines, managing cloud infrastructure, and optimizing application performance.', icon: GitBranch, level: 'Junior' },
          ].map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-2">
                <service.icon className="w-6 h-6 mr-2 text-purple-600" />
                <h3 className="text-xl font-semibold text-purple-600">{service.title}</h3>
              </div>    
              <p className="text-sm font-medium text-purple-500 mb-2">{service.level}</p>
              <p className="text-sm text-purple-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}