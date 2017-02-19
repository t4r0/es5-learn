import angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';

import {hello} from './app/hello/hello';
import {list} from './app/list/list';
import {otro} from './otro/otro';
import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello)
  .component('todoList', list)
  .component('otro', otro);
  // Original Version
  /* angular.directive('todoList', function(){
    return {
      restrict: 'E',
      scope: {
        ad: '='
      },
      link: function(scope, element, attrs, dirCtrl) {
        ....
      }
    }
  })*/

  // Pixela Remix
  /*
  //archivo 1
  module.exports = function(){
    return {
      restrict: 'E',
      scope: {
        ad: '='
      },
      link: function(scope, element, attrs, dirCtrl) {
        ....
      }
    }
  }

  //archivo 2 (findoctor.js)
  var algo = require('archivo1')
  var otraCosa = require('archivo2')
  angular.directive('todoList',[algo])
  */
