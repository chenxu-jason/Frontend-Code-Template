import {
  registerMicroApps,
  setDefaultMountApp,
  start,
  runAfterFirstMounted,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';

import { apps, defaultActiveRule } from './config';

const baseurl = `${process.env.BASE_URL}`;

function filterApps() {
  apps.forEach((item) => {
    item.props = { test: 'HELLO' };
  });
  return apps;
}

function registerApps() {
  registerMicroApps(filterApps(), {
    beforeLoad: [
      (loadApp) => {
        console.log('before load', loadApp);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      (mountApp) => {
        console.log('before mount', mountApp);
        return Promise.resolve();
      },
    ],
    afterMount: [
      (mountApp) => {
        console.log('before mount', mountApp);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      (unloadApp) => {
        console.log('after unload', unloadApp);
        return Promise.resolve();
      },
    ],
  });
  setDefaultMountApp(baseurl + defaultActiveRule);
  runAfterFirstMounted(() => console.log('runAfterFirstMounted'));
  addGlobalUncaughtErrorHandler((event) => console.log(event));
  start();
}

export default registerApps;
