import { useRef } from "react";

function Shop() {
  const elementRef = useRef(null);

  const handleHorizantalScroll = (
    element: any,
    speed: any,
    distance: any,
    step: any
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div
      id="shop"
      className="flex flex-col w-full h-fit bg-white text-[#545761] relative"
    >
      <div className="flex flex-col w-full px-16 py-32">
        <div className="flex flex-col">
          <span className="text-5xl">Vintage Rose Shop</span>
          <span className="text-xl ml-5">The art of gifting</span>
        </div>
      </div>
      <div className="flex justify-evenly w-full pb-32">
        <div
          className="flex justify-center items-center mb-20"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 2, 360, -20);
          }}
        >
          <svg
            id="Icons"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-90"
            fill="#545761"
          >
            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.707,9.707a1,1,0,0,1-1.414,0L13,8.414V18a1,1,0,0,1-2,0V8.414L8.707,10.707A1,1,0,1,1,7.293,9.293l4-4a1,1,0,0,1,1.414,0l4,4A1,1,0,0,1,16.707,10.707Z" />
          </svg>
        </div>
        <div className="w-10/12 lg:w-11/12">
          <div
            className="flex gap-20 px-3 h-full w-full overflow-hidden"
            ref={elementRef}
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/bestSeller1.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Sade Love</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">450 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/arrive.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Daisy</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">200 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/shop1.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Rosalina</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">400 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/shop2.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Tulipa</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">200 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/bestSeller3.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Casandra</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">250 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/bestSeller1.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Sade Love</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">450 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/arrive.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Daisy</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">200 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/shop1.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Rosalina</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">400 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/shop2.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Tulipa</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">200 RON</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center h-72 overflow-hidden">
                <img
                  className="h-96 w-72"
                  src="/vintagerose/bestSeller3.jpg"
                  style={{ maxWidth: "none" }}
                />
              </div>
              <div className="flex flex-col">
                <span>Casandra</span>
                <span className="opacity-40">Vintage Rose</span>
                <span className="font-bold">250 RON</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center mb-20 cursor-pointer"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 2, 360, 20);
          }}
        >
          <svg
            id="Icons"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90"
            fill="#545761"
          >
            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.707,9.707a1,1,0,0,1-1.414,0L13,8.414V18a1,1,0,0,1-2,0V8.414L8.707,10.707A1,1,0,1,1,7.293,9.293l4-4a1,1,0,0,1,1.414,0l4,4A1,1,0,0,1,16.707,10.707Z" />
          </svg>
        </div>
      </div>
      <div className="relative w-full h-[50rem] overflow-hidden flex flex-col justify-center items-center">
        <img
          className="absolute translate-y-40"
          src="/vintagerose/shop3.jpg"
          style={{ maxWidth: "none" }}
        />
        <div className="flex flex-col w-full lg:w-1/2 self-end">
          <span className="relative text-white text-4xl bg-[#20290A] p-2 w-fit">
            GIFTING DONE RIGHT
          </span>
          <span className="relative text-white text-6xl font-bold">
            WE OFFER A BEAUTIFUL SELECTION OF GIFTS FOR YOUR LOVED ONES.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Shop;
