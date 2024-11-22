import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 200, // Số lượng người dùng ảo đồng thời
  duration: "5m", // Thời gian test (1 phút)
};

export default function () {
  for (let i = 0; i < 10; i++) {
    // Mỗi người dùng gửi 10 yêu cầu
    let res = http.get("http://localhost:8080/");
    check(res, {
      "status is 200": (r) => r.status === 200,
    });
  }
}
