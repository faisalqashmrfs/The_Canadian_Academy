"use client";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  const courses = [
    {
      title: "English For Kids",
      description:
        "At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods.",
      image: "/images/kids-banner.jpg",
      timing: "Flexibility in timing",
      ageRange: "7–14 years",
    },
    {
      title: "Academic English",
      description:
        "Prepare for academic success with courses focused on writing, reading, and comprehension skills.",
      image: "/images/academic.jpg",
      timing: "Evening classes",
      ageRange: "15+ years",
    },
    {
      title: "Professional Business English",
      description:
        "Enhance your career prospects with English skills tailored for the business environment.",
      image: "/images/business.jpg",
      timing: "Weekend sessions",
      ageRange: "18+ years",
    },
    {
      title: "VIP English Course",
      description:
        "Personalized English lessons with one-on-one instruction to meet your specific learning goals.",
      image: "/images/vip.jpg",
      timing: "Custom schedule",
      ageRange: "All ages",
    },
    {
      title: "Conversation Practice",
      description:
        "Improve your fluency and confidence through guided conversation sessions with native speakers.",
      image: "/images/conversation.jpg",
      timing: "Daily availability",
      ageRange: "16+ years",
    },
  ];

  return (
    <Layout showNavbar variant="default">
      <section className="py-12 px-6 text-center bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Discover our English courses
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg mb-10">
          Discover a diverse selection of language courses crafted for learners
          from all backgrounds. Whether you're starting a new language or
          enhancing your skills, our experienced team includes native speakers
          with real-world practice. Learn, connect, and gain the confidence to
          use your new language in everyday life and professional settings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
