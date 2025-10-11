import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-3">The Canadian Academy</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            At the Global Language Academy, we foster a passion for learning.
            Our experienced instructors provide personalized lessons tailored to each student’s needs.
            Immerse yourself in rich diverse cultures while mastering new languages with us.
            Join our vibrant community and unlock your potential.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-red-500">Home</a></li>
            <li><a href="/about" className="hover:text-red-500">About Us</a></li>
            <li><a href="/courses" className="hover:text-red-500">Courses</a></li>
            <li><a href="/help" className="hover:text-red-500">Help Center</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Skype: <span className="text-gray-400">live:skypeuser</span></li>
            <li>Email: <span className="text-gray-400">academy@gmail.com</span></li>
            <li>Phone: <span className="text-gray-400">+91-874-456-8345</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Join us on</h3>
          <div className="flex gap-4 text-red-500 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © 2077 Untitled UI. All rights reserved.
      </div>
    </footer>
  );
}
