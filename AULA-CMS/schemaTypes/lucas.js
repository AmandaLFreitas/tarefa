import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Produtos',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'string'
    }),
    defineField({
      name: 'value',
      title: 'Valor',
      type: 'number',
    }),
    defineField({
      name: 'quantity',
      title: 'Quantidade',
      type: 'number',
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image'
    })
  ]
});