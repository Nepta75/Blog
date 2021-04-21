import { HomeAdminPage } from './pages/admin/HomeAdminPage/HomeAdminPage';
import { PostAdminPage } from './pages/admin/PostAdminPage/PostAdminPage';
import { PostPage } from './pages/PostPage/PostPage';
import { Login } from './pages/Login/Login';
import { PostEdit } from './pages/admin/PostAdminPage/PostEdit';
import { PostCreate } from './pages/admin/PostAdminPage/PostCreate';
import { UserAdminPage } from './pages/admin/UserAdminPage/UserAdminPage';
import { UserEdit } from './pages/admin/UserAdminPage/UserEdit';

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