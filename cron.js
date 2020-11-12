const CronJob = require("cron").CronJob;

var promptJob = new CronJob(
  "* * * * *",
  function () {
    console.log("This is a prompt");
  },
  null,
  true,
  "America/New_York"
);

// job.start();