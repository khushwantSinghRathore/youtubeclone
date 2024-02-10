import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./screen/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'shorts',
    loadChildren: () =>
      import('./screen/shorts/shorts.module').then((m) => m.ShortsPageModule),
  },
  {
    path: 'subscription',
    loadChildren: () =>
      import('./screen/subscription/subscription.module').then(
        (m) => m.SubscriptionPageModule
      ),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./screen/library/library.module').then(
        (m) => m.LibraryPageModule
      ),
  },
  {
    path: 'history',
    loadChildren: () => import('./screen/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./screen/download/download.module').then( m => m.DownloadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
