export default function Accreditations() {
  const logos = ["IELTS", "IAQ", "TOEFL", "Pearson PTE", "HRD Corp"];

  return (
    <section className="py-12 px-6 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
        Trusted International Accreditations
      </h2>

      <p className="max-w-2xl mx-auto text-gray-700 mb-10 text-sm md:text-base">
        The Canadian Academy is accredited by world-leading institutions, including IELTS, IAQ, TOEFL, Pearson PTE, and HRD Corp. These certifications ensure our courses meet international standards – giving you qualifications that open global doors.
      </p>

      <div className="flex flex-col items-center">
        {/* الصف العلوي: 3 مسدسات */}
        <div className="flex">
          {logos.slice(0, 3).map((logo, index) => (
            <div
              key={index}
              className="p-1 bg-orange-500"
              style={{
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            >
              <div
                className="w-28 h-28 flex items-center justify-center text-white font-bold uppercase text-xs md:text-sm bg-orange-700"
                style={{
                  clipPath:
                    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  backgroundColor: "#b45309", // أورانج غامق
                }}
              >
                {logo}
              </div>
            </div>
          ))}
        </div>

        {/* الصف السفلي: 2 مسدسات */}
        <div className="flex">
          {logos.slice(3).map((logo, index) => (
            <div
              key={index}
              className="p-1 bg-orange-500"
              style={{
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            >
              <div
                className="w-28 h-28 flex items-center justify-center text-white font-bold uppercase text-xs md:text-sm bg-orange-700"
                style={{
                  clipPath:
                    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  backgroundColor: "#b45309",
                }}
              >
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
