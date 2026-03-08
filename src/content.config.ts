import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Optional review fields — only used when the post is a review
    rating: z.number().min(1).max(5).optional(),
    affiliateUrl: z.string().url().optional(),
    affiliateLabel: z.string().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    verdict: z.string().optional(),
  }),
});

export const collections = { posts };
