'use client'

export function Contact() {

  return (
    <section id="contact" className="bg-red-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-red-800">Send me a message</h2>
        <form className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-red-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-red-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-red-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}