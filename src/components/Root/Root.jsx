import { Outlet } from 'react-router-dom';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';

const Root = () => {
    return (
        <div>
          <div className='max-w-6xl m-auto'>
          <Header></Header>
          <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;