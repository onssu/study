# Git



### 2019.12.10 TUE added.

- remote > origin 
  remote 로 확인할 것

  

  *git pull 에러 발생 시 : git stash (파일을 임시로 백업하고 깨끗하게 만듦)

*git commit -a : 전부 포함해서 커밋하는것  
*git commit -m 'messege' : 개별로 커밋

-Git Vi 명령어
-------

- Git Vi 명령어

command mode > Edit mode - i,a,o  
Edit mode > command mode - Esc  
Command mode > last Line mode - :,/,?  
last Line mode > Command mode - Enter  

* vi filename : 열기, 작성
* view filename : 읽기전용으로 열기

- :wq : w 는 저장 q는 편집기 종료   

저장하였어도 커밋 메세지가 없으면 커밋이 작성되지 않음  
커밋 메세지 내의 #로 시작하는 줄은 주석처리됨.  


### 2019.12.11 WED added

Git은 기본적으로 빈폴더를 Track 하지 않는다.  
그러므로 우리는 숨겨진 파일을 빈 폴더 안에 넣어야 한다  

mkdir emptyDir  
cd emptyDir  
touch .gitkeep  
git add *  & git add .
git commit -m 'keep file'  
git push -u origin master   


md 는 개행이 안먹히니 공백 2칸 또는 개행 2번으로 구분하자..

.. : 이전 디렉토리   
. : 현재 디렉토리  
~ : 홈 디렉토리    

mkdir : 디렉토리 생성  
mv : 어떤 파일을 이동(mv 파일 이동시킬경로)?  

git add * 대신 git add . 을 사용하자.

- *를 썼을땐 DS_Store 파일이 add가 되지 않았으나 .을 사용하니 모든 파일이 add 됨.

