import { defineField, defineType } from "sanity";

export const agriculturaFamiliarSchema = defineType({
    title: 'Agricultura Familiar',
    name: 'agricultura_familiar',
    type: 'document',
    fields: [
        defineField({
            name: 'content',
            title: 'Sobre',
            type: 'array',
            of: [
                { type: 'string' },
                { type: 'image' },
            ]
        })
    ]
});
