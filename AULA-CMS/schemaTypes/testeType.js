import {defineField, defineType} from 'sanity'

export const testeType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'NOME',
      type: 'string',
    }),
    defineField({
        name: 'lastname',
        title: 'SOBRENOME',
        type: 'string',
      }),
    defineField({
        name: 'age',
        title: 'IDADE',
        type: 'number',
      }),
      defineField({
        name: 'CPF',
        title: 'CPF',
        type: 'string',
      }),
    defineField({
        name: 'photo',
        title: 'FOTO',
        type: 'image',
      }),
  ],
})