class FooController {

  /** @ngInject */
  constructor () {

    /** Set-up the view model */
    let vm = this;

    /** A static string description for demo purposes */
    vm.description = 'Please answer the question below and be at peace.';

  }

}

module.exports = FooController;