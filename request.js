/* "다른 지역 신청하기" 버튼 + 팝업. 신청은 에어테이블 폼(지역 신청 테이블)으로 들어간다. */
(function () {
  var FORM = "https://airtable.com/appp3ECtg9vv6ipRn/pagbQkPXXcYQqA8Hq/form";
  var EMBED = "https://airtable.com/embed/appp3ECtg9vv6ipRn/pagbQkPXXcYQqA8Hq/form";

  var nav = document.querySelector(".top nav");
  if (!nav || !window.HTMLDialogElement) return;

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "req-btn";
  btn.textContent = "다른 지역 신청하기";
  nav.appendChild(btn);

  var dlg = document.createElement("dialog");
  dlg.className = "req-dlg";
  dlg.setAttribute("aria-labelledby", "req-title");
  dlg.innerHTML =
    '<div class="req-head">' +
      '<h2 id="req-title">다른 지역 신청하기</h2>' +
      '<button type="button" class="req-close" aria-label="닫기">닫기 ✕</button>' +
    '</div>' +
    '<p class="req-note">가 보고 싶은 지역의 글을 요청해 주세요. 닉네임, 이메일, 지역 이름, 내용만 적으면 되고 로그인은 필요 없습니다.</p>' +
    '<div class="req-body"></div>' +
    '<p class="req-fallback label"><a href="' + FORM + '" target="_blank" rel="noopener">폼이 안 보이면 새 창에서 열기</a></p>';
  document.body.appendChild(dlg);

  var body = dlg.querySelector(".req-body");
  function open() {
    if (!body.firstChild) {
      var f = document.createElement("iframe");
      f.src = EMBED;
      f.title = "다른 지역 신청 폼";
      f.loading = "lazy";
      body.appendChild(f);
    }
    dlg.showModal();
    document.documentElement.classList.add("req-lock");
  }
  function close() { dlg.close(); }

  btn.addEventListener("click", open);
  dlg.querySelector(".req-close").addEventListener("click", close);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) close(); });
  dlg.addEventListener("close", function () { document.documentElement.classList.remove("req-lock"); btn.focus(); });
})();
