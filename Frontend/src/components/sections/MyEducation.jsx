export default function Myeducation() {
  return (
    <section className="py-12 px-6 mt-60 rounded-lg">
      <div className="mx-auto flex gap-10 items-center lg:flex-row flex-col">
        <div className="lg:w-[60%] w-full">
          <header>
            <h3 className="leading-none text-[#80db66] tracking-[12.96px] text-[36px] font-semibold max-md:text-[28px] max-md:tracking-[8px]">
              EDUCATION
            </h3>
            <h1 className="text-[55px] font-jost text-[#2e2e37] font-semibold mt-2 max-md:text-[40px]">My Education</h1>
            <p className="mt-4 text-lg text-[#4d4d5c] max-md:text-base">
              I am currently pursuing a Bachelor of Technology in Computer Science Engineering, enhancing my skills in
              Full Stack Development, UI/UX Design, and Web Technologies to create seamless and scalable digital
              solutions.
            </p>
          </header>

          <div className="mt-8 space-y-6">
            {/* Higher Secondary Certificate */}
            <div className="flex items-start gap-6 rounded-lg flex-col md:flex-row">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ba0099ed7733ab73ed996ad6424497f0e8cceb72a7d0c056983f1f03d740ec"
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-[34px] font-semibold text-[#2e2e37] max-md:text-[28px]">
                  Higher Secondary Certificate
                </h2>
                <p className="text-[20px] text-[#2e2e37] font-semibold max-md:text-[18px]">
                  Alpha Vidhya Sankul, Junagadh <span className="text-[#4d4d5c]">(2022 - 2024)</span>
                </p>
                <p className="text-[#4d4d5c] mt-4 text-[22px] max-md:text-[18px]">
                  Successfully completed Higher Secondary Education, building a strong academic foundation before transitioning into the field of technology.
                </p>
                <p className="mt-2 text-[22px] font-semibold text-[#2e2e37] max-md:text-[18px]">
                  Scored: <strong className="text-[#80db66]">81.73%</strong>
                </p>
              </div>
            </div>

            {/* Bachelor of Technology in CSE */}
            <div className="flex items-start gap-6 rounded-lg flex-col md:flex-row">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ba0099ed7733ab73ed996ad6424497f0e8cceb72a7d0c056983f1f03d740ec"
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-[34px] font-semibold text-[#2e2e37] max-md:text-[28px]">
                  Bachelor of Technology in CSE
                </h2>
                <p className="text-[20px] text-[#2e2e37] font-semibold max-md:text-[18px]">
                  Rai University <span className="text-gray-500">(2024 - 2028)</span>
                </p>
                <p className="text-[#4d4d5c] mt-4 text-[22px] max-md:text-[18px]">
                  Gaining expertise in Full Stack Development, UI/UX Design, and Web Technologies, with a strong focus on
                  creating user-centric and scalable solutions.
                </p>
                <p className="mt-2 text-[22px] font-semibold text-[#2e2e37] max-md:text-[18px]">
                  Current CGPA: <strong className="text-[#80db66]">9.76</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:w-[40%] w-full mt-8 lg:mt-0">
          <img
            src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/education-img.jpg"
            alt="Education Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </aside>
      </div>
    </section>
  );
}