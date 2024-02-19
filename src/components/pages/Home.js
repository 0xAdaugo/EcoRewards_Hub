import Hero from "./Hero";
import OurProcesses from "../HowWeWork";
import Partners from "../Partners";

function Home() {
  return (
    <div className="container-fluid p-0">
      <Hero />
      <OurProcesses />
      <Partners />
    </div>
  );
}

export default Home;
