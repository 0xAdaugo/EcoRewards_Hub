export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-5">
      <p className="text-cente">
        &copy; {currentYear}{" "}
        <a href="./">
          <strong>EcoRewards Hub</strong>
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
