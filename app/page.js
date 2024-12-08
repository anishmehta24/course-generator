import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
   <div  className="relative bg-cover bg-center bg-no-repeat"
   style={{
       backgroundImage: "url('/background.jpg')",
       backgroundColor: "#5e0acc", // Fallback color if image fails to load
   }}>
   <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
   <Header/>
   <Hero/>
   </div>
  );
}
