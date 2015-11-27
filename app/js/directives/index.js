'use strict';

import angular from 'angular';
import bulk from 'bulk-require';

const directivesModule = angular.module('app.directives', []);

const directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);

Object.keys(directives).forEach((key) => {
  let item = directives[key];

  directivesModule.directive(item.name, item.fn);
});

export default directivesModule;