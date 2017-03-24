import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  date: DS.attr(),
  notes: DS.attr()
});
