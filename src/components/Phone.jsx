const Phone = () => {
  return (
    
      <section
        className="bg-blend-darken bg-black/80 flex flex-col rounded-s-[38px] pl-6 py-5 bg-center bg-cover text-white right-0"
        style={{ backgroundImage: "url(assets/phone1.jpg)" }}
      >
        <div className="flex mb-10 justify-between items-center">
          <div className="flex">
            <p className="text-lg pl-6">9:41</p>
          </div>
          <div>
            <div className="bg-black w-28 rounded-3xl h-8">
              {/* black bar */}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src="/assets/signal.svg"
              alt="signal-bar"
              className="w-5"
            />
            <img src="/assets/wifi.svg" alt="wifi" className="w-5" />
            <img
              src="/assets/battery2.svg"
              alt="battery"
              className="w-6 h-5"
            />
          </div>
        </div>
        <div className="flex flex-col mb-22 gap-4">
          <h4 className="text-4xl font-semibold ">The Beauty Loft</h4>
          <p className="text-sm text-white/65">
            123 Main Street, New York, NY
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <h5 className="text-2xl">How can we help you?</h5>
          <div className="flex flex-col gap-5">
            <div className="border-2 flex rounded-s-[36px] rounded-e-[38px] justify-between items-center ">
              <div className="flex items-center py-6  pl-7  justify-start">
                <p className="text-md text-white/70">
                  Who to book with?
                </p>
              </div>
              <div className="flex w-18 border-2 rounded-full aspect-square items-center p-4">
                <img src="/assets/main-arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="border-2 flex rounded-s-[36px] rounded-e-[38px] justify-between items-center ">
              <div className="flex items-center py-6  pl-7  justify-start">
                <p className="text-md text-white/70">
                  When is it convenient for you?
                </p>
              </div>
              <div className="flex w-18 border-2 rounded-full aspect-square items-center p-4">
                <img src="/assets/main-arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="border-2 flex rounded-s-[36px] rounded-e-[38px] justify-between items-center ">
              <div className="flex items-center py-6  pl-7  justify-start">
                <p className="text-md text-white/70">
                  Which service?
                </p>
              </div>
              <div className="flex w-18 border-2 rounded-full aspect-square items-center p-4">
                <img src="/assets/main-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-2 rounded-[40px] px-10 justify-between py-5 mt-48">
          <img className="w-10" src="/assets/home.svg" alt="home" />
          <img className="w-8" src="/assets/chat-white.svg" alt="chat" />
          <img
            className="w-8"
            src="/assets/calendar-minus.svg"
            alt="calender"
          />
          <img className="w-8" src="/assets/user-white.svg" alt="user" />
        </div>
      </section>
    
  );
};

export default Phone;
