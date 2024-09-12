'use client'

export function Skills() {

  return (
    <section id="skills" className="bg-green-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { skill: 'HTML', level: 'Expert' },
            { skill: 'CSS', level: 'Expert' },
            { skill: 'JavaScript', level: 'Expert' },
            { skill: 'Next.js', level: 'Proficient' },
            { skill: 'React', level: 'Proficient' },
            { skill: 'Tailwind CSS', level: 'Proficient' },
          ].map(({ skill, level }) => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{skill}</h3>
              <p className="text-gray-600">{level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
