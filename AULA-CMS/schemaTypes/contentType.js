import { defineField } from "sanity";

export const contentTypeSchema = defineType({
    title: 'Tipo de conteúdo',
    name: 'content_type',
    type: 'document',
    fields: [
        defineField({
            title: 'Nome',
            name: 'name',
            type: 'string',
        }),
        
    ]
});