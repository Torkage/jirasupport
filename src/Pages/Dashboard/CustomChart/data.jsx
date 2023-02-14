const fakeData = [
  {
    "month": "2023-02-01T00:00:00.000+04:00",
    "nbIssues": 15,
    "timespent": {
      "hours": 6.33,
      "seconds": 22800,
      "nbTicketsWithoutTimespent": 0
    },
    "nbIssuesEvolution": -55.88,
    "timespentEvolution": -81.25,
    "timespentPerIssue": {
      "hours": 0.42,
      "seconds": 1520
    },
    "timespentPerIssueEvolution": -57.51,
    "timeToResolution": {
      "hours": 28.58,
      "seconds": 102887.53
    },
    "timeToResolutionEvolution": -83.08
  },
  {
    "month": "2023-01-01T00:00:00.000+04:00",
    "nbIssues": 34,
    "timespent": {
      "hours": 33.78,
      "seconds": 121620,
      "nbTicketsWithoutTimespent": 7
    },
    "nbIssuesEvolution": -19.05,
    "timespentEvolution": 1589.17,
    "timespentPerIssue": {
      "hours": 0.99,
      "seconds": 3577.06
    },
    "timespentPerIssueEvolution": 1986.6,
    "timeToResolution": {
      "hours": 168.94,
      "seconds": 608176.82
    },
    "timeToResolutionEvolution": -32.46
  },
  {
    "month": "2022-12-01T00:00:00.000+04:00",
    "nbIssues": 42,
    "timespent": {
      "hours": 2,
      "seconds": 7200,
      "nbTicketsWithoutTimespent": 40
    },
    "nbIssuesEvolution": 75,
    "timespentEvolution": 50,
    "timespentPerIssue": {
      "hours": 0.05,
      "seconds": 171.43
    },
    "timespentPerIssueEvolution": -14.28,
    "timeToResolution": {
      "hours": 250.11,
      "seconds": 900404.83
    },
    "timeToResolutionEvolution": -10.45
  },
  {
    "month": "2022-11-01T00:00:00.000+04:00",
    "nbIssues": 24,
    "timespent": {
      "hours": 1.33,
      "seconds": 4800,
      "nbTicketsWithoutTimespent": 22
    },
    "nbIssuesEvolution": 60,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0.06,
      "seconds": 200
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 279.3,
      "seconds": 1005486.33
    },
    "timeToResolutionEvolution": -20.56
  },
  {
    "month": "2022-10-01T00:00:00.000+04:00",
    "nbIssues": 15,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 15
    },
    "nbIssuesEvolution": -40,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 351.57,
      "seconds": 1265640.13
    },
    "timeToResolutionEvolution": 25.81
  },
  {
    "month": "2022-09-01T00:00:00.000+04:00",
    "nbIssues": 25,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 25
    },
    "nbIssuesEvolution": 8.7,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 279.44,
      "seconds": 1005968.68
    },
    "timeToResolutionEvolution": -47.21
  },
  {
    "month": "2022-08-01T00:00:00.000+04:00",
    "nbIssues": 23,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 23
    },
    "nbIssuesEvolution": 15,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 529.32,
      "seconds": 1905544.13
    },
    "timeToResolutionEvolution": -1.66
  },
  {
    "month": "2022-07-01T00:00:00.000+04:00",
    "nbIssues": 20,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 20
    },
    "nbIssuesEvolution": -39.39,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 538.28,
      "seconds": 1937805.25
    },
    "timeToResolutionEvolution": 190.55
  },
  {
    "month": "2022-06-01T00:00:00.000+04:00",
    "nbIssues": 33,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 33
    },
    "nbIssuesEvolution": -26.67,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 185.26,
      "seconds": 666940.7
    },
    "timeToResolutionEvolution": -48.89
  },
  {
    "month": "2022-05-01T00:00:00.000+04:00",
    "nbIssues": 45,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 45
    },
    "nbIssuesEvolution": 200,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 362.51,
      "seconds": 1305022.07
    },
    "timeToResolutionEvolution": 128.93
  },
  {
    "month": "2022-04-01T00:00:00.000+04:00",
    "nbIssues": 15,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 15
    },
    "nbIssuesEvolution": -61.54,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 158.34,
      "seconds": 570040.47
    },
    "timeToResolutionEvolution": -11.28
  },
  {
    "month": "2022-03-01T00:00:00.000+04:00",
    "nbIssues": 39,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 39
    },
    "nbIssuesEvolution": 39.29,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 178.47,
      "seconds": 642488.03
    },
    "timeToResolutionEvolution": 90.98
  },
  {
    "month": "2022-02-01T00:00:00.000+04:00",
    "nbIssues": 28,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 28
    },
    "nbIssuesEvolution": 27.27,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 93.45,
      "seconds": 336422.68
    },
    "timeToResolutionEvolution": -42.92
  },
  {
    "month": "2022-01-01T00:00:00.000+04:00",
    "nbIssues": 22,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 22
    },
    "nbIssuesEvolution": -50,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 163.71,
      "seconds": 589361.59
    },
    "timeToResolutionEvolution": 74.84
  },
  {
    "month": "2021-12-01T00:00:00.000+04:00",
    "nbIssues": 44,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 44
    },
    "nbIssuesEvolution": -40.54,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 93.63,
      "seconds": 337080.18
    },
    "timeToResolutionEvolution": -65.83
  },
  {
    "month": "2021-11-01T00:00:00.000+04:00",
    "nbIssues": 74,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 74
    },
    "nbIssuesEvolution": 640,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 274.06,
      "seconds": 986616.28
    },
    "timeToResolutionEvolution": 12.7
  },
  {
    "month": "2021-10-01T00:00:00.000+04:00",
    "nbIssues": 10,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 10
    },
    "nbIssuesEvolution": -28.57,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 243.18,
      "seconds": 875445
    },
    "timeToResolutionEvolution": 99.7
  },
  {
    "month": "2021-09-01T00:00:00.000+04:00",
    "nbIssues": 14,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 14
    },
    "nbIssuesEvolution": -54.84,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 121.77,
      "seconds": 438386.86
    },
    "timeToResolutionEvolution": -76.16
  },
  {
    "month": "2021-08-01T00:00:00.000+04:00",
    "nbIssues": 31,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 31
    },
    "nbIssuesEvolution": 14.81,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 510.76,
      "seconds": 1838723.32
    },
    "timeToResolutionEvolution": 97.46
  },
  {
    "month": "2021-07-01T00:00:00.000+04:00",
    "nbIssues": 27,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 27
    },
    "nbIssuesEvolution": 2600,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 258.67,
      "seconds": 931208.04
    },
    "timeToResolutionEvolution": 105598.98
  },
  {
    "month": "2021-06-01T00:00:00.000+04:00",
    "nbIssues": 1,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 1
    },
    "nbIssuesEvolution": 0,
    "timespentEvolution": "0",
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": "0",
    "timeToResolution": {
      "hours": 0.24,
      "seconds": 881
    },
    "timeToResolutionEvolution": -17.59
  },
  {
    "month": "2021-05-01T00:00:00.000+04:00",
    "nbIssues": 1,
    "timespent": {
      "hours": 0,
      "seconds": 0,
      "nbTicketsWithoutTimespent": 1
    },
    "nbIssuesEvolution": 0,
    "timespentEvolution": 0,
    "timespentPerIssue": {
      "hours": 0,
      "seconds": 0
    },
    "timespentPerIssueEvolution": 0,
    "timeToResolution": {
      "hours": 0.3,
      "seconds": 1069
    },
    "timeToResolutionEvolution": 0
  }
]

export default fakeData;
