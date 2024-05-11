function Arrive() {
  return (
    <div
      id="arrive"
      className="w-full h-full overflow-hidden pt-12 bg-[#F5F5F5]"
    >
      <div className="flex flex-col gap-2 justify-center items-center w-full h-36 font-juliusSans">
        <div className="flex w-full relative">
          <span className="flex justify-center text-3xl w-full">
            VINTAGE ROSE
          </span>
        </div>
        <span className="text-xs">My Favorite Colors are flowers</span>
      </div>
      <div className="flex w-full h-full justify-center items-center relative overflow-hidden">
        <img
          className="absolute translate-y-96"
          src="/arrive.jpg"
          style={{ maxWidth: "none" }}
        />
        <div className="flex flex-col gap-10 -translate-y-20">
          <span className="text-white mx-8 text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Welcome to Vintage Rose -<br />
            Where Blossoms Meet Bliss!
          </span>
          <a
            href="#shop"
            className="flex h-24 w-64 mx-8 justify-center items-center bg-white relative cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_4.2px_4.2px_rgba(0,0,0,0.8)] duration-150"
          >
            <span className="text-4xl">SHOP NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Arrive;
