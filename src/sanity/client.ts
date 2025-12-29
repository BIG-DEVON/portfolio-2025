import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ip03nmh5", // 👈 PROJECT ID 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // false if you want fresh data immediately, true for faster cache
});

// This helper function lets us convert the image reference from Sanity into a real URL
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}