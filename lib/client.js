import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sqf8jqb7',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: "sk5lhrwlJ97NLjp2jsmBAa9vMzUQzEcrUF13LXnknSrsvp9YuZzqkXVOtxxx7yzW2ExRGreA2iCpdYCK8EjBSmHmeznzn6c0RoF3btzH0Ou4ShKS7HNQxtvPacCW4ETTMH7CjAErI2HnzwjfHvWEn3DhFdLubNYSPBQfD8EYFfZYkGODX1OH"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);