export default function Service() {
  return (
    <div className="bg-[#25262f] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 text-center">
      <div className="text-[#80db66] font-jost text-lg sm:text-xl md:text-2xl lg:text-[36px] font-medium tracking-[2px] sm:tracking-[3px] md:tracking-[6px] lg:tracking-[10px] uppercase">
        Service
      </div>
      <div className="text-white font-jost font-semibold text-xl sm:text-2xl md:text-4xl lg:text-[55px] mt-2 pb-4 sm:pb-6 md:pb-8">
        What I Offer
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-10 mt-6 sm:mt-8 md:mt-10 max-w-7xl mx-auto px-4 sm:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 bg-white rounded-xl w-full max-w-[650px] min-h-[180px] sm:min-h-[200px]"
          >
            <img
              loading="lazy"
              src={service.image}
              alt={service.title}
              className="object-contain w-12 sm:w-14 md:w-16 lg:w-[72px] h-12 sm:h-14 md:h-16 lg:h-[72px] self-start sm:self-center flex-shrink-0"
            />
            <div className="text-left flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[35px] pl-0 sm:pl-4 md:pl-6 lg:pl-8 font-jost text-[#2e2e37] font-semibold">
                {service.title}
              </h2>
              <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-[22px] pl-0 sm:pl-4 md:pl-6 lg:pl-8 font-jost text-[#4d4d5c]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Proficient in building dynamic, responsive websites and applications using modern technologies such as JavaScript, Node.js, React, and MongoDB.",
  },
  {
    title: "UI/UX Design",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Skilled in creating intuitive and aesthetically appealing interfaces, focused on delivering an engaging user experience with tools like Figma.",
  },
  {
    title: "Frontend Development",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Experienced in crafting responsive and user-friendly web pages using HTML, CSS, JavaScript, and frontend frameworks like React, ensuring a seamless and accessible user interface.",
  },
  {
    title: "Backend Development",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Expertise in building server-side applications with Node.js, Express, and managing databases like MongoDB and MySQL, ensuring efficient, secure, and scalable backend solutions.",
  },
];