"use client"
import { FC, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaLeaf, FaLightbulb, FaPeopleCarry, FaHandshake, FaAward } from 'react-icons/fa';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img4 from "@/public/images/greenhouse.png"
import img5 from "@/public/images/tomatoes.png"
import img8 from "@/public/images/Avatar.jpg"

const AboutPage: FC = () => {
  // Animation controls for different sections
  const storyControls = useAnimation();
  const visionMissionControls = useAnimation();
  const valuesControls = useAnimation();
  const experienceControls = useAnimation();
  const teamControls = useAnimation();

  // Section refs for detecting when they come into view
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visionMissionRef, visionMissionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (storyInView) {
      storyControls.start("visible");
    }
    if (visionMissionInView) {
      visionMissionControls.start("visible");
    }
    if (valuesInView) {
      valuesControls.start("visible");
    }
    if (experienceInView) {
      experienceControls.start("visible");
    }
    if (teamInView) {
      teamControls.start("visible");
    }
  }, [storyInView, visionMissionInView, valuesInView, experienceInView, teamInView, 
      storyControls, visionMissionControls, valuesControls, experienceControls, teamControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const countUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  // Team members data
  const teamMembers = [
    {
      name: 'IRABARUTA Sabin',
      position: 'CEO & Founder',
      bio: 'Expert in sustainable agriculture with 15 years of experience in agricultural development across Africa.',
      image: img8,
    },
    {
      name: 'IRABARUTA Sabin',
      position: 'Agricultural Director',
      bio: 'Agronomist with a specialization in tropical crop systems and extensive experience in training farmers.',
      image: img8,
    },
    {
      name: 'IRABARUTA Sabin',
      position: 'Marketing Lead',
      bio: 'Agricultural market specialist with expertise in connecting farmers to international export opportunities.',
      image: img8,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Head>
        <title>About Us - Ishami Green Rock Ltd</title>
        <meta name="description" content="Learn about our mission, vision, and dedicated team at Ishami Green Rock Ltd" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        className="relative py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-green-800 opacity-90"></div>
          <Image 
            src={img4} 
            alt="Rwandan agriculture landscape" 
            layout="fill" 
            objectFit="cover" 
            className="mix-blend-multiply"
          />
        </div>
        <motion.div 
          className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            About Ishami Green Rock
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          ></motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Dedicated to sustainable agriculture and farmer empowerment in Rwanda
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        ref={storyRef}
        initial="hidden"
        animate={storyControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeInRight}
            className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src={img5} 
              alt="Farming in Rwanda" 
              layout="fill" 
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <motion.div variants={fadeInLeft}>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-green-600 mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, our mission stems from a dedication to sustainable
              agriculture and the empowerment of local farmers. We identified the
              need for improved farming methods and market connections, and we are
              committed to providing those solutions, while also implementing best
              practices learned from agricultural leaders like Israel.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We began with a small demonstration farm, showing local farmers how modern
              techniques could increase yields while preserving the environment. Today,
              our impact reaches across Rwanda, helping farmers transition to sustainable
              and profitable agricultural practices.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section 
        ref={visionMissionRef}
        initial="hidden"
        animate={visionMissionControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 bg-green-800 text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            variants={fadeInRight}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-lg leading-relaxed">
              A thriving agricultural sector that sustains both people and the planet,
              ensuring food security and environmental health for future generations.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInLeft}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-lg leading-relaxed">
              To drive agricultural transformation by providing innovative
              solutions, expert consultancy, and strong market linkages, empowering
              farmers to achieve sustainable prosperity.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        ref={valuesRef}
        initial="hidden"
        animate={valuesControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            The principles that guide our work and relationships with farmers, partners, and the environment.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerParent}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">Sustainability</h3>
            <p className="text-gray-600 text-center">
              We prioritize environmentally friendly practices, such as soil conservation, 
              water management, and reduced chemical inputs.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">Innovation</h3>
            <p className="text-gray-600 text-center">
              We embrace modern agricultural technologies, including precision farming, 
              improved seed varieties, and efficient irrigation systems.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <FaPeopleCarry />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">Empowerment</h3>
            <p className="text-gray-600 text-center">
              We provide farmers with the knowledge, skills, and resources they need to succeed.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">Integrity</h3>
            <p className="text-gray-600 text-center">
              We conduct our business with honesty, transparency, and ethical practices.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariant}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <FaAward />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">Quality</h3>
            <p className="text-gray-600 text-center">
              We are committed to providing high-quality seedlings, consultancy,
              and market access.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Counter */}
      <motion.section 
        ref={experienceRef}
        initial="hidden"
        animate={experienceControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 bg-green-700 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            variants={countUpVariant}
            className="inline-block bg-white/20 backdrop-blur-sm p-8 rounded-lg"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 2,
                  ease: "easeOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  repeat: 0,
                  repeatDelay: 0
                }}
              >
                5
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Years of Expertise
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        ref={teamRef}
        initial="hidden"
        animate={teamControls}
        variants={fadeInUp}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals who are working to transform agriculture in Rwanda.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerParent}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={cardVariant} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-80">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;