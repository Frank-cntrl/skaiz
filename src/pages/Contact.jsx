import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Page Title */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-serif tracking-wider">Contact</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        
        {/* Location */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif tracking-wide mb-4">Based in New York City</h2>
        </div>

        {/* Bio */}
        <div className="text-center mb-12">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Kaiya "Skaiz" Lang is New York City artist specializing in photography, lighting, and video work
          </p>
        </div>

        {/* Rates and Contact */}
        <div className="text-center mb-16">
          <p className="text-lg mb-2">rates vary</p>
          <p className="text-lg">contact to book</p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-2">
                    Name (First name)
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  placeholder="Email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80"
              alt="Studio workspace"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-16">
          <p className="text-red-500 italic">
            looking for some sort of contact<br/>
            link like this
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center pb-12">
        <a 
          href="/" 
          className="inline-block border-2 border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          ← BACK TO HOME
        </a>
      </div>
    </div>
  )
}

export default Contact