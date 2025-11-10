import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import Message from '@/views/Message';
import Project from '@/views/Project';

const routes = [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Article", path: "/article", component: Blog },
    { name: "CategoryArticle", path: "/article/cate/:categoryId", component: Blog },
    { name: "Message", path: "/message", component: Message },
    { name: "Project", path: "/project", component: Project },
]

export default routes;


