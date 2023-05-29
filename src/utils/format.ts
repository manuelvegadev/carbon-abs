export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formatterDay = new Intl.DateTimeFormat("es-CO", {
    weekday: "short",
    day: "2-digit",
    year: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formatterDay.format(date).replace(/^\w/, (c) => c.toUpperCase());
}

export function formatCurrency(number: number) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  return formatter.format(number);
}

export function formatNumber(number: number, unit: string | null = null) {
  const formatter = new Intl.NumberFormat("es-CO", { style: "decimal" });
  return formatter.format(number) + (unit || "");
}
