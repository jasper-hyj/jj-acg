export function formatISO(date: string, locale: string) {
    return Intl.DateTimeFormat("zh", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
        dayPeriod: "short",
        timeZone: (locale == "en" ? "America/Los_Angeles" : "Asia/Taipei"),
    }).format(new Date(date)).toString();
}
