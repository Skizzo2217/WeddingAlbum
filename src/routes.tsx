import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

const PhotoboothPage = lazy(() => import('./pages/photobooth'));
const GalleryPage = lazy(() => import('./pages/gallery'));
const UploadPage = lazy(() => import('./pages/upload'));
const MissionPage = lazy(() => import('./pages/mission'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/photobooth',
    element: <PhotoboothPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/upload',
    element: <UploadPage />,
  },
  {
    path: '/mission',
    element: <MissionPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/photobooth' | '/gallery' | '/upload' | '/mission';
export type Params = Record<string, string | undefined>;
