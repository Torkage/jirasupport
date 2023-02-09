import { DateTime } from "luxon";

export const tools = {
  calculateTimespent: (issues) => {
    let nbTicketsWithoutTimespent = 0;
    const timespent = issues.reduce((a, b) => {
      if (b.fields.timespent) {
        return a + b.fields.timespent;
      } else {
        nbTicketsWithoutTimespent++;
        return a;
      }
    }, 0);

    return {
      hours: Math.round((timespent / 3500) * 100) / 100,
      nbTicketsWithoutTimespent,
    };
  },
  calculateIncreasePct: (nb1, nb2) => {
    if (nb1 == 0) return "0";
    const pct = Math.round((nb2 / nb1 - 1) * 100 * 100) / 100;
    return pct;
  },
  transformSecondsToHours: (sec) => {
    return sec ? Math.round((sec / 3600) * 100) / 100 : "N.D";
  },
  colorBySign: (value) => {
    return value >= 0 ? "pink" : "green";
  },
  addSign: (value) => {
    return value > 0 ? `+${value}` : value;
  },
  formatDate: (date) => {
    if (!date) return "";

    return DateTime.fromISO(date).toFormat("dd/MM/yyyy");
  },
  round: (value) => {
    if (!value) return 0;
    return Math.round(value * 100) / 100;
  },
  calculateAverageTimeToResolution: (issues) => {
    let nbIssues = 0;
    let total = issues.reduce((a, b) => {
      let elapsedTime = 0;
      if (b.fields.customfield_10050) {
        nbIssues++;
        elapsedTime = b.fields.customfield_10050.completedCycles.reduce((c, d) => {
          const diff = DateTime.fromISO(d.startTime.iso8601)
            .diff(DateTime.fromISO(d.stopTime.iso8601), ["milliseconds"])
            .toObject().milliseconds;
          return c + Math.abs(diff);
        }, 0);
      }
      return a + elapsedTime;
    }, 0);

    return tools.round(total / (3600 * 1000 * nbIssues));
  },
};
