import { Outlet } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";

const Root = () => {
  return (
    <div className="">
      <div className="max-w-6xl m-auto">
        <Header></Header>
        <div className="min-h-[calc(100vh-290px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
