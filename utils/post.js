export function formatPostDate(date) {
  return new Date(date).toLocaleDateString(
    process.env.NEXT_PUBLIC_I18N_LOCALE,
    { year: "numeric", month: "long", day: "numeric" }
  );
}
