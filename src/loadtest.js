import http from "k6/http";
import { check, sleep, Trend, Rate } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 10 },
    { duration: "2m", target: 100 },
    { duration: "1m", target: 200 },
    { duration: "1m", target: 300 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<5700"],
    http_req_failed: ["rate<0.12"],
    custom_duration_trend: ["p(95)<5700"],
    custom_status_rate: ["rate>0.88"],
  },
};

const durationTrend = new Trend("custom_duration_trend");
const statusRate = new Rate("custom_status_rate");

export default function () {
  const res = http.get("https://jsonplaceholder.typicode.com/posts");
  durationTrend.add(res.timings.duration);
  statusRate.add(res.status === 200);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
