// assets
import { IconBrandChrome, IconHelp,IconBrandProducthunt } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp,IconBrandProducthunt };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        },
       {
           id:'Product Detail',
           title:'Product Detail',
           type:'item',
           url:'/product-page',
           icon:icons.IconBrandProducthunt,
           breadcrumbs:false

       },
       {
           id:'Calender',
           title:'Calender',    
           type:'item',
           breadcrumbs:false,
           url:'/calender_page',
           icon: icons.IconHelp,

       }
       
    ]
};

export default other;
