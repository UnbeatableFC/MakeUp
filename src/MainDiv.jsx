import AppointmentCard from "./components/AppointmentCard";
import Phone from "./components/Phone";

const MainDiv = () => {
  return (
    <section className="bg-[url('/assets/background.jpg')] relative sm:h-[960px] md:h-[840px] lg:h-[960px] object-contain my-1 flex flex-col-reverse gap-10 md:pl-6 py-5 bg-center bg-cover mx-3 lg:w-9/11 lg:mx-auto">
      <AppointmentCard />
      <div className="flex flex-col-reverse gap-10">
        <div className="md:absolute top-10 right-0 w-8/9 mx-auto md:w-5/12 lg:w-4/11 px-1 md:pl-2 py-2 border-3 rounded-2xl md:rounded-s-[38px] border-yellow-500/50">
          <Phone />
        </div>
        <div className="flex max-w-[439px]  lg:max-w-[658px] md:absolute bg-transparent bottom-40 lg:bottom-16 lg:left-20">
          <div className="absolute backdrop-blur-sm bg-blend-darken bg-black/80 z-1 opacity-0 md:opacity-100 w-2   h-22 lg:h-36 top-18 lg:top-33 right-8"></div>
          <h1 className="md:text-[68px] text-5xl md:text-start text-center md:leading-18 lg:text-8xl z-10 lg:leading-32 font-extrabold  text-[#FFCD3F]">
            Make appointments online
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MainDiv;
