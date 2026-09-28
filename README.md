# 이혜영 포트폴리오 웹사이트

풀스택 비주얼 디자이너 이혜영의 포트폴리오. 대상: 디자인 에이전시 및 디자인 직무 채용 담당자.
빌드 도구 없는 순수 HTML/CSS/JS 정적 사이트입니다.

## 페이지
| 파일 | 내용 |
|---|---|
| `index.html` | 메인. 좌측 고정 프로필 + 우측 스크롤(히어로 · 이력 · 툴 · 대표 작업 · 연락) |
| `work.html#package` | PACKAGE — 대표 이미지(16:10) + 정보 + 상세 컷(4:3) |
| `work.html#detail` | DETAIL PAGE — 상단 한 줄 정보 + 이미지 1장(1200×848) |
| `work.html#branding` | BRANDING — PACKAGE와 같은 구성 |
| `work.html#type` | TYPE DESIGN — DETAIL PAGE와 같은 구성 |

## 폴더 구조
```
index.html, work.html
css/style.css        디자인 토큰(:root) + 전체 스타일
js/common.js         카테고리 정의, 이미지/플레이스홀더, JSON 로더
js/main.js           메인 렌더링 (data/profile.json)
js/work.js           서브페이지 렌더링 (data/projects.json)
data/profile.json    이름·연락처·통계·경력·툴·대표 작업
data/projects.json   카테고리별 작업 목록
images/              main / package / detail / branding / type
```

## 자주 하는 수정
- **작업 추가**: `data/projects.json`의 해당 카테고리 배열 끝에 항목 추가. 이미지 칸도 자동으로 생깁니다.
  ```json
  { "no": "04", "year": "2026", "title": "", "desc": "", "client": "", "role": "", "output": "", "image": "images/detail/04.jpg" }
  ```
  PACKAGE/BRANDING은 `"tags": []`, `"shots": []`도 사용.
- **이미지 연결**: 파일을 `images/카테고리/`에 넣고 `image` 경로 입력. 규칙은 `images/README.md`.
- **경력·연락처 수정**: `data/profile.json`.
- **색·여백**: `css/style.css` 맨 위 `:root`.
- **카테고리 추가/이름 변경**: `js/common.js`의 `CATEGORIES` + `projects.json`에 같은 키.

## 로컬에서 보기
JSON을 불러오므로 파일을 더블클릭하면 안 열립니다. 로컬 서버로 여세요.
```
npx serve .          # 또는 VS Code "Live Server" 확장
python3 -m http.server
```

## 배포
Netlify / Vercel / GitHub Pages 어디든 폴더 그대로 업로드. 빌드 명령 없음, 출력 폴더는 루트(`.`).
GitHub 저장소와 연결해 두면 수정 후 push할 때마다 자동 반영됩니다.

## 남은 작업
- [ ] 실제 경력 항목 입력 (현재 예시 데이터)
- [ ] 작업 이미지 · 프로필 사진 넣기
- [ ] 작업 설명·클라이언트 정보를 실제 내용으로 교체
- [ ] (선택) 노션 DB 연동: `loadJSON('data/projects.json')`을 노션 API 응답으로 교체
- [ ] (선택) 파비콘, OG 이미지
