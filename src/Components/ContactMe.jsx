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
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9842793747',
      link: 'tel:+919842793747',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Tamil Nadu, India',
      link: '#',
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jai-prakash-ab0662291',
      color: 'hover:text-white hover:bg-zinc-900 dark:hover:text-black dark:hover:bg-white'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/JaiPrakashPS',
      color: 'hover:text-white hover:bg-zinc-900 dark:hover:text-black dark:hover:bg-white'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://x.com/_JaiPrakash_',
      color: 'hover:text-white hover:bg-zinc-900 dark:hover:text-black dark:hover:bg-white'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-16 px-6 font-sans relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mb-4">
            <br></br>
            Get In Touch_
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 font-mono flex items-center">
                <FaEnvelope className="text-zinc-900 dark:text-white mr-3" />
                Contact Info
              </h2>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center space-x-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/60 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-full bg-zinc-100 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 text-zinc-800 dark:text-white group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors font-mono">
                          {item.label}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white font-mono mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
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
            <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 font-mono flex items-center">
                <FaPaperPlane className="text-zinc-900 dark:text-white mr-3" />
                Send Message
              </h2>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl flex items-center space-x-3 text-zinc-900 dark:text-white font-mono animate-slideIn">
                  <FaCheckCircle className="text-xl text-zinc-900 dark:text-white" />
                  <span className="font-medium text-sm">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl flex items-center space-x-3 text-zinc-700 dark:text-zinc-300 font-mono animate-slideIn">
                  <FaExclamationTriangle className="text-xl text-zinc-700 dark:text-zinc-400" />
                  <span className="font-medium text-sm">Failed to send message. Please try again later.</span>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3.5 text-zinc-400 dark:text-zinc-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-zinc-300 focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-500 rounded-xl transition-all duration-300 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3.5 text-zinc-400 dark:text-zinc-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-zinc-300 focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-500 rounded-xl transition-all duration-300 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FaComment className="absolute left-3 top-3.5 text-zinc-400 dark:text-zinc-500" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-zinc-300 focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-500 rounded-xl transition-all duration-300 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <FaComment className="absolute left-3 top-3.5 text-zinc-400 dark:text-zinc-500" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 border border-zinc-300 focus:border-zinc-500 dark:border-zinc-800 dark:focus:border-zinc-500 rounded-xl transition-all duration-300 resize-none bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black font-bold font-mono py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-black"></div>
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
      `}</style>
    </div>
  );
};

export default ContactMe;