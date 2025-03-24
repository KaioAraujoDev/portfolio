import Header from "./components/header";
import Profile from "./components/profile";
import TechList from "./components/techlist";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Page() {
  return (
    <>
      <Header/>
      <Profile/>
      <TechList/>
      <Projects/>
      <Contact/>
    </>
  );
}
