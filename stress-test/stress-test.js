import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 300, // Số lượng người dùng ảo đồng thời
  duration: "5m", // Thời gian test (1 phút)
};

export default function () {
  for (let i = 0; i < 1000; i++) {
    // Mỗi người dùng gửi 10 yêu cầu
    let res = http.get("http://10.99.15.249:8000/report");
    check(res, {
      "status is 200": (r) => r.status === 200,
    });
  }
}
