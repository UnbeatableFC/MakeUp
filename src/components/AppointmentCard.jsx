const AppointmentCard = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center border-3 rounded-3xl border-orange-100/55 backdrop-blur-xl absolute gap-6 text-white left-15 top-18">
      <div className="flex flex-col justify-center items-center ">
        <h6 className="text-lg">Appointment Confirmed</h6>
        <p className="text-[11px] text-white/65">
          You are scheduled with Alex Carlow
        </p>
      </div>
      <div className="flex gap-3 text-start">
        <div className="relative gap-2 flex items-center">
          <div className="w-12 border-1 relative border-orange-300 rounded-full">
            <div>
              <img
                className="rounded-full aspect-square object-cover"
                src="/assets/alex2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="absolute"></div>
        </div>
        <div className="flex items-start justify-center flex-col">
          <h5 className="text-lg -mb-1">Alex Carlow</h5>
          <p className="text-[15px]">
            ⭐⭐⭐⭐⭐{" "}
            <span className="font-extralight text-lg">5.0</span>
          </p>
          <p className="text-xs text-white/55">
            Barcelona carrer de Valencia,196
          </p>
        </div>
      </div>
      <div className="flex mb-1 justify-between gap-9 items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[11px]">Sat 08 Feb 11:00-12:00</p>
          <p className="text-[11px] text-white/75">Woman Haircut</p>
        </div>
        <div className="text-lg">$ 80.00</div>
      </div>
      <div className="flex bg-amber-300 rounded-3xl">
        <button className="py-3 px-14 text-xs text-black font-semibold ">
          Add to Calender
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
