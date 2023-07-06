import Home from '../app/home/page.jsx';
import NotFound from '../app/notFound/page.jsx';

const routes = [
    {
        id: 1,
        url: "*",
        page: <NotFound/>,
    },
    {
        id: 2,
        navbarTitle: "Home",
        url: "/",
        page: <Home/>,
    },
];

export default routes