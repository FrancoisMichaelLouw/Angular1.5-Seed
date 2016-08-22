import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngCookies from 'angular-cookies';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import rx from 'rx-angular';
import growl from 'angular-growl/src/growl';

import $ from 'jquery';
import bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import _ from 'underscore';

import CoreModule from './modules/core/core.module';

angular.module('app', [
    CoreModule.name,
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'rx',
    'angular-growl'
]).config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/a');

    $stateProvider
        .state('CoreStateA', {
            url: '/a',
            template: '<app></app>'
        })
        .state('CoreStateB', {
            url: '/b/:name',
            template: '<app></app>'
        });
});

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
