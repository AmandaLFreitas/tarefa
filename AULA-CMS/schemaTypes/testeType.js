import {defineField, defineType} from 'sanity'

export const testeType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'CPF',
        title: 'CPF',
        type: 'string',
      }),
      defineField({
        name: 'age',
        title: 'idade',
        type: 'number',
      }),
      defineField({
        name: 'photo',
        title: 'fotp',
        type: 'image',
      }),

  ],
})

