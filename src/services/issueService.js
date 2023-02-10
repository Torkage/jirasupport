import axios from "axios";

const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    console.log(now - prev, delay);

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

export const fetchIssues = async ({ selectedSite, selectedProject, filters }) => {
  const res = await axios.post(
    `https://api.atlassian.com/ex/jira/${selectedSite.id}/rest/api/2/search`,
    {
      jql: `project=${selectedProject.key} ORDER BY created DESC, "Time to resolution" ASC`,
      maxResults: filters?.maxResults || 0,
      startAt: filters?.startAt || 0,
    }
  );
  return res.data;
};

export const searchIssues = async ({ selectedSite, selectedProject, filters }) => {
  const countData = await fetchIssues({ selectedSite, selectedProject, filters });
  const total = countData.total;

  const promises = [];
  for (var i = 0; i <= total; i += 100) {
    promises.push(
      fetchIssues({
        selectedSite,
        selectedProject,
        filters: { ...filters, startAt: i, maxResults: 100 },
      })
    );
  }

  return new Promise((resolve, reject) => {
    Promise.all(promises).then((values) => {
      const issues = [];
      values.forEach((i) => {
        issues.push(...i.issues);
      });
      resolve(issues);
    });
  });
};
