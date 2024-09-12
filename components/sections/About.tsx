'use client'

import Image from 'next/image'
export function About() {
    return (
        <section id="about" className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3">
                        <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt="Profile picture"
                            width={300}
                            height={300}
                            className="rounded-full mx-auto"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-4 text-blue-800">About Me</h2>
                        <p className="text-lg text-blue-900">
                            Hello! I am CR7, a passionate and versatile developer with a keen interest in creating efficient and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I strive to deliver high-quality solutions that meet and exceed client expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}