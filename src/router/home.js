import HomeLayout from '@/views/layouts/home/HomeLayout';
import IndexView from '@/views/home/index/IndexView';

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
