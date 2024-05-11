function AboutUs() {
  return (
    <div
      id="aboutUs"
      className="flex flex-col lg:flex-row w-full h-fit bg-[#eee7d7] text-[#545761] overflow-hidden"
    >
      <div className="flex flex-col gap-20 w-full lg:w-1/2 py-32 px-8">
        <span className="text-7xl xl:text-8xl font-bold">About us</span>
        <span className="text-xl md:text-4xl lg:text-3xl">
          Established this Year, Vintage Rose is the vibrant brainchild of a
          team of budding florists and dreamers, united by a shared love for all
          things floral. With fresh ideas and boundless creativity, we've set
          out on a mission to redefine the flower-shopping experience and bring
          a touch of floral magic to every doorstep in our community.
        </span>
        <a
          href="#shop"
          className="flex h-24 w-64 mt-24 justify-center items-center bg-[#545761] relative cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_4.2px_4.2px_rgba(0,0,0,0.8)] duration-150"
        >
          <span className="text-4xl text-white">SHOP NOW</span>
        </a>
      </div>
      <div className="lg:w-1/2 relative overflow-hidden">
        <img
          className="hidden lg:block lg:absolute lg:-translate-y-96"
          src="/aboutUs.jpg"
          style={{ maxWidth: "none" }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
