# Retype 설치

## [공식사이트](https://retype.com/guides/getting-started/)

<aside style='border:1px solid #ddd; padding:2rem;'>

Retype을 전역으로 설치하기 위해서는 다음과 같은 명령어를 사용합니다:

</aside>

1.  `npm install retypeapp -g`
2.  새로운 프로젝트를 시작하기 위해서는 다음과 같은 명령어를 사용합니다:
    `retype new my-project`
    위의 명령어에서 'my-project' 부분은 여러분의 프로젝트 이름으로 변경해주세요.

3.  생성된 프로젝트 폴더로 이동하여 Retype을 실행시킵니다:
    `cd my-project`
    ## `npx retype start`

# Retype 빌드:

먼저 Retype을 사용하여 프로젝트를 생성하고 실행시킨 후, 원하는 내용으로 웹사이트를 작성합니다.
모든 변경 사항을 저장한 후, 터미널에서 다음 명령어를 입력하여 프로젝트를 빌드합니다:
`retype build`
이 명령어는 output 디렉터리에 정적 파일들을 생성합니다. 이 디렉터리에 있는 모든 파일들은 호스팅할 준비가 된 상태입니다.

# 배포

GitHub Pages:
output 디렉터리의 내용 전체를 GitHub 저장소의 gh-pages 브랜치에 푸시(push)합니다.
GitHub 저장소 설정에서 GitHub Pages 섹션으로 이동한 후, Source 옵션을 gh-pages로 설정합니다.
그러면 웹사이트가 <username>.github.io/<repository> 주소에서 접근 가능해집니다.

# CLI

```
Description:
  Retype CLI

Usage:
  retype [command] [options]

Options:
  --info          Display Retype information
  --version       Show version information
  -?, -h, --help  Show help and usage information

Commands:
  start <path>  Build and serve the project using a local development only web server
  init  <path>  Initialize a new Retype project
  build <path>  Generate a static website from the project
  serve <path>  Serve the website in a local development only web server
  clean <path>  Clean the output directory
  wallet        Manage Retype secret license keys

```

# 테마변경하기

~~CSS Override: 보다 안전한 방법으로는, Retype 설정에서 제공하는 override.css 기능을 사용하는 것입니다. 이는 기본 스타일에 우선하여 적용되며, 원하는 스타일 변경사항을 반영할 수 있습니다. retype.yml 설정 파일에서 아래와 같이 override.css 경로를 지정합니다:

` '/path/to/your/override.css'`
그리고 해당 경로에 override.css 파일을 만들고 원하는 스타일링 코드를 작성합니다.
테마 커스터마이징: Retype은 테마 커스터마이징도 지원합니다. 테마 관련 설정은 retype.yml 설정 파일에서 조정할 수 있습니다.~~

# alert

```
!!!primary Primary
This is a `primary` alert.
!!!

!!!secondary Secondary
This is a `secondary` alert.
!!!

!!!success Success
This is a `success` alert.
!!!

!!!danger Danger
This is a `danger` alert.
!!!

!!!warning Warning
This is a `warning` alert.
!!!

!!!info Info
This is a `info` alert.
!!!

!!!light Light
This is a `light` alert.
!!!

!!!dark Dark
This is a `dark` alert.
!!!

!!!ghost Ghost
This is a `ghost` alert.
!!!

!!!contrast Contrast
This is a `contrast` alert.
!!!
```
