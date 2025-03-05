"use client"

import React, { useEffect } from 'react';
import { FC, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSeedling, FaTree, FaHandsHelping, FaRecycle, FaChartLine } from 'react-icons/fa';
import { GiPlantRoots, GiMedicines, GiTeacher, GiFarmTractor } from 'react-icons/gi';
import { MdOutlineNaturePeople } from 'react-icons/md';
import img6 from "@/public/images/mad-knoxx-deluxe-ZD6EipK6iOY-unsplash.jpg"

// Service category interface
interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  services: Service[];
}

// Service interface
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesPage: FC = () => {
  // State for selected service category
  const [activeCategory, setActiveCategory] = useState('agriculture');

  // Animation controls for different sections
  const heroControls = useAnimation();
  const navControls = useAnimation();
  const contentControls = useAnimation();
  const ctaControls = useAnimation();

  // Section refs for detecting when they come into view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [navRef, navInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
    if (navInView) {
      navControls.start("visible");
    }
    if (contentInView) {
      contentControls.start("visible");
    }
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [heroInView, navInView, contentInView, ctaInView, 
      heroControls, navControls, contentControls, ctaControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const serviceVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconPulse = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Service categories and their services
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'agriculture',
      title: 'Agriculture Production',
      icon: <FaSeedling className="h-6 w-6" />,
      services: [
        {
          id: 'fruit-trees',
          title: 'Fruit Tree, Herb and Spice Seedlings',
          description: 'We produce a wide variety of fruit tree, herb and spice seedlings, including mango, avocado, citrus, basil, mint, and ginger, grown in controlled environments for optimal quality using disease-free rootstock and advanced grafting techniques.',
          icon: <FaTree className="h-10 w-10" />
        },
        {
          id: 'seedlings',
          title: 'Quality Seedlings',
          description: 'We offer seedlings of popular herbs and spices, such as Quality seed production consultancy: Expert guidance on seed selection, production, and certification to ensure high-quality yields.',
          icon: <GiPlantRoots className="h-10 w-10" />
        },
        {
          id: 'orchard',
          title: 'Orchard Management Consultancy',
          description: 'Comprehensive advice on orchard planning, planting, pruning, pest control, and harvesting.',
          icon: <GiFarmTractor className="h-10 w-10" />
        },
        {
          id: 'urban',
          title: 'Urban Farming Consultancy',
          description: 'Tailored solutions for urban agriculture, including vertical farming, rooftop gardens, and container gardening.',
          icon: <GiMedicines className="h-10 w-10" />
        }
      ]
    },
    {
      id: 'extension',
      title: 'Extension and Consultancy',
      icon: <MdOutlineNaturePeople className="h-6 w-6" />,
      services: [
        {
          id: 'training',
          title: 'Extension Services and Training',
          description: 'Workshops and on-farm training on modern agricultural methods, including soil health management, integrated pest management, and water conservation.',
          icon: <GiTeacher className="h-10 w-10" />
        },
        {
          id: 'demonstration',
          title: 'Demonstration Sites',
          description: 'Our demonstration sites showcase best practices in modern agriculture, allowing farmers to see firsthand the benefits of new technologies and techniques.',
          icon: <FaHandsHelping className="h-10 w-10" />
        },
        {
          id: 'market',
          title: 'Market Linkage',
          description: 'We connect farmers with local and international buyers, providing market information, logistics support, and quality assurance.',
          icon: <FaChartLine className="h-10 w-10" />
        },
        {
          id: 'research',
          title: 'Agricultural Research Implementation',
          description: 'We translate research findings into practical solutions for farmers, ensuring that they have access to the latest advancements in agriculture.',
          icon: <FaSeedling className="h-10 w-10" />
        }
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental Protection',
      icon: <FaRecycle className="h-6 w-6" />,
      services: [
        {
          id: 'cover-cropping',
          title: 'Cover Cropping Implementation',
          description: 'We help farmers implement cover cropping techniques to reduce soil erosion and improve soil health throughout the year.',
          icon: <GiPlantRoots className="h-10 w-10" />
        },
        {
          id: 'irrigation',
          title: 'Drip Irrigation Solutions',
          description: 'Promotion and installation of drip irrigation systems to conserve water while improving crop yields and quality.',
          icon: <FaSeedling className="h-10 w-10" />
        },
        {
          id: 'biological',
          title: 'Biological Pest Control',
          description: 'Education and implementation of safe biological pesticide use to protect both crops and the environment.',
          icon: <FaRecycle className="h-10 w-10" />
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Consulting',
      icon: <FaChartLine className="h-6 w-6" />,
      services: [
        {
          id: 'business-plans',
          title: 'Agricultural Business Plans',
          description: 'Development of bankable agricultural business plans to help farmers secure funding and grow their operations.',
          icon: <FaChartLine className="h-10 w-10" />
        },
        {
          id: 'market-analysis',
          title: 'Market Analysis Reports',
          description: 'Detailed market analysis reports for specific agricultural products to identify opportunities and mitigate risks.',
          icon: <FaHandsHelping className="h-10 w-10" />
        },
        {
          id: 'supply-chain',
          title: 'Supply Chain Optimization',
          description: 'Supply chain optimization strategies to reduce costs and improve efficiency for agricultural businesses.',
          icon: <FaChartLine className="h-10 w-10" />
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Head>
        <title>Our Services - Ishami Green Rock Ltd</title>
        <meta name="description" content="Explore our comprehensive agricultural services at Ishami Green Rock Ltd" />
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
            src={img6} 
            alt="Agricultural services" 
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
            Our Services
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
            Comprehensive agricultural solutions tailored to the needs of Rwandan farmers
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Service Categories Navigation */}
      <motion.section 
        ref={navRef}
        initial="hidden"
        animate={navControls}
        variants={fadeIn}
        className="py-8 px-4 bg-white shadow-md sticky top-0 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerParent}
            className="flex flex-wrap justify-center gap-2 md:gap-6"
          >
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                variants={buttonVariant}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="mr-2"
                  animate={{ 
                    scale: activeCategory === category.id ? [1, 1.2, 1] : 1,
                    transition: { 
                      duration: 0.5, 
                      times: [0, 0.5, 1],
                      ease: "easeInOut"
                    }
                  }}
                >
                  {category.icon}
                </motion.span>
                <span className="font-medium">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Content */}
      <motion.section 
        ref={contentRef}
        initial="hidden"
        animate={contentControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {serviceCategories.map((category) => (
            activeCategory === category.id && (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="text-center mb-12"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="text-green-600 text-5xl mb-4 flex justify-center"
                    variants={iconPulse}
                    initial="hidden"
                    animate="visible"
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {category.title}
                  </motion.h2>
                  <motion.div 
                    className="w-24 h-1 bg-green-600 mx-auto mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  ></motion.div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={staggerParent}
                  initial="hidden"
                  animate="visible"
                >
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={serviceVariant}
                      custom={index}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <motion.div 
                          className="text-green-600 mr-6 flex-shrink-0"
                          whileHover={{ 
                            rotate: 5,
                            scale: 1.1,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {service.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-green-800 mb-3">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        ref={ctaRef}
        initial="hidden"
        animate={ctaControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 bg-green-700 text-white"
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Farming Practices?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Contact us today to learn more about how our services can help you achieve sustainable and profitable farming.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-8 rounded-full transition duration-300 inline-block transform hover:scale-105"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;