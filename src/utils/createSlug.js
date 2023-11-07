export function createSlug(title) {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}