import ProjectListModule from './projectList'
import ProjectListController from './projectList.controller';
import ProjectListComponent from './projectList.component';
import ProjectListTemplate from './projectList.html';

describe('ProjectList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProjectListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProjectListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProjectListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProjectListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProjectListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProjectListController);
      });
  });
});
