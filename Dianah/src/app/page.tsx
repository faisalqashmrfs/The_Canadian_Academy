
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactSidebar from "../components/ContactSidebar";
import Accreditations from "@/components/Accreditations";
import Differentiators from "@/components/Differentiators";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <ContactSidebar />
      <Accreditations />
      <Differentiators />


      {/* CTA Button */}
      <div className="text-center py-8">
        <button className="text-red-600 font-medium hover:underline hover:underline-offset-4">
          Go Deep And Discover More
        </button>
      </div>
    </div>
  );
}
