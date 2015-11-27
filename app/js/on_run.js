'use strict';

function OnRun($rootScope, AppSettings) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle = `${rootScope.pageTitle}${toState.title} \u2014`;
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });

}

export default OnRun;