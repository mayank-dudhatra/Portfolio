export default function HeroSection() {
  return (
    <>
    <div className=" bg-cover bg-center bg-[url('https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739889585/bkqz5lacwtir0dtytkab.png')]">
      <nav className=" top-0 left-0 w-full flex justify-end items-center font-jost gap-16 text-[22px] font-medium leading-10 text-white py-9 px-12">
        <div className='text-[#80db66]'>Home</div>
        <div>About</div>
        <div>Work</div>
        <div>Service</div>
        <div>Contact Us</div>
        <button className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition">
          Download CV
        </button>
      </nav>
      <div className="flex items-center justify-evenly">
      <div className="flex items-center justify-between pt-12 h-full">
        <div className="ml-10">
          <p className="text-[#80db66] text-[36px] font-jost leading-[1.3] tracking-[7px] font-medium">
            HELLO I’M
          </p>
          <h1 className="text-white font-jost text-[120px] font-semibold leading-none">
            Mayank Dudhatra
          </h1>
          <p className="text-[36px] text-white mt-4">
            A Passionate <span className="text-[#80db66] font-semibold">Full Stack Developer</span>
          </p>
          <button className="mt-6 bg-[#80db66] text-white text-[24px] font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition">
            SAY HELLO
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739895501/vp8bahhpvyzb8qo8estx.png"
            alt="Profile"
            className="w-[684px] ]"
          />
        </div>
      </div>
      
      <div className="flex flex-col pl-10 mr-10 gap-10 perspective-1000">
  <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300">
    <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897857/arwcxchywugmmwhhoyfb.png" alt="" />
  </i>
  <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-x-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300">
    <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897906/pjr9ozwfpkydjume90jc.png" alt="" />
  </i>
  <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-x-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300">
    <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897781/mrqilasxjzcnv4apdpb8.png" alt="" />
  </i>
  <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-x-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300">
    <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897949/wbww9wmzmsj4vryaaiiv.png" alt="" />
  </i>
</div>

    </div>
    </div>

    </>
  );
}
