import HomeLayout from '@/views/layouts/HomeLayout';
import IndexView from '@/views/home/IndexView';

export default [
    {
        path: '/',
        name: 'home',
        component: HomeLayout,
        children: [
            {
                path: '',
                name: 'home.index',
                component: IndexView
            }
        ]
    }
];
