import { defineCollection, z } from "astro:content";

const jobsCollection = defineCollection({
    type: "data",
    schema: z.object({
        position: z.string().min(1),
        company: z.string().min(1),
        location: z.string().min(1),
        startDate: z.string().date(),
        endDate: z.string().date().optional(),
        highlights: z.string().min(1).array().min(3).max(7),
        // tags: z.string().min(1).array().min(1),
    }),
});

export const collections = {
    jobs: jobsCollection,
};
