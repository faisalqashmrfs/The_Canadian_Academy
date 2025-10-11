type HeroProps = {
  titleBlack?: string;
  titleRed?: string;
  subtitle?: string;
  buttons?: React.ReactNode;
};

export default function Hero({
  titleBlack = "The Canadian",
  titleRed = "Academy",
  subtitle = "Master Languages. Connect Globally. Learn from expert teachers, practice real-world communication, and discover new cultures—all online.",
  buttons = (
    <>
      <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
        Contact Us
      </button>
      <button className="border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-50 transition">
        Explore Our Courses
      </button>
    </>
  ),
}: HeroProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-16 gap-12">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 relative inline-block">
          <span className="text-black">{titleBlack} </span>
          <span className="text-red-500 relative inline-block">
            {titleRed}
            <svg
              className="absolute left-0 bottom-0 w-full h-2"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 Q50,15 100,5"
                stroke="#ef4444"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </span>
        </h2>

        <p className="text-lg mb-6 max-w-xl text-black">{subtitle}</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {buttons}
        </div>
      </div>
    </section>
  );
}
