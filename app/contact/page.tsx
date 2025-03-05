"use client"

import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import img7 from "@/public/images/tea.jpeg"

const ContactPage: FC = () => {
  // Animation controls for different sections
  const heroControls = useAnimation();
  const formControls = useAnimation();
  const infoControls = useAnimation();
  const socialControls = useAnimation();
  const mapControls = useAnimation();

  // Section refs for detecting when they come into view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [socialRef, socialInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
    if (formInView) {
      formControls.start("visible");
    }
    if (infoInView) {
      infoControls.start("visible");
    }
    if (socialInView) {
      socialControls.start("visible");
    }
    if (mapInView) {
      mapControls.start("visible");
    }
  }, [
    heroInView, formInView, infoInView, socialInView, mapInView,
    heroControls, formControls, infoControls, socialControls, mapControls
  ]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contactInfoVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: "easeOut" 
      }
    })
  };

  const socialIconVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your server
    // For this demo, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully! We will get back to you shortly.',
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Head>
        <title>Contact Us - Ishami Green Rock Ltd</title>
        <meta name="description" content="Get in touch with Ishami Green Rock Ltd for agricultural consulting and services" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeInUp}
        className="relative py-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-green-800 opacity-90"></div>
          <Image 
            src={img7} 
            alt="Rwanda landscape" 
            layout="fill" 
            objectFit="cover" 
            className="mix-blend-multiply"
          />
        </div>
        <motion.div 
          className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Contact Us
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Reach out to us for consultations, services, or any inquiries about sustainable agriculture
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formControls}
            variants={fadeInLeft}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-green-800 mb-6"
            >
              Send Us a Message
            </motion.h2>
            
            {formStatus.submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                <div className="flex items-center">
                  <motion.span 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mr-3 text-green-600"
                  >
                    <FaPaperPlane size={20} />
                  </motion.span>
                  {formStatus.message}
                </div>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Seedling Production">Seedling Production</option>
                      <option value="Consultancy Services">Consultancy Services</option>
                      <option value="Market Linkage">Market Linkage</option>
                      <option value="Business Consulting">Business Consulting</option>
                    </select>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
                >
                  <span className="mr-2">Send Message</span>
                  <FaPaperPlane />
                </motion.button>
              </motion.form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <div>
            <motion.div
              ref={infoRef}
              initial="hidden"
              animate={infoControls}
              variants={fadeInRight}
              className="bg-white p-8 rounded-lg shadow-lg mb-8"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-green-800 mb-6"
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div 
                  custom={0}
                  variants={contactInfoVariant}
                  className="flex items-start"
                >
                  <motion.div 
                    className="text-green-600 text-xl mr-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <FaPhone />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+250 784 096 101</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  custom={1}
                  variants={contactInfoVariant}
                  className="flex items-start"
                >
                  <motion.div 
                    className="text-green-600 text-xl mr-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@ishamigreenrock.rw</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  custom={2}
                  variants={contactInfoVariant}
                  className="flex items-start"
                >
                  <motion.div 
                    className="text-green-600 text-xl mr-4"
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Social Media */}
            <motion.div
              ref={socialRef}
              initial="hidden"
              animate={socialControls}
              variants={fadeInRight}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-green-800 mb-6"
              >
                Connect With Us
              </motion.h2>
              
              <div className="flex space-x-6">
                <motion.a 
                  href="#" 
                  custom={0}
                  variants={socialIconVariant}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-green-600 hover:text-green-800 text-2xl transition-colors duration-300"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="#" 
                  custom={1}
                  variants={socialIconVariant}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-green-600 hover:text-green-800 text-2xl transition-colors duration-300"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a 
                  href="#" 
                  custom={2}
                  variants={socialIconVariant}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-green-600 hover:text-green-800 text-2xl transition-colors duration-300"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a 
                  href="#" 
                  custom={3}
                  variants={socialIconVariant}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-green-600 hover:text-green-800 text-2xl transition-colors duration-300"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Google Map would go here in a real implementation */}
            <motion.div 
              ref={mapRef}
              initial="hidden"
              animate={mapControls}
              variants={fadeInUp}
              className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7974.993131042161!2d30.0635147!3d-1.9547458999999958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1741165922661!5m2!1sen!2srw" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;