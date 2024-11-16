import { defineField, defineType } from 'sanity';

export const restaurantType = defineType({
  name: 'restaurant',
  title: 'Restaurante',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'neighborhood',
      title: 'Bairro',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'street',
      title: 'Rua',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Número',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
