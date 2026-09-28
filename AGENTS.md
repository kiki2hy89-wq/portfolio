# AGENTS.md — 작업 지침

이 저장소는 디자이너 이혜영의 포트폴리오 정적 사이트입니다. 작업 전에 README.md를 먼저 읽으세요.

## 원칙
- 순수 HTML/CSS/JS 유지. 프레임워크·번들러·npm 의존성을 추가하지 마세요 (요청이 있을 때만).
- 콘텐츠는 `data/*.json`에만 둡니다. HTML·JS에 작업 내용 텍스트를 하드코딩하지 마세요.
- 사용자가 준 문구는 바꾸지 말고 그대로 넣으세요.
- 한국어 전용 사이트입니다. UI 문구도 한국어.

## 디자인 규칙 (바꾸지 말 것)
- 톤: 애플풍 밝은 뉴트럴 + 블루 포인트. 흰 배경.
- 색: `css/style.css`의 `:root` 토큰만 사용. 새 색 추가 금지.
  - 본문 #1d1d1f, 보조 #6e6e73, 포인트 #0071e3, 링크 #0066cc, 면 #f5f5f7, 플레이스홀더 #e8e8ed
- 폰트: Pretendard 하나. 굵기 400/500/600 (히어로 PORTFOLIO만 900).
- 버튼·카테고리: 완전한 라운드 pill(border-radius 980px). 이미지 모서리 18px, 상세 컷 14px.
- 그림자·그라데이션·이모지 사용 금지.
- 애니메이션: 스크롤 페이드업(`[data-reveal]`)만 사용. 커서 효과·3D 월 등은 사용자가 이미 거절했습니다.
- 반응형: 820px 이하에서 메인 프로필 sticky 해제 → 1단. 고정 width/height 대신 max-width·aspect-ratio 사용.

## 이미지 규격
| 위치 | 비율 |
|---|---|
| 프로필 | 1:1 |
| 메인 대표 작업 | 4:3 |
| PACKAGE/BRANDING 대표 | 16:10, 상세 컷 4:3 |
| DETAIL PAGE / TYPE DESIGN | 1200×848 |
이미지가 `null`이면 회색 플레이스홀더를 유지하세요.

## 카테고리
`js/common.js`의 `CATEGORIES`가 기준입니다.
- layout `gallery`: package, branding
- layout `single`: detail, type
URL 해시 `#web`은 `#detail`로 자동 연결됩니다(구버전 호환).

## 확인 방법
`npx serve .` 로 띄워 index.html과 work.html#package / #detail / #branding / #type을 모두 확인. 콘솔 에러 0개.
