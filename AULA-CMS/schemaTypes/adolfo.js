import { defineField, defineType } from 'sanity';

export const adolfoType = defineType({
  name: 'event_adolfo',
  title: 'Event (Adolfo)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'lastname',
      title: 'Sobrenome',
      type: 'string',
    }),
    defineField({
      name: 'age',
      title: 'Idade',
      type: 'number',
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
    }),
  ]
});