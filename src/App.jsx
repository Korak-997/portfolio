import Logo from "@/assets/logo.webp";
import { Icon } from "@iconify/react";
import IntroSection from "./sections/Intro";
function App() {
  return (
    <div className="w-full flex items-center justify-around flex-col gap-6">
      <nav className="p-4 lg:flex md:flex items-center justify-between w-full h-20 shadow-xl hidden">
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
      <IntroSection />
      <footer className="flex lg:hidden md:hidden items-center justify-between w-full h-16 absolute bottom-0 z-10">
        <a
          href="#projects"
          className="text-primary hover:bg-primary hover:text-background text-4xl flex-1 flex items-center justify-center h-full"
        >
          <Icon icon="grommet-icons:projects" />
        </a>
        <a
          href="#about"
          className="text-primary hover:bg-primary hover:text-background text-4xl flex-1 flex items-center justify-center h-full"
        >
          <Icon icon="mdi:about-variant" />
        </a>
        <a
          href="#contact"
          className="text-primary hover:bg-primary hover:text-background text-4xl flex-1 flex items-center justify-center h-full"
        >
          <Icon icon="mdi:message" />
        </a>
      </footer>
    </div>
  );
}

export default App;
