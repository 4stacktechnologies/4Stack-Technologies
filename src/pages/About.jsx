import React from "react";
import {
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const sections = [
    {
      id: "about-company",
      label: "About Company",
      title: "About 4Stack Technologies",
      image:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1600",
      paragraphs: [
        `4Stack Technologies is an innovative software solutions company founded by Ayush Dhole. We specialize in building scalable web applications, mobile apps, cloud systems, and enterprise-grade digital solutions.`,
        `Our mission is to empower businesses with cutting-edge technology, seamless user experience, and reliable digital systems that deliver long-term value.`,
        `With a vision to enable smart, automated, and future-ready solutions, we continue to evolve with modern technologies and industry trends.`,
      ],
    },

    {
      id: "mission",
      label: "Our Mission",
      title: "Our Mission",
      icon: <Target className="w-10 h-10 text-blue-600" />, 
      paragraphs: [
        `To deliver high-quality, secure, and scalable digital products that solve real-world problems and help organizations grow efficiently.`,
      ],
    },

    {
      id: "vision",
      label: "Our Vision",
      title: "Our Vision",
      icon: <Rocket className="w-10 h-10 text-green-600" />, 
      paragraphs: [
        `To become a global leader in smart technology solutions and empower the next generation of digital transformation.`,
      ],
    },

    {
      id: "values",
      label: "Our Core Values",
      title: "Core Values",
      icon: <ShieldCheck className="w-10 h-10 text-purple-600" />, 
      paragraphs: [
        `Innovation, Integrity, Reliability, and Customer-Centricity are the pillars that drive our work culture and product development.`,
      ],
    },

    {
      id: "services",
      label: "What We Do",
      title: "Our Expertise",
      image:
        "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1600",
      paragraphs: [
        `Web Development, Mobile App Development, Cloud Solutions, UI/UX Design, Automation Systems, Data Analytics, and Custom Enterprise Solutions.`,
      ],
    },

    {
      id: "our-team",
      label: "Our Team",
      title: "Meet Our Team",
      image:
        "https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1600",
      paragraphs: [
        `At 4Stack Technologies, our strength lies in a passionate and skilled team committed to delivering high-quality digital solutions.`,
        `Our Technical Lead, Nishant Pawar, drives our full-stack development, system architecture, and engineering innovation.`,
        `Our Management Lead, Rohan Fasate, ensures operational excellence, strategy execution, and smooth workflow management.`,
        `Our Finance Lead, Ashutosh Lonkar, handles budgeting, financial planning, and sustainable company growth.`,
        `Together, we bring innovation, leadership, and stability to every project we deliver.`,
      ],
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
          About Us
        </h1>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col lg:flex-row items-center gap-10"
            >
              {section.image && (
                <img
                  src={section.image}
                  alt={section.label}
                  className="w-full lg:w-1/2 rounded-xl shadow-md"
                />
              )}

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  {section.icon && section.icon}
                  <h2 className="text-3xl font-semibold text-slate-800">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
