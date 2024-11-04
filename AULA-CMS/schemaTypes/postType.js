import { defineField, defineType } from 'sanity';

export const postType = defineType({
  title: 'Página',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
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
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [{
        type: 'image',
        fields: [
          defineField({
            name: 'caption',
            title: 'Legenda',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
        ]
      }],
    }),
    defineField({
      name: 'file',
      title: 'Arquivos',
      type: 'array',
      of: [
        {
          name: 'pdfFile',
          type: 'file',
          fields: [
            {
              name: 'description',
              type: 'string',
              title: 'Descrição'
            },
            {
              name: 'name',
              type: 'string',
              title: 'Nome',
            },
            {
              name: 'group',
              type: 'string',
              title: 'Grupo',
              options: {
                list: [
                  { value: 'Leis', title: 'Leis' },
                  { value: 'Atas 2023', title: 'Atas 2023' },
                  { value: 'Editais 2023', title: 'Editais 2023' },
                  { value: 'Outros', title: 'Outros' },
                ]
              },
            }
          ],
          options: {
            accept: 'application/pdf',
            storeOriginalFilename: true,
          }
        },
        {
          name: 'excelFile',
          type: 'file',
          fields: [
            {
              name: 'description',
              type: 'string',
              title: 'Descrição'
            },
            {
              name: 'name',
              type: 'string',
              title: 'Nome',
            },
          ],
          options: {
            accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            storeOriginalFilename: true,
          }
        }
      ]
    }),
    defineField({
      name: 'icon',
      title: 'Ícone',
      type: 'reference',
      to: [{ type: 'icon' }]
    }),
    defineField({
      name: 'menu_name',
      title: 'Nome do menu',
      type: 'string',
    }),
  ],
});
