"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { BsTree, BsPeople } from 'react-icons/bs';
import { FaHandshake, FaChartLine } from 'react-icons/fa';
import { MdOutlineNaturePeople } from 'react-icons/md';
import img1 from "@/public/images/dan-meyers-IQVFVH0ajag-unsplash.jpg"
import img2 from "@/public/images/markus-spiske-sFydXGrt5OA-unsplash.jpg"
import img3 from "@/public/images/jonathan-kemper-1HHrdIoLFpU-unsplash.jpg"
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage: FC = () => {
  // Animation controls for different sections
  const welcomeControls = useAnimation();
  const servicesControls = useAnimation();
  const impactControls = useAnimation();
  const newsControls = useAnimation();
  const ctaControls = useAnimation();

  // Section refs for detecting when they come into view
  const [welcomeRef, welcomeInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [impactRef, impactInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [newsRef, newsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (welcomeInView) {
      welcomeControls.start("visible");
    }
    if (servicesInView) {
      servicesControls.start("visible");
    }
    if (impactInView) {
      impactControls.start("visible");
    }
    if (newsInView) {
      newsControls.start("visible");
    }
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [welcomeInView, servicesInView, impactInView, newsInView, ctaInView, 
      welcomeControls, servicesControls, impactControls, newsControls, ctaControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Scroll progress animation for hero section
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Head>
        <title>Ishami Green Rock Ltd - Transforming Agriculture in Rwanda</title>
        <meta name="description" content="Transforming agriculture in Rwanda by providing farmers with tools and knowledge to thrive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        className="relative h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src={img1} 
            alt="Rwandan agriculture" 
            layout="fill" 
            objectFit="cover" 
            priority 
            className="brightness-[0.85]"
          />
        </div>
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-green-900/70 p-8 rounded-lg backdrop-blur-sm max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              ISHAMI GREEN ROCK Ltd
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Transforming agriculture in Rwanda through innovation and sustainability
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <Link 
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Request a Consultation
              </Link>
              <Link 
                href="/services"
                className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ opacity: scrollYProgress }}
        >
          <p className="mb-2 text-sm">Scroll Down</p>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section 
        ref={welcomeRef}
        animate={welcomeControls}
        initial="hidden"
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            WELCOME TO ISHAMI GREEN ROCK
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 bg-green-600 mx-auto mb-6"></motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are dedicated to transforming agriculture in Rwanda by providing
            farmers with the tools and knowledge they need to thrive. Our
            integrated approach combines modern farming techniques, environmental
            responsibility, and strong market linkages.
          </motion.p>
        </div>

        <motion.div 
          ref={servicesRef}
          variants={staggerParent}
          initial="hidden"
          animate={servicesControls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4">
              <BsTree />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Seedling Production</h3>
            <p className="text-gray-600">
              High-quality fruit tree, herb, and spice seedlings for optimal yields and sustainability.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4">
              <MdOutlineNaturePeople />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Extension & Consultancy</h3>
            <p className="text-gray-600">
              Expert guidance on modern farming methods, tailored to local conditions and global best practices.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Market Linkage</h3>
            <p className="text-gray-600">
              Connecting farmers with local and international markets.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Impact Section with Statistics */}
      <motion.section 
        ref={impactRef}
        initial="hidden"
        animate={impactControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 bg-green-800 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl">Making a Difference in Farming Communities</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeInRight}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-green-300 mr-4">
                  <FaChartLine />
                </div>
                <h3 className="text-2xl font-bold">Increased Farmer Income</h3>
              </div>
              <p className="text-lg">
                Increased farmer income by <span className="text-2xl font-bold text-green-300">30%</span> through our demonstration site program, empowering local communities with sustainable agricultural practices.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInLeft}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-green-300 mr-4">
                  <BsPeople />
                </div>
                <h3 className="text-2xl font-bold">Market Access</h3>
              </div>
              <p className="text-lg">
                Successfully linked <span className="text-2xl font-bold text-green-300">100+</span> farmers to export markets for new agricultural commodity crops, opening up global opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* News & Updates Section */}
      <motion.section 
        ref={newsRef}
        initial="hidden"
        animate={newsControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">News & Updates</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerParent}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <motion.div 
            variants={cardVariant}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative h-48">
              <Image 
                src={img2} 
                alt="Demonstration site" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                New Demonstration Site Launched for Improved Irrigation Techniques
              </h3>
              <p className="text-gray-600 mb-4">
                Our newest demonstration site showcases innovative irrigation methods that reduce water usage while improving crop yields.
              </p>
              <Link 
                href="/news/1"
                className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative h-48">
              <Image 
                src={img3} 
                alt="Organic farming workshop" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Workshop on Organic Farming Practices Held for Local Farmers
              </h3>
              <p className="text-gray-600 mb-4">
                Over 50 local farmers attended our recent workshop on sustainable organic farming techniques and pest management.
              </p>
              <Link 
                href="/news/2"
                className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={zoomIn}
          className="text-center"
        >
          <Link 
            href="/news"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
          >
            View All News
          </Link>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        ref={ctaRef}
        initial="hidden"
        animate={ctaControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 bg-gradient-to-r from-green-700 to-green-900 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Transform Your Farming Practices?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Our team of agricultural experts is ready to help you implement sustainable and profitable farming practices.
          </motion.p>
          <motion.div 
            variants={staggerParent}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div variants={cardVariant}>
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </Link>
            </motion.div>
            <motion.div variants={cardVariant}>
              <Link 
                href="/services"
                className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Learn More About Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;