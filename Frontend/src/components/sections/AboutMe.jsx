export default function AboutMe() {
  return (
    <section className="py-14 md:pt-60 px-4 sm:px-6 lg:px-8">
      <section className="py-14 md:pt-60 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-5/12 lg:w-[44%]">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739904150/qi2nacxd106x8pqnq6uu.png"
              className="object-contain w-full aspect-[0.86] rounded-lg "
              alt="Profile"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12 lg:w-[56%]">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#80db66] tracking-[8px] sm:tracking-[10px] lg:tracking-[12.96px] uppercase">
                About Me
              </h1>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2E2E37] leading-tight sm:leading-snug lg:leading-[60px]">
                Building Seamless & Scalable Digital Solutions
              </h2>
              <p className="mt-6 text-base sm:text-lg lg:text-2xl text-[#4D4D5C] leading-relaxed">
                I'm a UI/UX Designer and Full Stack Developer passionate about designing intuitive user experiences and
                building scalable web solutions. My journey began with cloning platforms like Amazon and YouTube,
                refining my frontend skills. Over time, I expanded into backend development, working on full-stack
                projects like TRAZEX11 and QuadFusion blending creativity with functionality.
              </p>

              {/* Info Section */}
              <section className="mt-8 w-full">
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                  {/* Left Column */}
                  <div className="w-full sm:w-1/2">
                    <dl className="grid grid-cols-2 gap-y-3 text-base sm:text-lg lg:text-2xl text-[#4D4D5C]">
                      <dt className="font-semibold">Name</dt>
                      <dd>Mayank Dudhatra</dd>
                      <dt className="font-semibold">Age</dt>
                      <dd>18 Years</dd>
                      <dt className="font-semibold">Address</dt>
                      <dd>Ahemdabad</dd>
                    </dl>
                  </div>

                  {/* Right Column */}
                  <div className="w-full sm:w-1/2">
                    <dl className="space-y-3 text-base sm:text-lg lg:text-2xl text-[#4D4D5C]">
                      <div className="flex gap-4">
                        <dt className="font-semibold whitespace-nowrap">E-Mail</dt>
                        <dd className="text-sm sm:text-base lg:text-xl break-all">
                          mayankdudhatracg@gmail.com
                        </dd>
                      </div>
                      <div className="flex gap-4">
                        <dt className="font-semibold whitespace-nowrap">Phone</dt>
                        <dd>+91 8155814237</dd>
                      </div>
                      <div className="flex gap-4">
                        <dt className="font-semibold whitespace-nowrap">Nationality</dt>
                        <dd>Indian</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Signature Section - Optimized for Laptop */}
              <div className="mt-8 w-full">
                {/* Show this version only on laptop screens (lg: 1024px - 1440px) */}
                <div className="hidden lg:flex xl:hidden gap-6 items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/122dbb8d77ee6be98e039605b7778fed68ad6746969e2b1b281318392c4a9fd9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
                    className="object-contain w-[149px] aspect-[2.44] rounded-md shadow-sm"
                    alt="Signature"
                  />
                  <div className="flex gap-4 items-center">
                    <p className="text-2xl font-semibold text-black">Mayank Dudhatra</p>
                    <p className="text-base text-black">--- CSE</p>
                  </div>
                </div>

                {/* Simplified version for mobile, tablet, and larger desktops */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center lg:hidden xl:flex">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/122dbb8d77ee6be98e039605b7778fed68ad6746969e2b1b281318392c4a9fd9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
                    className="object-contain w-[100px] sm:w-[120px] aspect-[2.44] rounded-md"
                    alt="Signature"
                  />
                  <p className="text-lg sm:text-xl font-semibold text-black">Mayank Dudhatra --- CSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}