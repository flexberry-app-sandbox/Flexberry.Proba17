import {
  defineNamespace,
  defineProjections,
  Model as ТЧСотрудMixin
} from '../mixins/regenerated/models/i-i-s-proba1-т-ч-сотруд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСотрудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
