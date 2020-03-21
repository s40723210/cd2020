import requests
import random

web = "http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0780"
f = requests.get(web)
#print(type(f.text))
x = f.text.split()
#print(len(x))
#print(x)
random.shuffle(x)

group1,group2,group3,group4 = 0,0,0,0
while 1==1:
    group1 += 1
    if (group1+group2+group3+group4) == len(x):
        break
    group2 += 1
    if (group1+group2+group3+group4) == len(x):
        break
    group3 += 1
    if (group1+group2+group3+group4) == len(x):
        break
    group4 += 1
    if (group1+group2+group3+group4) == len(x):
        break
#print(group1,group2,group3,group4)

print("全班人數有"+str(len(x))+"人")
print("="*20)
grp_num = group1,group2,group3,group4
a = iter(x)
team = 0
for i in grp_num:
    team += 1
    print("group"+str(team)+" 共 "+str(i)+" 人")
    for g in range(i):
        print(next(a))
    print("-" * 20)