import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba1-вакант-должн-l');
  this.route('i-i-s-proba1-вакант-должн-e',
  { path: 'i-i-s-proba1-вакант-должн-e/:id' });
  this.route('i-i-s-proba1-вакант-должн-e.new',
  { path: 'i-i-s-proba1-вакант-должн-e/new' });
  this.route('i-i-s-proba1-организация-l');
  this.route('i-i-s-proba1-организация-e',
  { path: 'i-i-s-proba1-организация-e/:id' });
  this.route('i-i-s-proba1-организация-e.new',
  { path: 'i-i-s-proba1-организация-e/new' });
  this.route('i-i-s-proba1-планир-собес-l');
  this.route('i-i-s-proba1-планир-собес-e',
  { path: 'i-i-s-proba1-планир-собес-e/:id' });
  this.route('i-i-s-proba1-планир-собес-e.new',
  { path: 'i-i-s-proba1-планир-собес-e/new' });
  this.route('i-i-s-proba1-рег-результ-l');
  this.route('i-i-s-proba1-рег-результ-e',
  { path: 'i-i-s-proba1-рег-результ-e/:id' });
  this.route('i-i-s-proba1-рег-результ-e.new',
  { path: 'i-i-s-proba1-рег-результ-e/new' });
  this.route('i-i-s-proba1-регист-анкеты-l');
  this.route('i-i-s-proba1-регист-анкеты-e',
  { path: 'i-i-s-proba1-регист-анкеты-e/:id' });
  this.route('i-i-s-proba1-регист-анкеты-e.new',
  { path: 'i-i-s-proba1-регист-анкеты-e/new' });
  this.route('i-i-s-proba1-сотруд-l');
  this.route('i-i-s-proba1-сотруд-e',
  { path: 'i-i-s-proba1-сотруд-e/:id' });
  this.route('i-i-s-proba1-сотруд-e.new',
  { path: 'i-i-s-proba1-сотруд-e/new' });
});

export default Router;
