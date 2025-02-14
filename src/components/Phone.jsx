const Phone = () => {
  return (
    
      <section
        className="bg-blend-darken bg-black/80 flex flex-col rounded-2xl md:rounded-s-[38px] md:pl-6 px-3 py-5 bg-center bg-cover text-white right-0"
        style={{ backgroundImage: "url(assets/phone1.jpg)" }}
      >
        <div className="flex mb-10 justify-between items-center">
          <div className="flex">
            <p className="lg:text-lg md:pl-6">9:41</p>
          </div>
          <div>
            <div className="bg-black w-12 lg:w-28 rounded-3xl h-3 lg:h-8">
              {/* black bar */}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src="/assets/signal.svg"
              alt="signal-bar"
              className="w-3 lg:w-5"
            />
            <img src="/assets/wifi.svg" alt="wifi" className="w-4 lg:w-5" />
            <img
              src="/assets/battery2.svg"
              alt="battery"
              className="w-3 lg:w-6 h-5"
            />
          </div>
        </div>
        <div className="flex flex-col mb-12 lg:mb-22 gap-2.5 lg:gap-4">
          <h4 className="md:text-2xl text-3xl lg:text-4xl font-semibold ">The Beauty Loft</h4>
          <p className="text-xs lg:text-sm text-white/65">
            123 Main Street, New York, NY
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <h5 className="text-2xl md:text-lg lg:text-2xl">How can we help you?</h5>
          <div className="flex flex-col gap-5">
            <div className="border-2 flex rounded-4xl lg:rounded-s-[36px] lg:rounded-e-[38px] justify-between items-center ">
              <div className="flex items-center lg:py-6  py-3 pl-3 lg:pl-7  justify-start">
                <p className="text-sm lg:text-md text-white/70">
                  Who to book with?
                </p>
              </div>
              <div className="flex w-8 mr-2 lg:w-18 border-2 rounded-full aspect-square items-center lg:p-4">
                <img src="/assets/main-arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="border-2 flex rounded-4xl lg:rounded-s-[36px] lg:rounded-e-[38px] justify-between items-center ">
              <div className="flex items-center lg:py-6  py-3 pl-3 lg:pl-7  justify-start">
                <p className="text-sm lg:text-md text-white/70">
                  When is it convenient for you?
                </p>
              </div>
              <div className="flex w-8 mr-2 lg:w-18 border-2 rounded-full aspect-square items-center lg:p-4">
                <img src="/assets/main-arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="border-2 flex rounded-4xl lg:rounded-s-[36px] lg:rounded-e-[38px] justify-between items-center ">
              <div className="flex items-center lg:py-6  py-3 pl-3 lg:pl-7  justify-start">
                <p className="text-sm lg:text-md text-white/70">
                  Which service?
                </p>
              </div>
              <div className="flex w-8 mr-2 lg:w-18 border-2 rounded-full aspect-square items-center lg:p-4">
                <img src="/assets/main-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-2 rounded-[40px] px-10 justify-between py-5 mt-20 md:mt-35 lg:mt-48">
          <img className="w-6 lg:w-10" src="/assets/home.svg" alt="home" />
          <img className="w-6 lg:w-8" src="/assets/chat-white.svg" alt="chat" />
          <img
            className="w-6 lg:w-8"
            src="/assets/calendar-minus.svg"
            alt="calender"
          />
          <img className="w-6 lg:w-8" src="/assets/user-white.svg" alt="user" />
        </div>
      </section>
    
  );
};

export default Phone;
