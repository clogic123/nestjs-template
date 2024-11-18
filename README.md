# Backend Template

<div align=center>

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

[![Test Status](https://github.com/rojiwon123/nestia-template/actions/workflows/release.yml/badge.svg)](https://github.com/rojiwon123/nestia-template/actions/workflows/release.yml)

</div>

nestjs 프레임워크 환경에서 nestia, prisma를 적용한 보일러플레이트

## nestia를 사용하는 이유

### 타입스크립트 타입기반의 검증 방식을 적용

-   런타임 데이터에 대한 TS 타입의 정확도 증가
-   별도의 검증 로직 작성 x

### 주석 및 타입 기반의 문서화

-   `문서를 위한 코드` 감소
-   가독성 향상

### 예시

```ts
import { Controller, Get, Param } from "@nestjs/common";

import { Article } from "@SRC/app/article/article.dto";

@Controller("articles")
export class ArticlesController {
    /**
     * api description
     *
     * @summary Get article
     * @tag Article
     * @security bearer
     * @param article_id id of article
     * @return Article Detail
     */
    @Get(":article_id")
    async get(@Param("article_id") article_id: string & typia.tags.Format<"uuid">): Promise<Article> {
        throw Error("not impl");
    }
}
```

![generated-swagger](https://github.com/user-attachments/assets/904c7b6b-e853-4c18-af0e-25708431aa0e)

## prisma를 사용하는 이유

### 가장 type-safe한 orm

-   prisma 자체 문법으로 정의한 schema를 기반으로 ts 타입 자동 빌드
-   select, join 등의 연산에 따라 달라지는 결과 타입 연산

### 예시

```ts
const result = await prisma.user.findMany({ select: { id: true, name: true, articles: { id: true, title: true } } });
// { id: string, name: string, articles: { id: string, title: string }[] }[];
```

### ERD 자동 생성

prisma schema 기반으로 markdown 형식의 ERD 자동 생성

-   generated by [primsa-markdown](https://github.com/samchon/prisma-markdown)

## 명령어

### 빌드

-   `npm run build` : 애플리케이션 빌드
-   `npm run build:nestia` : nestia 기반으로 swagger api 문서, sdk 라이브러리 자동 빌드
-   `npm run build:prisma` : prisma client & erd 자동 빌드
-   `npm run build:test` : e2e test 환경 빌드

### 실행

-   `npm start` : 개발환경 서버 실행
-   `npm test` : 테스트 실행
    -   `npm test -- [options] [test name]` : --only, --skip options 지원

### db

-   `npm run db:sync` : prisma migration 동기화
-   `npm run db:console` : prisma studio 실행

## CI/CD

-   `main` branch PR 생성시 github action에서 테스트 자동화 및 리포트 작성

## Appendix

-   [Nestia 공식 가이드](https://nestia.io/docs/)
-   [Typia 공식 가이드](https://typia.io/docs/)
-   [prisma-markdown](https://www.npmjs.com/package/prisma-markdown)