export default function Cards() {
  return (
    <>
      <div className="relative bg-[#E2ECF6] pt-20 pb-40 md:pt-40 md: flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:-translate-y-8">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739902939/ptl0oia57yacb3r9ghkv.png"
            alt="Dedication"
            className="mx-auto"
          />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:translate-y-6">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903128/gnmfjznksfnzgwgmxvjc.png"
            alt="Smart Work"
            className="mx-auto"
          />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:-translate-y-8">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903225/hhwd5e3m3g807ruaedn3.png"
            alt="Collaboration"
            className="mx-auto"
          />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:translate-y-6">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903259/kg2cktz8tr3qmj8vbhpe.png"
            alt="Technology"
            className="mx-auto"
          />
        </div>

        <div className="hidden md:block absolute -bottom-8 right-0 text-[100px] md:text-[200px] font-bold text-[#F0F7FE] leading-none">
          Mayank
        </div>
      </div>
    </>
  );
}
