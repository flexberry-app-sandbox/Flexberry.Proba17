import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba1-т-ч-рег-результ', 'Unit | Serializer | i-i-s-proba1-т-ч-рег-результ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba1-т-ч-рег-результ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba1-итог-собесед',

    'model:i-i-s-proba1-вакант-должн',
    'model:i-i-s-proba1-организация',
    'model:i-i-s-proba1-планир-собес',
    'model:i-i-s-proba1-рег-результ',
    'model:i-i-s-proba1-регист-анкеты',
    'model:i-i-s-proba1-сотруд',
    'model:i-i-s-proba1-т-ч-рег-результ',
    'model:i-i-s-proba1-т-ч-сотруд',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
