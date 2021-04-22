import { HomeAdminPage } from './pages/admin/HomeAdminPage/HomeAdminPage';
import { PostAdminPage } from './pages/admin/PostAdminPage/PostAdminPage';
import { PostPage } from './pages/PostPage/PostPage';
import { Login } from './pages/Login/Login';
import { PostEdit } from './pages/admin/PostAdminPage/PostEdit';
import { PostCreate } from './pages/admin/PostAdminPage/PostCreate';
import { UserAdminPage } from './pages/admin/UserAdminPage/UserAdminPage';
import { UserEdit } from './pages/admin/UserAdminPage/UserEdit';
import { CatAdminPage } from './pages/admin/CatAdminPage/CatAdminPage';
import { CatEdit } from './pages/admin/CatAdminPage/CatEdit';
import { CatCreate } from './pages/admin/CatAdminPage/CatCreate';

export const routes = [
  {
    path: '/',
    exact: true,
    component: PostPage 
  },
  {
    path: '/home',
    exact: true,
    component: PostPage
  },
  {
    path: '/admin',
    exact: true,
    component: HomeAdminPage
  },
  {
    path: '/admin/home',
    exact: true,
    component: HomeAdminPage
  },
  {
    path: '/admin/post/',
    exact: true,
    component: PostAdminPage,
  },
  {
    path: '/admin/post/edit/:postId',
    exact: true,
    component: PostEdit,
  },
  {
    path: '/admin/post/create/',
    exact: true,
    component: PostCreate,
  },
  {
    path: '/admin/user/',
    exact: true,
    component: UserAdminPage,
  },
  {
    path: '/admin/user/edit/:userId',
    exact: true,
    component: UserEdit,
  },
  {
    path: '/admin/cat',
    exact: true,
    component: CatAdminPage,
  },
  {
    path: '/admin/cat/edit/:catId',
    exact: true,
    component: CatEdit,
  },
  {
    path: '/admin/cat/create/',
    exact: true,
    component: CatCreate,
  },
  // {
  //   path: '/admin/user/create/',
  //   exact: true,
  //   component: PostCreate,
  // },
  {
    path: '/post',
    exact: true,
    component: PostPage
  },
  {
    path: '/post/:postId',
    exact: true,
    component: PostPage
  },
  {
    path: '/connexion',
    exact: true,
    component: Login
  },
];