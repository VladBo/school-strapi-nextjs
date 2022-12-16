<h1 align="center">School Website based on Strapi CMS and Next.js</h1>
</p>

## Folder Structure

- **`📁 apps`**
  - **`📁 backend`**: headless CMS (API) that uses [Strapi](https://strapi.com/).
  - **`📁 frontend`**
    - **`📁 queries`**: GraphQL queries. Just create a `.graphql` that you will want to use.
    - **`📁 generated`**: Generated GraphQL queries with [GraphQL Code Generator](https://www.graphql-code-generator.com/). Runs automatically while developing. You import types and queries from there (not from `📁 queries`!)
    - **`📁 stories`**: [Storybook stories.](https://storybook.js.org/docs/react/writing-stories/introduction/)
    - **`📁 pages`**: [Next.js pages](https://nextjs.org/docs/basic-features/pages).
    - **`📁 public`**: [Next.js static file serving](https://nextjs.org/docs/basic-features/static-file-serving).
    - **`📁 styles`**: Global CSS Styles. It's better to use CSS modules (`component.module.css` in `📁 components`
    - **`📁 lib`**: Libraries wrappers (such as for Apollo Client) and configs.
    - **`📁 components`**: React components and their styles. There's also a [Next.js Layout](https://nextjs.org/docs/basic-features/layouts)

## Technology

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
