import ProjectItemModule from './projectItem'
import ProjectItemController from './projectItem.controller';
import ProjectItemComponent from './projectItem.component';
import ProjectItemTemplate from './projectItem.html';

describe('ProjectItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProjectItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProjectItemController();
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
      expect(ProjectItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProjectItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProjectItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProjectItemController);
      });
  });
});
