import { defineField, defineType } from 'sanity';

export const iconType = defineType({
  name: 'icon',
  title: 'Ícone',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required().min(3)
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'valor',
      type: 'string',
      description: 'Nome da classe do ícone do Fontawesome',
      validation: (rule) => rule.required(),
    }),
  ],
});
