import { useNavigate } from "react-router-dom";


const NavbarComp = () => {
const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-0 z-50">
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><a href="home">Danau Tao</a></h1>
        
          <div className="flex space-x-4">
            <button onClick={() => navigate('/')} className="hover:text-gray-400">Home</button>
            <button onClick={() => navigate('/acces')} className="hover:text-gray-400">Acces</button>
            <button onClick={() => navigate('/about')} className="hover:text-gray-400">About</button>
          </div>
      
      </div>
    </header>
    </div>
  );
};

export default NavbarComp;
