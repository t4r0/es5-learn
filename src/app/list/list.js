'use strict';
import './list.scss';
import $ from 'jquery';

function ListController($scope) {
  $scope.items = [{
    name: 'hola'
  },
  {
    name: 'hola2'
  }];

  $scope.hey = () => {
    $('#hey').html("hey!");
  };

  $scope.hey();
}

const tmpl = require('./list.html');

export const list = {
  restrict: 'E',
  controller: ['$scope', ListController], // app.controller('ListController',['$scope', function($scope){...}])
  template: tmpl
};
