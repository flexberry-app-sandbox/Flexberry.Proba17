import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba1ВакантДолжнLForm from './forms/i-i-s-proba1-вакант-должн-l';
import IISProba1ОрганизацияLForm from './forms/i-i-s-proba1-организация-l';
import IISProba1ПланирСобесLForm from './forms/i-i-s-proba1-планир-собес-l';
import IISProba1РегРезультLForm from './forms/i-i-s-proba1-рег-результ-l';
import IISProba1РегистАнкетыLForm from './forms/i-i-s-proba1-регист-анкеты-l';
import IISProba1СотрудLForm from './forms/i-i-s-proba1-сотруд-l';
import IISProba1ВакантДолжнEForm from './forms/i-i-s-proba1-вакант-должн-e';
import IISProba1ОрганизацияEForm from './forms/i-i-s-proba1-организация-e';
import IISProba1ПланирСобесEForm from './forms/i-i-s-proba1-планир-собес-e';
import IISProba1РегРезультEForm from './forms/i-i-s-proba1-рег-результ-e';
import IISProba1РегистАнкетыEForm from './forms/i-i-s-proba1-регист-анкеты-e';
import IISProba1СотрудEForm from './forms/i-i-s-proba1-сотруд-e';
import IISProba1ВакантДолжнModel from './models/i-i-s-proba1-вакант-должн';
import IISProba1ОрганизацияModel from './models/i-i-s-proba1-организация';
import IISProba1ПланирСобесModel from './models/i-i-s-proba1-планир-собес';
import IISProba1РегРезультModel from './models/i-i-s-proba1-рег-результ';
import IISProba1РегистАнкетыModel from './models/i-i-s-proba1-регист-анкеты';
import IISProba1СотрудModel from './models/i-i-s-proba1-сотруд';
import IISProba1ТЧРегРезультModel from './models/i-i-s-proba1-т-ч-рег-результ';
import IISProba1ТЧСотрудModel from './models/i-i-s-proba1-т-ч-сотруд';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba1-вакант-должн': IISProba1ВакантДолжнModel,
    'i-i-s-proba1-организация': IISProba1ОрганизацияModel,
    'i-i-s-proba1-планир-собес': IISProba1ПланирСобесModel,
    'i-i-s-proba1-рег-результ': IISProba1РегРезультModel,
    'i-i-s-proba1-регист-анкеты': IISProba1РегистАнкетыModel,
    'i-i-s-proba1-сотруд': IISProba1СотрудModel,
    'i-i-s-proba1-т-ч-рег-результ': IISProba1ТЧРегРезультModel,
    'i-i-s-proba1-т-ч-сотруд': IISProba1ТЧСотрудModel
  },

  'application-name': 'Proba1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba1',
          title: 'Proba1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba1: {
          caption: 'Proba1',
          title: 'Proba1',
          'i-i-s-proba1-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-proba1-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba1-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba1-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba1-сотруд-l': {
            caption: 'Сотруд',
            title: ''
          },
          'i-i-s-proba1-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba1-вакант-должн-l': IISProba1ВакантДолжнLForm,
    'i-i-s-proba1-организация-l': IISProba1ОрганизацияLForm,
    'i-i-s-proba1-планир-собес-l': IISProba1ПланирСобесLForm,
    'i-i-s-proba1-рег-результ-l': IISProba1РегРезультLForm,
    'i-i-s-proba1-регист-анкеты-l': IISProba1РегистАнкетыLForm,
    'i-i-s-proba1-сотруд-l': IISProba1СотрудLForm,
    'i-i-s-proba1-вакант-должн-e': IISProba1ВакантДолжнEForm,
    'i-i-s-proba1-организация-e': IISProba1ОрганизацияEForm,
    'i-i-s-proba1-планир-собес-e': IISProba1ПланирСобесEForm,
    'i-i-s-proba1-рег-результ-e': IISProba1РегРезультEForm,
    'i-i-s-proba1-регист-анкеты-e': IISProba1РегистАнкетыEForm,
    'i-i-s-proba1-сотруд-e': IISProba1СотрудEForm
  },

});

export default translations;
