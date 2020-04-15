import { registerAdminRoute } from '../../ui-admin/client';

registerAdminRoute('/import', {
	name: 'admin-import',
	lazyRouteComponent: () => import('./components/ImportHistoryRoute'),
});

registerAdminRoute('/import/new/:importerKey?', {
	name: 'admin-import-new',
	lazyRouteComponent: () => import('./components/NewImportRoute'),
});

registerAdminRoute('/import/prepare', {
	name: 'admin-import-prepare',
	lazyRouteComponent: () => import('./components/PrepareImportRoute'),
});

registerAdminRoute('/import/progress', {
	name: 'admin-import-progress',
	lazyRouteComponent: () => import('./components/ImportProgressRoute'),
});
