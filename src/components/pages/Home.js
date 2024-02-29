import Hero from "./Hero";
import OurProcesses from "../HowWeWork";
import Partners from "../Partners";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>EcoRewards Hub</title>
      </Helmet>
      <div className="container-fluid p-0">
        <Hero />
        <OurProcesses />
        <Partners />
      </div>
    </>
  );
}

export default Home;
