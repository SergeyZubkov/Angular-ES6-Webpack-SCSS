import timeTrackerModule from './timeTracker'

describe('timeTracker', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(timeTrackerModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('timeTracker component should be visible when navigates to /timeTracker', () => {
      $location.url('/timeTracker');
      $rootScope.$digest();
      expect($state.current.component).to.eq('timeTracker');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('timeTracker', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<timeTracker></timeTracker>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('timeTracker');
    });

  });
});
