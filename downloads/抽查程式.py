import requests
import random
  
web = "https://mdecourse.github.io/cd2020/downloads/2b_group_list.txt"
member = requests.get(web)
#print(memder.text)
x=0
for i in eval(member.text):
    y = random.sample(i,2)
    x+=1
    print("group"+ str(x))
    print(y)