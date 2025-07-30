import React, { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const sendEmail = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setFormStatus(null);

  try {
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);


    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    form.current.reset();
    setTimeout(() => setFormStatus(null), 5000);

  } catch (error) {
    console.error('EmailJS Error:', error);
    setFormStatus('error');
    setTimeout(() => setFormStatus(null), 5000);
  } finally {
    setIsLoading(false);
  }
};


  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jaiprakash.ps2023it@sece.ac.im',
      link: 'mailto:jaiprakash.ps2023it@sece.ac.im',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9842793747',
      link: 'tel:+919842793747',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Tamil Nadu, India',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jai-prakash-ab0662291',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/JaiPrakashPS',
      color: 'hover:text-gray-800'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://x.com/_JaiPrakash_',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            <br></br>
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FaEnvelope className="text-purple-600 mr-3" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        title={social.name}
                      >
                        <IconComponent className="text-xl" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FaPaperPlane className="text-purple-600 mr-3" />
                Send Message
              </h2>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 text-green-700 animate-slideIn">
                  <FaCheckCircle className="text-xl" />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 text-red-700 animate-slideIn">
                  <FaExclamationTriangle className="text-xl" />
                  <span className="font-medium">Failed to send message. Please try again later.</span>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  onClick={sendEmail}
                  type="submit"
                  disabled={isLoading}

                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default ContactMe;