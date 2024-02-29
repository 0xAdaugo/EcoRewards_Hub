import siteLogo from "../../assets/img/ecoRewardsHub-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5">
      <div className="container">
        <div className="text-center">
          <p className="m-0">
            <img alt="EcoRewards Hub" src={siteLogo} height="24" />
            &nbsp; &copy; {currentYear}&nbsp;
            <a href="./">
              <strong>EcoRewards Hub</strong>
            </a>
            . <br className="d-md-none" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
