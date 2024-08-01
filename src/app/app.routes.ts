import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path:'my-service',
        loadChildren:()=>import('./my-service/my-service.module').then(m=>m.MyServiceModule)
    },
    {
        path:'portfolio',
        loadChildren:()=>import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)
    },
    {
        path:'careers',
        loadChildren:()=>import('./careers/careers.module').then(m=>m.CareersModule)
    },
    {
        path:'contact',
        loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
    }
];
