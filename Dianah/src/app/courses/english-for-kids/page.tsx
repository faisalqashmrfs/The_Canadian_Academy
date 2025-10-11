"use client";
import Layout from "@/components/Layout";

const tabs = [
    "Course Overview",
    "Prerequisites",
    "Program Highlights",
    "Levels Offered",
    "Meet Our Educators",
];

export default function EnglishForKidsPage() {
    return (
        <Layout showFooter>
            {/* Banner */}
            <section className="relative bg-gradient-to-r from-red-700 to-red-500 text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">English For Kids</h1>
                <div className="flex justify-center gap-4 mb-6">
                    <span className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                        Flexibility in Timing
                    </span>
                    <span className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                        7–14 Years
                    </span>
                </div>
                <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
                    Enroll Now
                </button>
            </section>

            {/* Course Details */}
            <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="md:col-span-1 space-y-4">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className="block w-full px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700"
                        >
                            {tab}
                        </div>
                    ))}

                    <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md w-full hover:bg-red-700 transition mt-6">
                        Enroll Now
                    </button>
                </aside>

                {/* Main Content */}
                <main className="md:col-span-3 space-y-6">
                    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-semibold text-red-600 mb-2">Course Overview</h3>
                        <p>
                            At the Canadian Academy we maintain a strong emphasis on academic excellence and high N.J. Our English for Kids program is designed to help children aged 7–14 years develop their English language skills in a fun and engaging environment. The course includes interactive lessons, group activities, and personalized feedback to ensure each child’s progress. Our experienced educators are dedicated to creating a supportive and stimulating learning experience.
                        </p>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-semibold text-red-600 mb-2">Prerequisites</h3>
                        <p>No prior knowledge is required to successfully participate in this course.</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-semibold text-red-600 mb-2">Program Highlights</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Certified Teachers: All instructors are certified and experienced.</li>
                            <li>Full Skill Focus: Reading, writing, listening, and speaking.</li>
                            <li>Small Groups: Personalized attention in small class sizes.</li>
                            <li>Parental Feedback: Regular updates and feedback for parents.</li>
                            <li>Interactive Learning: Engaging activities and games to reinforce learning.</li>
                        </ul>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-semibold text-red-600 mb-2">Levels Offered</h3>
                        <p>Beginner to Advanced levels tailored for each age group.</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm space-y-4">
                        <h3 className="text-lg font-semibold text-red-600 mb-2">Meet Our Educator</h3>
                        <img
                            src="/educators/li-wei.jpg"
                            alt="Ms. Li Wei"
                            className="w-40 h-40 object-cover rounded-full"
                        />
                        <p>
                            Ms. Li Wei is a Mandarin teacher from Beijing, China. She is experienced, curious, and passionate about teaching, with a focus on making learning engaging and effective.
                        </p>
                    </div>
                </main>
            </section>
        </Layout>
    );
}
