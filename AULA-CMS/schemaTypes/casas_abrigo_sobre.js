import { defineField, defineType } from "sanity";

export const sobreCasasAbrigoType = defineType({
    name: 'casasabrigo_sobre',
    title: 'Casas Abrigo (Sobre)',
    type: 'document',
    fields: [
        defineField({
            name: 'heading_1',
            title: 'Tópico',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Texto',
            type: 'array',
            of: [
                { type: 'string' }
            ]
        }),
        defineField({
            name: 'order',
            title: 'Prioridade',
            type: 'number'
        }),
    ]
});