import './dropdown.scss';

export default class Dropdown {
  constructor($document, $timeout) {
    "ngInject";

    this.$document = $document;
    this.restrict = 'A';

    this.link = (scope, element, attrs) => {
      function getOpenDropdowns() {
        return angular.element(document.querySelectorAll('.app-dropdown_open'));
      }

      function closeOther() {
        let openDropdowns = getOpenDropdowns();

        if(openDropdowns.length) {
          openDropdowns = [].slice.call(openDropdowns);
          openDropdowns.forEach((elm) => {
            elm.classList.remove('app-dropdown_open');
            elm.querySelector('.app-dropdown-menu_open')
            .classList.remove('app-dropdown-menu_open');
          })
        }
      }

      function close() {
        element.removeClass('app-dropdown_open')
        menu.removeClass('app-dropdown-menu_open')
        $document.off('click', closeOther)
      }

      let menu = element.find('ul');

      function closeOrOpen() {
        if(!element.hasClass('app-dropdown_open')) {
          closeOther();
          element.addClass('app-dropdown_open');
          menu.addClass('app-dropdown-menu_open');
          $timeout(() => {
            $document.one('click', (e) => {
              if(e.target.classList.contains('app-dropdown')) return 
                closeOther()
            })
          })
        } else {
          close()
        }
      }

      element.on('click', closeOrOpen);

      scope.$on('destroy', () => {
        $document.off('click', closeOther);
        element.off('click', closeOrOpen);
      })
    }
  }
}
