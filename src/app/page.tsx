import ContactUs from "@/components/QnA";
import Hero from "@/components/Hero";
import SectionFeature from "@/components/SectionFeature";
import Workspace from "@/components/Workspaces";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero />
      <SectionFeature />
      <Workspace/>
      <ContactUs/>
      <Footer></Footer>      
    </div>
  );
}
