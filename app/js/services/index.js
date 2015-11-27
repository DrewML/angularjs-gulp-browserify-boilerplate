'use strict';

import angular from 'angular';
import bulk from 'bulk-require';

const servicesModule = angular.module('app.services', []);

const services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

Object.keys(services).forEach((key) => {
  const item = services[key];

  servicesModule.service(item.name, item.fn);
});

export default servicesModule;
