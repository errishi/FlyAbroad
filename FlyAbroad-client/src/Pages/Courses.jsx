import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";

const Courses = () => {
  const courseCategories = [
    {
      name: "Undergraduate Programs",
      courses: [
        { id: 1, title: "Bachelor of Science (B.Sc)", description: "Comprehensive undergraduate program in science.", price: "$200" },
        { id: 2, title: "Bachelor of Engineering / Technology (B.E / B.Tech)", description: "Engineering and technology degree program.", price: "$250" },
        { id: 3, title: "Bachelor of Business Administration (BBA)", description: "Business administration undergraduate course.", price: "$180" },
        { id: 4, title: "Bachelor of Arts (BA)", description: "Arts and humanities degree.", price: "$150" },
        { id: 5, title: "Bachelor of Computer Science", description: "Computer science undergraduate program.", price: "$220" },
        { id: 6, title: "Bachelor of Nursing", description: "Nursing degree for healthcare professionals.", price: "$190" },
        { id: 7, title: "Bachelor of Architecture", description: "Architecture design and planning course.", price: "$230" },
      ],
    },

    {
      name: "Postgraduate Programs",
      courses: [
        { id: 8, title: "Master of Science (M.Sc)", description: "Advanced science postgraduate program.", price: "$300" },
        { id: 9, title: "Master of Engineering / Technology (M.E / M.Tech)", description: "Engineering masters degree.", price: "$350" },
        { id: 10, title: "Master of Business Administration (MBA)", description: "Business administration masters.", price: "$400" },
        { id: 11, title: "Master of Arts (MA)", description: "Arts and humanities masters.", price: "$250" },
        { id: 12, title: "Master of Computer Applications (MCA)", description: "Computer applications masters.", price: "$280" },
        { id: 13, title: "Master of Public Health (MPH)", description: "Public health masters program.", price: "$320" },
      ],
    },

    {
      name: "Professional and Career‑Focused Courses",
      courses: [
        { id: 14, title: "Data Science and Analytics", description: "Learn data science and analytics skills.", price: "$150" },
        { id: 15, title: "Artificial Intelligence and Machine Learning", description: "AI and ML professional course.", price: "$200" },
        { id: 16, title: "Cybersecurity", description: "Cybersecurity training program.", price: "$180" },
        { id: 17, title: "Cloud Computing", description: "Cloud computing certification.", price: "$160" },
        { id: 18, title: "Digital Marketing", description: "Digital marketing skills course.", price: "$120" },
        { id: 19, title: "Project Management", description: "Project management training.", price: "$140" },
        { id: 20, title: "Finance and Accounting", description: "Finance and accounting course.", price: "$170" },
        { id: 21, title: "Supply Chain and Logistics", description: "Supply chain management.", price: "$130" },
      ],
    },

    {
      name: "Medical and Healthcare Courses",
      courses: [
        { id: 22, title: "MBBS", description: "Medical degree program.", price: "$500" },
        { id: 23, title: "Nursing", description: "Nursing healthcare course.", price: "$200" },
        { id: 24, title: "Pharmacy", description: "Pharmacy degree.", price: "$250" },
        { id: 25, title: "Physiotherapy", description: "Physiotherapy training.", price: "$220" },
        { id: 26, title: "Dentistry", description: "Dentistry medical course.", price: "$450" },
        { id: 27, title: "Biomedical Sciences", description: "Biomedical sciences program.", price: "$300" },
      ],
    },

    {
      name: "Creative and Design Courses",
      courses: [
        { id: 28, title: "Graphic Design", description: "Graphic design skills.", price: "$100" },
        { id: 29, title: "UI/UX Design", description: "User interface and experience design.", price: "$120" },
        { id: 30, title: "Animation and VFX", description: "Animation and visual effects.", price: "$150" },
        { id: 31, title: "Fashion Design", description: "Fashion design course.", price: "$130" },
        { id: 32, title: "Interior Design", description: "Interior design training.", price: "$110" },
        { id: 33, title: "Film and Media Studies", description: "Film and media studies.", price: "$140" },
      ],
    },

    {
      name: "Humanities and Social Sciences",
      courses: [
        { id: 34, title: "Psychology", description: "Psychology degree program.", price: "$180" },
        { id: 35, title: "Sociology", description: "Sociology studies.", price: "$160" },
        { id: 36, title: "International Relations", description: "International relations course.", price: "$190" },
        { id: 37, title: "Political Science", description: "Political science.", price: "$170" },
        { id: 38, title: "Education", description: "Education degree.", price: "$150" },
        { id: 39, title: "Journalism and Mass Communication", description: "Journalism and communication.", price: "$140" },
      ],
    },

    {
      name: "STEM Courses",
      courses: [
        { id: 40, title: "Computer Science", description: "Computer science program.", price: "$220" },
        { id: 41, title: "Mechanical Engineering", description: "Mechanical engineering.", price: "$240" },
        { id: 42, title: "Electrical Engineering", description: "Electrical engineering.", price: "$230" },
        { id: 43, title: "Civil Engineering", description: "Civil engineering.", price: "$210" },
        { id: 44, title: "Biotechnology", description: "Biotechnology course.", price: "$250" },
        { id: 45, title: "Environmental Science", description: "Environmental science.", price: "$200" },
      ],
    },

    {
      name: "Language and Foundation Programs",
      courses: [
        { id: 46, title: "IELTS / TOEFL Preparation", description: "English test preparation.", price: "$80" },
        { id: 47, title: "GRE / GMAT Preparation", description: "Graduate test prep.", price: "$100" },
        { id: 48, title: "English Foundation Courses", description: "English foundation.", price: "$70" },
        { id: 49, title: "Pre‑Masters Programs", description: "Pre-masters preparation.", price: "$120" },
        { id: 50, title: "Pathway Programs", description: "Pathway to university.", price: "$90" },
      ],
    },

    {
      name: "Short‑Term and Certification Courses",
      courses: [
        { id: 51, title: "Coding Bootcamps", description: "Intensive coding training.", price: "$300" },
        { id: 52, title: "Business Analytics Certifications", description: "Business analytics cert.", price: "$150" },
        { id: 53, title: "Hospitality and Tourism", description: "Hospitality and tourism.", price: "$130" },
        { id: 54, title: "Culinary Arts", description: "Culinary arts course.", price: "$160" },
        { id: 55, title: "Entrepreneurship Programs", description: "Entrepreneurship training.", price: "$140" },
      ],
    },
  ];

  const defaultImage = "/course-default-image.jpg";

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0B7077] to-[#FD661F]/70 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h2 className="text-3xl lg:text-6xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock Your Potential with Our <span className="text-[#FD661F]">Courses</span>
          </h2>
          <p className="text-[16px] lg:text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Learn from industry experts and advance your career with our comprehensive educational programs.
          </p>
          <button className="bg-white cursor-pointer text-[#0B7077] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Get Started Today
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent"></div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="lg:text-4xl md:text-4xl text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Courses</h3>
            <p className="text-[16px] lg:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of educational programs designed to meet your learning goals and career aspirations.
            </p>
          </div>

          {courseCategories.map((category) => (
            <div key={category.name} className="mb-20">
              <div className="flex items-center mb-10">
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
                <h4 className="lg:text-3xl md:text-3xl text-2xl font-bold text-gray-900 px-6 bg-white relative z-1">
                  {category.name}
                </h4>
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div className="relative">
                      <img src={defaultImage} alt={course.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-sm font-semibold text-gray-800">{course.price}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B7077]/80 transition-colors duration-200">
                        {course.title}
                      </h5>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {course.description}
                      </p>
                      <PrimaryButton name={"Enroll Now"} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
