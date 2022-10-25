import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './my-tasks/my-tasks';
import './dashboards/dashboards';

export const routes: Route[] = [
  { path: '', component: 'app-my-tasks', name: 'My Tasks' },
  { path: 'my-tasks', component: 'app-my-tasks', name: 'My Tasks' },
  { path: 'dashboards', component: 'app-dashboards', name: 'Dashboards' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
