import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba1-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba1-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-proba1-планир-собес.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba1-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba1-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba1-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba1-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba1-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    время: attr('Время', { index: 2 }),
    организация: belongsTo('i-i-s-proba1-организация', 'Организация', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    регистАнкеты: belongsTo('i-i-s-proba1-регист-анкеты', 'Регист анкеты', {
      фИОКандид: attr('Ф и о кандид', { index: 6, hidden: true }),
      вакантДолжн: belongsTo('i-i-s-proba1-вакант-должн', '', {
        должность: attr('Должность', { index: 7 })
      }, { index: -1, hidden: true }),
      номерТелефона: attr('Телефон', { index: 8 }),
      элПочта: attr('Эл почта', { index: 9 })
    }, { index: 5, displayMemberPath: 'фИОКандид' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba1-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    время: attr('Время', { index: 2 }),
    организация: belongsTo('i-i-s-proba1-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    регистАнкеты: belongsTo('i-i-s-proba1-регист-анкеты', 'Ф и о кандид', {
      фИОКандид: attr('Ф и о кандид', { index: 4 }),
      вакантДолжн: belongsTo('i-i-s-proba1-вакант-должн', '', {
        должность: attr('Должность', { index: 5 })
      }, { index: -1, hidden: true }),
      номерТелефона: attr('Телефон', { index: 6 }),
      элПочта: attr('Эл почта', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
