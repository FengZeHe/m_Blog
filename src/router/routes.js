import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import Message from '@/views/Message';
import Project from '@/views/Project';

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/blog", component: Blog },
    { path: "/message", component: Message },
    { path: "/project", component: Project },
]

export default routes;


