import Logo from "@/assets/logo.webp";
import { Icon } from "@iconify/react";
function App() {
  return (
    <div className="w-full flex items-center justify-around flex-col gap-6">
      <nav className="p-4 flex items-center justify-around w-full h-20 shadow-xl">
        <img
          src={Logo}
          alt="logo"
          className="w-12"
        />
        <div className="w-1/4 flex items-center justify-around gap-4">
          <a
            href="#projects"
            className="text-primary hover:scale-110 hover:font-extrabold"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-primary hover:scale-110 hover:font-extrabold"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-primary hover:scale-110 hover:font-extrabold"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
