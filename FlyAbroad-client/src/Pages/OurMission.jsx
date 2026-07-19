export default function MissionCard() {
  return (
    <div className="min-h-screen mt-20 w-full flex items-center justify-center px-4 md:px-8 lg:px-16 p-6 select-none font-sans">
      {/* Main Card Container spanning full width */}
      <div className="relative w-full bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-14 text-center overflow-hidden">
        
        {/* Decorative Green Quotes Icon */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 text-teal-500 opacity-80">
          <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Small Yellow Accent Dot */}
        <div className="absolute top-24 right-10 w-2 h-2 rounded-full bg-yellow-400 opacity-70"></div>

        {/* Small Blue Accent Dot */}
        <div className="absolute bottom-16 left-12 w-2.5 h-2.5 rounded-full bg-blue-400 opacity-80"></div>

        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0066b2] tracking-wide">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-[#0066b2] mt-4 rounded-full"></div>
        </div>

        {/* Mission Statement Text */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium mb-10">
         Our mission is to provide thoughtful, well‑researched, and empathetic perspectives on every aspect of studying in the United Kingdom, Ireland, and Dubai. We recognize that the decision to pursue education abroad is not merely an academic choice, but a deeply personal journey that impacts students, parents, and the wider community of stakeholders. By offering nuanced insights into academic opportunities, cultural environments, financial considerations, and long‑term career prospects, we aim to elevate the clarity of thought for all involved.

Through this process, we help families validate their assumptions, challenge uncertainties, and gain confidence in their choices. Our approach is rooted in empathy and professionalism, ensuring that every individual feels supported in navigating the complexities of international education. Ultimately, our goal is to empower students and parents to make decisions that are not only informed but also aligned with their aspirations, values, and future ambitions.
        </p>

        {/* Profile / Author Section */}
        <div className="flex items-center justify-center gap-4 text-left">
          {/* Circular Initials Avatar (Corrected to 'M' for Manoj) */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#005da3] text-white font-semibold text-lg shadow-sm">
            U
          </div>
          
          {/* Author Details */}
          <div>
            <h4 className="text-gray-900 font-bold text-base tracking-wide">
              Unefly
            </h4>
            <p className="text-pink-500 font-bold text-xs uppercase tracking-wider mt-0.5">
              Best wishes from the Team Unefly
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}