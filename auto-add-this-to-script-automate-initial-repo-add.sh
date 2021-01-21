git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "upload"

echo 'Enter the name of the branch:'
read branch

git push -u origin master

read
