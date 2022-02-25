import Generic from '../pages/Generic';
import Home from '../pages/Home';
import Teacher from '../pages/Teacher';
export const data = [
  { id: 1, title: 'Home', Component: Home, pathname: '/' },
  { id: 2, title: 'Teacher', Component: Teacher, pathname: '/teacher' },
  { id: 3, title: 'Login', Component: Generic, pathname: '/login' },
];
