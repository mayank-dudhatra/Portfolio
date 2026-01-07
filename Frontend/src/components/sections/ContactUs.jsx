import { useState } from "react";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://portfolio-ycp9.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setResponseMessage("Server error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <>
    <div className="py-16 px-5 mt-32 max-w-7xl mx-auto">
      <h3 className="text-[#80db66] font-jost text-center font-semibold text-xl uppercase tracking-[10px]">
        Contact Me
      </h3>
      <h2 className="text-[#2e2e37] font-jost text-center text-3xl sm:text-[55px] font-bold mt-4">
        Let's Start A New Project
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-14 w-full">
        <div className="space-y-8 w-full max-w-lg">
          {[
            { label: "Location", value: "Rai University, Ahmedabad", img: "ugi0crtjdheiuvsrnhyi.png" },
            { label: "Phone", value: "+91 8155814237", img: "usf6jdg2okyyqbiwtymw.png" },
            { label: "Email", value: "maynkdudhatracg@gmail.com", img: "nw9cn5rsrjzsvjhvxmrk.png" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#80db66] p-3 rounded-full">
                <img
                  src={`https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739953054/${item.img}`}
                  alt={item.label}
                  className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-[24px] text-[#2e2e37] font-jost font-semibold">{item.label}</h4>
                <p className="text-[#4d4d5c] font-jost mt-2 text-sm sm:text-[20px]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="p-6 rounded-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["name", "email"].map((field, index) => (
              <input
                key={index}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="border border-gray-300 p-3 rounded-lg w-full h-[50px] sm:h-[60px]"
                required
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {["phone", "subject"].map((field, index) => (
              <input
                key={index}
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="border border-gray-300 p-3 rounded-lg w-full h-[50px] sm:h-[60px]"
                required
              />
            ))}
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Start writing message here"
            className="border border-gray-300 p-3 rounded-lg w-full h-[150px] sm:h-[200px] resize-none mt-4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#80db66] text-white px-6 py-3 text-center rounded-lg mt-4 w-full sm:w-[183px] h-[50px] sm:h-[53px] font-semibold text-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Now"}
          </button>

          {responseMessage && (
            <p className="mt-4 text-center text-lg font-semibold text-gray-600">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>


    <div className="flex justify-center items-center mt-6">
  <div className="grid grid-cols-4 gap-4 p-4">
    {[
      {
        href: "https://github.com/mayank-dudhatra",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897857/arwcxchywugmmwhhoyfb.png",
        alt: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/mayank-dudhatra-cg/",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897906/pjr9ozwfpkydjume90jc.png",
        alt: "LinkedIn",
      },
      {
        href: "https://x.com/cg_mayank",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897781/mrqilasxjzcnv4apdpb8.png",
        alt: "Twitter",
      },
      {
        href: "https://leetcode.com/u/mayank_dudhatra_06/",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897949/wbww9wmzmsj4vryaaiiv.png",
        alt: "Leetcode",
      },
    ].map((social, index) => (
      <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
        <div className="w-16 h-16 rounded-[10px] border border-[#ccd3d9] flex items-center justify-center transition-all duration-300 hover:rotate-180 hover:bg-[#80db66] hover:scale-110">
          <img src={social.imgSrc} alt={social.alt} className="w-7 transition-all duration-300" />
        </div>
      </a>
    ))}
  </div>
</div>



    </>
  );
}