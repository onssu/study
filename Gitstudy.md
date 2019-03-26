##Study
## Git Study by misoonss

* 2019.03.23 sat

Git - 형상관리 프로그램
	Github, Bitbucket, Gitlab

Git - 내 컴퓨터(add) -> 내컴퓨터의 어떤공간(push) -> 원격

내가 소스코드를 짰다! -> 원격에 배포하고싶다.!! -> 그러면 공유 리포지토리를 만든다 -> 배포한다.!!!!

* init //처음 내 파일들을 Git이 관리할 수 있게 만들어 줌
* clone // 복사
* add // 내 컴퓨터에 저장
* commit // 내가 저장한 파일에 무엇이 변경되었는지 주석을 다는 기능
* push // 원격으로 보냄
* pull // 지금 git에 있는 파일들 전부 업데이트 된 상태로 내려받기
* diff // 이전의 파일과 어떤 부분이 달라졌는지 보여줌
* remote // 저장소 등록 관련
* checkout // branch를 변경
* merge //다른 branch에서 master로 합병

//여기까지는 실습

* show
* log
* revert
* stash
* tag
* fetch

## 오늘 해본 것

현재 협업을 하고 있는 상황!!
 - master branch의 코드는 유지되어야 한다.!! -> 그리고 난 수정을 해야한다!! -> 그리고 수정이 끝나고 confirm을 받는다 -> 합격이다!! -> 합치자!! -> 올리자

*git status 는 수시로 해주는 게 좋다.

 git checkout -b yuri // yuri라는 brach 생성
 git branch //branch의 목록과 내가 지금 어느 branch에 들어와있는지 볼 수 있다
 vi file_name.md //파일 수정
  - 파일 내에서 수정하기 (i) 수정 후 종료 (Esc) -> :wq 저장
  git status // 지금 디렉토리 상태 확인
  git add file_name.md // 내 컴퓨터에 저장
  git commit -m "file_name.md modified" // 파일이 수정되었다고 주석을 단다
  git push origin yuri // yuri라는 branch로 원격에 파일 저장
  
  원래 여기서 pull request로 다른 사람들에게 나 파일 수정했으니 허락해줘요 하고 confirm 받아야함

  git checkout master// branch master로 변경
  git merge yuri// yuri와 합병한다
  git status//상태 확인
  git push origin master// 합병 후 원격 저장까지 완료

