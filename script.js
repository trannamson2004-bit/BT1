/* ============================================================
   script.js — JavaScript dùng chung cho toàn bộ dự án
   - Toggle menu mobile
   - Highlight link active trong navbar dựa trên filename trang hiện tại
   - Utility: escapeHTML (chống XSS), formatVND
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Toggle menu trên mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    // Đóng menu khi click vào một link (trên mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  /* ---------- 2. Active link theo trang hiện tại ---------- */
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".main-nav a");
  links.forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---------- 3. Utility: escapeHTML — chống XSS / injection ---------- */
  // Dùng khi chèn nội dung do người dùng nhập vào innerHTML.
  window.escapeHTML = function (str) {
    if (str == null) return "";
    var div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
  };

  /* ---------- 4. Utility: định dạng tiền VND ---------- */
  window.formatVND = function (num) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(num);
  };

  /* ---------- 5. Utility: hiện toast thông báo tạm thời ---------- */
  window.showToast = function (message, type, duration) {
    type = type || "info";
    duration = duration || 3000;
    var toast = document.createElement("div");
    toast.className = "alert alert-" + type;
    toast.style.cssText =
      "position:fixed;top:80px;left:50%;transform:translateX(-50%);z-index:200;max-width:90%;box-shadow:0 8px 24px rgba(0,0,0,.15);";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.style.transition = "opacity .4s, transform .4s";
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(-10px)";
      setTimeout(function () { toast.remove(); }, 400);
    }, duration);
  };
})();
