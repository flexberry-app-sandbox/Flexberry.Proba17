import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba1.caption'),
          title: i18n.t('forms.application.sitemap.proba1.title'),
          children: [{
            link: 'i-i-s-proba1-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-вакант-должн-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proba1-организация-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-организация-l.title'),
            children: null
          }, {
            link: 'i-i-s-proba1-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-планир-собес-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-proba1-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-регист-анкеты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proba1-сотруд-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-сотруд-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-сотруд-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-proba1-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-рег-результ-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})