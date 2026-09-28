# 이미지 폴더 규칙

```
images/
  main/       profile.jpg, work-1.jpg ~ work-4.jpg   (프로필 1:1, 대표작 4:3)
  package/    01.jpg, 01-1.jpg, 01-2.jpg ...          (대표 16:10, 상세 4:3)
  detail/     01.jpg, 02.jpg ...                      (1200×848)
  branding/   01.jpg, 01-1.jpg ...                    (대표 16:10, 상세 4:3)
  type/       01.jpg, 02.jpg ...                      (1200×848)
```

- 파일명 = 작업 번호(`no`). 상세 컷은 `번호-순서.jpg`.
- 연결: `data/projects.json` 해당 항목에 `"image": "images/detail/04.jpg"`.
- 상세 컷: `"shots": ["images/package/01-1.jpg", "images/package/01-2.jpg"]`
- 프로필·대표작: `data/profile.json`의 `photo`, `featured[].image`.
- 값이 `null`이면 회색 플레이스홀더로 표시됩니다.
- 권장: JPG/WebP, 긴 변 2400px 이하, 장당 500KB 안팎. 파일명은 영문·숫자만.
