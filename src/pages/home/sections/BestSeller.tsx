function BestSeller() {
  return (
    <div
      id="bestSeller"
      className="flex gap-32 flex-col justify-center items-center w-full h-fit py-32 text-[#545761]"
    >
      <span className="mx-8 text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
        FRESH AND BEAUTIFUL FLOWERS
      </span>
      <div className="flex gap-2 flex-wrap justify-evenly h-full w-full">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center items-center h-72 overflow-hidden">
            <img className="h-96 w-72" src="/vintagerose/bestSeller1.jpg" />
          </div>
          <span>Sade Love</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center h-72 overflow-hidden">
            <img className="h-96 w-72" src="/vintagerose/bestSeller2.jpg" />
          </div>
          <span>Marry Me</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center h-72 overflow-hidden">
            <img className="h-96 w-72" src="/vintagerose/bestSeller3.jpg" />
          </div>
          <span>Send Love</span>
        </div>
      </div>
      <span className="mx-8 text-xl md:text-2xl lg:text-4xl xl:text-5xl">
        Our best selling bouquets
      </span>
    </div>
  );
}

export default BestSeller;
