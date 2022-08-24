export function formatPostDate(date) {
  return new Date(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
}
