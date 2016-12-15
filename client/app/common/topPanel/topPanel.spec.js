import TopPanelModule from './topPanel'
import TopPanelController from './topPanel.controller';
import TopPanelComponent from './topPanel.component';
import TopPanelTemplate from './topPanel.html';

describe('TopPanel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TopPanelModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TopPanelController();
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
      expect(TopPanelTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TopPanelComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TopPanelTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TopPanelController);
      });
  });
});
