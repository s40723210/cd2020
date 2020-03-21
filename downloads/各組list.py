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

grp_num = group1,group2,group3,group4
grp = 0
inc = 0
output  = []
for i in grp_num:
    group = []
    for j in range(i):
        group.append(x[j+inc])
    # 這裡與 c 及 dart 不同, 離開 for loop 時 j 為 i - 1
    # 因此 inc 除了加上 j, 還要加上 1
    inc = inc + j + 1
    grp = grp + 1
    print("group " + str(grp) + " has " + str(i) + "members")
    output.append(group)
print(output)