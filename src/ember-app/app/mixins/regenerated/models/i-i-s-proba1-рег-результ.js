import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  кандидОтклон: DS.attr('boolean'),
  приглНаРаб: DS.attr('boolean'),
  организация: DS.belongsTo('i-i-s-proba1-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba1-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba1-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba1-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кандидОтклон: {
    descriptionKey: 'models.i-i-s-proba1-рег-результ.validations.кандидОтклон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приглНаРаб: {
    descriptionKey: 'models.i-i-s-proba1-рег-результ.validations.приглНаРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba1-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba1-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba1-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba1-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    планирСобес: belongsTo('i-i-s-proba1-планир-собес', 'ФИО', {
      регистАнкеты: belongsTo('i-i-s-proba1-регист-анкеты', '', {
        фИОКандид: attr('ФИО', { index: 1 }),
        вакантДолжн: belongsTo('i-i-s-proba1-вакант-должн', '', {
          должность: attr('Должность', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      иметьПриСебе: attr('Иметь при себе', { index: 6, hidden: true })
    }, { index: 5 }),
    приглНаРаб: attr('Пригл на раб', { index: 3 }),
    кандидОтклон: attr('Кандид отклон', { index: 4 }),
    организация: belongsTo('i-i-s-proba1-организация', 'Организация', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' }),
    тЧРегРезульт: hasMany('i-i-s-proba1-т-ч-рег-результ', 'Т ч рег результ', {
      итогСобесед: attr('Итог собесед', { index: 0 }),
      оценкаКандид: attr('Оценка кандид', { index: 1 }),
      крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 2 }),
      сотруд: belongsTo('i-i-s-proba1-сотруд', 'Сотруд', {

      }, { index: 3 })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba1-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    приглНаРаб: attr('Пригл на раб', { index: 1 }),
    кандидОтклон: attr('Кандид отклон', { index: 2 }),
    планирСобес: belongsTo('i-i-s-proba1-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 3 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-proba1-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
