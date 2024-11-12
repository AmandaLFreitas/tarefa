import { defineField, defineType } from 'sanity';
import { removeDiacritics } from '../helper/removeDiacritic';

const isUniqueAcrossAllDocuments = async (slug, context) => {
  const {document, getClient} = context;
  const client = getClient({apiVersion: '2022-12-07'});
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}

const createSlugId = (input) => {
  const timestamp = new Date().getTime();
  let text = removeDiacritics(input);
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
    .concat(`${timestamp}`);
};

export const imageType = defineType({
  name: 'asset_image',
  title: 'Imagens',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required().min(3)
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Identificação',
      description: 'A Identificação deve ser única dentre todas as imagens',
      options: {
        source: 'name',
        isUnique: isUniqueAcrossAllDocuments,
        slugify: createSlugId,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Legenda',
      type: 'string',
      description: 'Legenda (opcional) da imagem',
    }),
  ],
});