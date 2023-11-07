import { ID_INJECTION_KEY } from 'element-plus';

export default (app) => {
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0,
  });
};
