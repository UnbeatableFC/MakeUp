import AppointmentCard from "./components/AppointmentCard";
import Phone from "./components/pHONE.JSX";

const MainDiv = () => {
  return (
    <section className="bg-[url('assets/background.jpg')] relative h-[960px] my-1 flex flex-col pl-6 py-5 bg-center bg-cover w-9/11 mx-auto">
      <AppointmentCard />
      <div className="absolute top-10 right-0 w-3/10 pl-2 py-2 border-3 rounded-s-[38px] border-yellow-500/50">
        <Phone />
      </div>
      <div className="flex max-w-[815px] absolute bg-transparent bottom-16 left-20">
        <div className="absolute backdrop-blur-sm bg-blend-darken bg-black/80 z-1 opacity-100 w-2 h-36 top-35 right-8"></div>
        <h1 className="text-[124px] z-10 leading-32 font-extrabold  text-[#FFCD3F]">
          Make appointments online
        </h1>
      </div>
    </section>
  );
};

export default MainDiv;
