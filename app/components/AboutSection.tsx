import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f2effd] py-20 lg:py-32 relative text-[#1a1a1a] overflow-hidden">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Top Section: About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Image Area */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Squiggly Lines Decoration */}
            <svg
              width="50"
              height="60"
              viewBox="0 0 50 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -left-4 lg:-left-12 top-[40%] -translate-y-1/2 text-[#1a1a1a]"
            >
              <path d="M 0 15 Q 6 5 12 15 T 24 15 T 36 15 T 48 15" />
              <path d="M 0 30 Q 6 20 12 30 T 24 30 T 36 30 T 48 30" />
              <path d="M 0 45 Q 6 35 12 45 T 24 45 T 36 45 T 48 45" />
            </svg>

            {/* Avatar Circle */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-[2px] border-[#1a1a1a] overflow-hidden flex-shrink-0 z-10">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Badge */}
            <div className="absolute top-0 right-0 lg:-right-4 w-28 h-28 bg-[#f2effd] rounded-full border-[1.5px] border-[#1a1a1a] flex items-center justify-center z-20">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-[spin_12s_linear_infinite]"
              >
                <path
                  id="textPath"
                  d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                  fill="none"
                />
                <text>
                  <textPath
                    href="#textPath"
                    startOffset="0%"
                    className="text-[12px] font-extrabold fill-[#1a1a1a] tracking-[0.16em] uppercase"
                  >
                    Product Designer Developer •
                  </textPath>
                </text>
              </svg>
              {/* Star Icon in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="text-[#1a1a1a]"
                >
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Text Information */}
          <div className="relative order-1 lg:order-2">
            {/* Heart doodles */}
            <svg
              className="absolute -top-12 right-10 lg:right-20 w-12 h-12 text-[#1a1a1a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" className="fill-transparent transform -rotate-12" />
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" className="fill-transparent transform scale-[0.6] translate-x-[12px] translate-y-[-4px] rotate-12" />
            </svg>

            {/* Pill Label */}
            <div className="inline-block border-[1.5px] border-[#1a1a1a] rounded-full px-4 py-1 text-xs font-bold uppercase mb-6 tracking-widest bg-transparent">
              About me
            </div>

            <h2 className="text-4xl md:text-[3.5rem] leading-tight font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
              More about me
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-6 font-semibold">
              I'm Jonathan Morda, a product designer based in London. I'm very
              passionate about the work that I do every day.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-xl font-medium">
              My career in this dynamic and ever-evolving field has been a
              testament to my passion for crafting meaningful user experiences,
              leveraging technologies, and fearlessly pushing the boundaries of
              digital creativity. I thrive on transforming ideas into intuitive
              and impactful designs.
            </p>
          </div>
        </div>

        {/* Bottom Section: Experiences & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-32">
          {/* Experiences Intro */}
          <div className="col-span-1 lg:col-span-5 relative">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] mb-6">
              My experiences
            </h3>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed font-medium">
              I have had the pleasure to work with companies across a variety of
              industries to create impactful, compelling and challenging
              adventures.
            </p>
            <button className="px-6 py-3 border-[1.5px] border-[#1a1a1a] rounded-xl font-bold bg-white text-[#1a1a1a] tracking-wide shadow-[0px_4px_0px_#e0e7ff,0px_4px_0px_1.5px_#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0px_6px_0px_#e0e7ff,0px_6px_0px_1.5px_#1a1a1a] active:translate-y-[2px] active:shadow-[0px_1px_0px_#e0e7ff,0px_1px_0px_1.5px_#1a1a1a] transition-all">
              More About Me
            </button>

            {/* Doodle Arrow pointing to testimonial */}
            <svg
              className="absolute -bottom-24 left-1/2 lg:left-auto lg:right-10 w-16 h-16 text-[#1a1a1a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 100 100"
            >
              <path d="M 10 10 C 30 10, 60 50, 70 80" />
              <path d="M 50 75 L 70 80 L 75 60" />
            </svg>
          </div>

          {/* Timeline */}
          <div className="col-span-1 lg:col-span-7 relative mt-12 lg:mt-0">
            {/* Vertical Line */}
            <div className="absolute left-[5.5px] md:left-[140px] top-2 bottom-2 w-[1.5px] bg-[#1a1a1a] opacity-40"></div>

            <div className="flex flex-col gap-12">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-4 md:gap-12 group">
                {/* Desktop Date */}
                <div className="hidden md:block w-[120px] pt-1 text-right text-[11px] font-extrabold text-[#1a1a1a] uppercase tracking-widest flex-shrink-0">
                  Nov 2005 <br />
                  <span className="text-gray-500 font-semibold">— Present</span>
                </div>
                {/* Dot */}
                <div className="absolute left-[0px] md:left-[134px] top-2.5 w-3.5 h-3.5 bg-white border-[1.5px] border-[#1a1a1a] rounded-full z-10 group-hover:bg-[#e0e7ff] transition-colors"></div>

                {/* Content */}
                <div className="flex-1 md:pl-6">
                  {/* Mobile Date */}
                  <div className="md:hidden text-[11px] font-extrabold text-[#1a1a1a] uppercase tracking-widest mb-2">
                    Nov 2005 <span className="text-gray-500 font-semibold">— Present</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#1a1a1a] mb-2 leading-tight">
                    Creative Director at Makers House
                  </h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    Led a talented team in crafting compelling brand experiences.
                    Focused on innovation, creative direction, and delivering
                    impactful digital solutions.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-4 md:gap-12 group">
                <div className="hidden md:block w-[120px] pt-1 text-right text-[11px] font-extrabold text-[#1a1a1a] uppercase tracking-widest flex-shrink-0">
                  Oct 2013 <br />
                  <span className="text-gray-500 font-semibold">— Oct 2017</span>
                </div>
                <div className="absolute left-[0px] md:left-[134px] top-2.5 w-3.5 h-3.5 bg-white border-[1.5px] border-[#1a1a1a] rounded-full z-10 group-hover:bg-[#e0e7ff] transition-colors"></div>
                <div className="flex-1 md:pl-6">
                  <div className="md:hidden text-[11px] font-extrabold text-[#1a1a1a] uppercase tracking-widest mb-2">
                    Oct 2013 <span className="text-gray-500 font-semibold">— Oct 2017</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#1a1a1a] mb-2 leading-tight">
                    Senior Developer at Lamparas Studio
                  </h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    Collaborated with cross-functional teams to optimize
                    performance and enhance user experience.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-4 md:gap-12 group">
                <div className="hidden md:block w-[120px] pt-1 text-right text-[11px] font-extrabold text-[#1a1a1a] uppercase tracking-widest flex-shrink-0">
                  Mar 2010 <br />
                  <span className="text-gray-500 font-semibold">— Sep 2013</span>
                </div>
                <div className="absolute left-[0px] md:left-[134px] top-2.5 w-3.5 h-3.5 bg-white border-[1.5px] border-[#1a1a1a] rounded-full z-10 group-hover:bg-[#e0e7ff] transition-colors"></div>
                <div className="flex-1 md:pl-6">
                  <div className="md:hidden text-[11px] font-extrabold text-[#1a1a1a] uppercase tracking-widest mb-2">
                    Mar 2010 <span className="text-gray-500 font-semibold">— Sep 2013</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#1a1a1a] mb-2 leading-tight">
                    Junior Developer at Waypoint Media
                  </h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    Assisted in front-end development and UI enhancements.
                    Contributed to coding, debugging and refining interactive
                    website elements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Testimonial Card */}
      <div className="max-w-[700px] mx-auto px-6 mt-24 relative z-20 translate-y-24">
        <div className="bg-white border-[1.5px] border-[#1a1a1a] rounded-[1.5rem] p-10 md:p-14 text-center shadow-[0px_8px_0px_#e0e7ff,0px_8px_0px_1.5px_#1a1a1a] relative">

          {/* Decorative Stars Rating */}
          <div className="flex justify-center gap-1.5 mb-8 text-[#1a1a1a]">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                className="w-5 h-5 fill-transparent stroke-[#1a1a1a] stroke-[1.5px]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-relaxed mb-10">
            "I've been using this product for a month now, and I can honestly say
            it's changed my life. The results are incredible, and I couldn't be
            happier. Highly recommend!"
          </p>

          <div>
            <h5 className="font-extrabold text-[#1a1a1a] text-lg">
              Marius Breslam
            </h5>
            <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-widest mt-1">
              Financial Analyst
            </p>
          </div>

          {/* Action Button */}
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 border-[1.5px] border-[#1a1a1a] rounded-full flex items-center justify-center bg-white hover:bg-[#f3f4fa] transition-all shadow-[0px_3px_0px_#e0e7ff,0px_3px_0px_1.5px_#1a1a1a] active:translate-y-[2px] active:shadow-[0px_1px_0px_#e0e7ff,0px_1px_0px_1.5px_#1a1a1a]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#1a1a1a]"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Spacer to push out content overlap */}
      <div className="h-40"></div>
    </section>
  );
}
