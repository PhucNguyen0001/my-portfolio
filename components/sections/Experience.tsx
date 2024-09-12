'use client'

export function Experience() {

  return (
    <section id="experience" className="bg-yellow-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-yellow-800">Experience</h2>
        <div className="space-y-6">
          {[
            { role: 'Senior Developer', company: 'Tech Solutions Inc.', period: '2018 - Present', description: 'Led development of multiple web applications, mentored junior developers, and implemented best practices.' },
            { role: 'Full Stack Developer', company: 'WebCraft Studios', period: '2015 - 2018', description: 'Developed and maintained various client projects, focusing on both frontend and backend technologies.' },
            { role: 'Junior Developer', company: 'StartUp Innovations', period: '2013 - 2015', description: 'Assisted in the development of web applications and gained experience in agile methodologies.' },
          ].map((job) => (
            <div key={job.company} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-yellow-700">{job.role}</h3>
              <p className="text-yellow-600">{job.company} | {job.period}</p>
              <p className="mt-2 text-yellow-900">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}