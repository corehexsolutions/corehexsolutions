import { memo } from 'react';

const Testimonials = () => {
  return (
       <section className=" relative py-24 md:py-28 overflow-hidden bg-[#09111D]">

        {/* BG GLOW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="container-custom relative z-20">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-16">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Trusted by Businesses
              <span className="text-primary"> Across Industries</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We build long-term partnerships through reliable support,
              innovative solutions, and exceptional customer service.
            </p>
          </div>

          {/* INFINITE SCROLL TESTIMONIALS */}
          <div className="relative overflow-hidden">

            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#09111D] to-transparent" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#09111D] to-transparent" />

            <div className="flex w-max animate-testimonial-scroll gap-7">

              {[
                {
                  initials: "RK",
                  name: "Rahul Kumar",
                  role: "Operations Manager",
                  text: "Corehex Solutions transformed our IT infrastructure completely. Their response time and technical expertise are outstanding.",
                },
                {
                  initials: "AP",
                  name: "Anjali Patel",
                  role: "Director, FinTech Startup",
                  text: "Their cybersecurity solutions helped us secure our systems and improve operational efficiency significantly.",
                },
                {
                  initials: "VS",
                  name: "Vikram Shah",
                  role: "CEO, Retail Company",
                  text: "Reliable support, proactive communication, and modern technology solutions — exactly what our business needed.",
                },
                {
                  initials: "NS",
                  name: "Neha Sharma",
                  role: "Startup Founder",
                  text: "Amazing support team with deep technical expertise. They helped us scale smoothly.",
                },
                {
                  initials: "DT",
                  name: "Dev Trivedi",
                  role: "Tech Lead",
                  text: "Professional service, fast delivery, and excellent communication throughout the project.",
                },

                /* DUPLICATE FOR INFINITE LOOP */
                {
                  initials: "RK",
                  name: "Rahul Kumar",
                  role: "Operations Manager",
                  text: "Corehex Solutions transformed our IT infrastructure completely. Their response time and technical expertise are outstanding.",
                },
                {
                  initials: "AP",
                  name: "Anjali Patel",
                  role: "Director, FinTech Startup",
                  text: "Their cybersecurity solutions helped us secure our systems and improve operational efficiency significantly.",
                },
                {
                  initials: "VS",
                  name: "Vikram Shah",
                  role: "CEO, Retail Company",
                  text: "Reliable support, proactive communication, and modern technology solutions — exactly what our business needed.",
                },
                {
                  initials: "NS",
                  name: "Neha Sharma",
                  role: "Startup Founder",
                  text: "Amazing support team with deep technical expertise. They helped us scale smoothly.",
                },
                {
                  initials: "DT",
                  name: "Dev Trivedi",
                  role: "Tech Lead",
                  text: "Professional service, fast delivery, and excellent communication throughout the project.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative w-[340px] flex-shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3"
                >

                  {/* Animated Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(135deg,transparent,rgba(59,130,246,0.18),transparent)]" />

                  {/* Glow Orb */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* STARS */}
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-lg"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* REVIEW */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-7">
                      “{item.text}”
                    </p>

                    {/* USER */}
                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary font-semibold">
                        {item.initials}
                      </div>

                      <div>
                        <h4 className="text-white font-medium">
                          {item.name}
                        </h4>

                        <p className="text-gray-500 text-sm">
                          {item.role}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[30px] border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default memo(Testimonials);