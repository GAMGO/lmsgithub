# (산대특) 클라우드 기반 자바/파이썬 활용 AI융합 풀스택 개발자 과정 육성 작업물 아카이브
| 페이지 링크 |
|---------------|
|https://gamgo.github.io/lmsgithub/|

# <GIT 사용법>
```
-m : 이것을 쓰고 뒤에 오는 명령어는 메세지로 읽어야 한다는 것
git config --global user.name "이름"
git config --global user.email "깃허브 메일주소" // 매번 물어보는 귀찮음을 피하기 위해 설정.
git config --global gui.encoding utf-8 //인코딩 설정
git config core.quotepath false //git bash에서 한글 사용하기
mkdir ~/MyProject   // 로컬 디렉토리 만들기 (직접 만들어도 된다)
cd ~/myproject      // 디렉토리로 들어가기
git init            // 깃 명령어를 사용할 수 있는 디렉토리로 만든다.
git status          // 현재 폴더 안에 있는 파일의 상태 확인
git add 화일명.확장자  // init한 폴더에 파일 추가
git add .           // 이 경우 현재 선택한 폴더 안의 모든 파일을 추가
git commit -m “현재형으로 설명” // 커밋해서 스냅샷을 찍는다.

git remote add 이름 https://github.com/유저이름/프로젝트이름.git // 로컬과 원격 저장소를 연결한다.
git remote -v // 연결상태를 확인한다.
git push 이름 master // 깃허브로 푸시한다.

1. git bash 실행
2. 로컬 저장소 선택 (cd C:/201459020) -> git init하여 마스터모드 설정하기
3. 저장소에서 올릴 파일 선택 (git add *.*)
<git status 입력하면 현재 저장소 폴더에 어떤 파일이 있는지 보여줌>
4. 커밋하기 (git commit -m "initial commit") (inital commit은 메모를 해두는 것으로 온라인상에서 표시가 된다.)
5. 저장소 설정 (git remote add SeopE https://github.com/SeopE/Game1194.git)
6. 푸쉬하기 (git push -u SeopE +master)
7. 올라감
```
