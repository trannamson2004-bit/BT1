# Bài tập 24 — Đề thi Kết thúc HP "Lập trình Web" (Đề số 1)

Dự án web tĩnh hoàn toàn bằng HTML + CSS + JavaScript thuần.

## Cách dùng

1. **Đổi tên thư mục** `701-MSSV` thành `701-MSSV` (thay MSSV bằng mã sinh viên của bạn, ví dụ `701-2212345`).
2. Mở file `diemdanh.html`, thay các chỗ `[...]` bằng thông tin thật (họ tên, MSSV, lớp, ngày nộp, URL deploy).
3. Mở `index.html` bằng trình duyệt để xem toàn bộ dự án.

## Cấu trúc

```
701-MSSV/
├── index.html        # Trang chủ + menu chính
├── baitap01.html     # Bài 1: danh sách sản phẩm + tìm kiếm (20đ)
├── baitap02.html     # Bài 2: form đăng ký + validate + LocalStorage (20đ)
├── baitap03.html     # Bài 3: đồng hồ đếm ngược 10 phút (20đ)
├── lythuyet.html     # Phần 1: trả lời 4 câu lý thuyết (40đ)
├── diemdanh.html     # Trang thông tin điểm danh + URL deploy
├── baitap22.html     # Placeholder → thay bằng bài tập 22 thật
├── baitap23.html     # Placeholder → thay bằng bài tập 23 thật
├── about.html        # Giới thiệu dự án
├── contact.html      # Form liên hệ (minh họa)
├── css/style.css     # Style chung (responsive, biến CSS)
├── js/script.js      # JS chung (menu mobile, active link, tiện ích)
└── images/avatar.jpg # Ảnh đại diện (thay bằng ảnh của bạn nếu muốn)
```

## Deploy lên GitHub Pages

1. Tạo repo trên GitHub (vd: `701-MSSV`).
2. Push toàn bộ thư mục lên nhánh `main`.
3. Vào **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `(root)` → Save.
4. Sau vài phút trang sẽ có địa chỉ: `https://<username>.github.io/701-MSSV/`
5. Dán URL này vào trang `diemdanh.html`.

## Lưu ý

- File `baitap22.html` và `baitap23.html` đang là trang placeholder. Nếu bạn có bài làm thật, hãy thay nội dung hoặc đổi link trong menu (tìm `baitap22.html` / `baitap23.html` trong các file HTML).
- Mật khẩu trong Bài 2 được lưu dạng băm đơn giản để minh họa — **không dùng cách này trong production**.
