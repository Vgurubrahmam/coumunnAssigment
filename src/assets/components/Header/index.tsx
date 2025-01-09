import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="flex shadow-md bg-black py-1 px-12 text-white min-h-[70px] -tracking-wide relative">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="#">
          <img
            src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/d7fb35d10a5d5473989ba4ec575b8af8fe1f746c"
            className="w-20 h-20"
            alt="Logo"
          />
        </a>
        <div className="flex flex-row gap-12 items-center">
         
          <Menu onClick={toggleMenu}
            className="lg:hidden text-white px-4 py-2 border border-white  rounded-md  sticky top-0"/>
          <div className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
            <button className="text-white hover:text-gray-400 max-sm:px-6">Home</button>
            <div className="relative">
              <button
                className="text-white hover:text-gray-400 flex items-center"
                onClick={() => handleMenuClick("Living")}
              >
                Living {activeMenu === "Living" ? <ChevronUp  /> : <ChevronDown />}
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ${activeMenu === "Living" ? 'block' : 'hidden'}`}
              >
                <a href="#" className="block px-4 py-2">TV Units</a>
                <a href="#" className="block px-4 py-2">Box Shelves</a>
                <a href="#" className="block px-4 py-2">Shoe Rack</a>
                <a href="#" className="block px-4 py-2">Dressing Table</a>
                <a href="#" className="block px-4 py-2">Wardrobes</a>
              </div>
            </div>
            {["Storage", "Dining", "Bedroom", "Matress", "Study", "Office", "Outdoor"].map((item) => (
              <div key={item} className="relative">
                <button
                  className="text-white hover:text-gray-500 flex items-center "
                  onClick={() => handleMenuClick(item)}
                >
                  {item} {activeMenu === item ? <ChevronUp  className="text-[5px] "/> : <ChevronDown  className="text-[5px]"/>}
                </button>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ${activeMenu === item ? 'block' : 'hidden'}`}
                >
                  <a href="#" className="block px-4 py-2">Option 1</a>
                  <a href="#" className="block px-4 py-2">Option 2</a>
                  <a href="#" className="block px-4 py-2">Option 3</a>
                </div>
              </div>
            ))}
            
          </div>
        </div>
        <div className="flex items-center gap-7">
          <img src="https://i.ibb.co/ZGZ76Kc/Frame-1.png" alt="Search" />
          <img src="https://i.ibb.co/m6ZDDXr/Frame.png" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
