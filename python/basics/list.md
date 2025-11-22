>>> tea_variety=[ 'black','green','white']
>>> print(tea_variety)
['black', 'green', 'white']
>>> print(tea_variety[0])
Type "help", "copyright", "credits" or "license" for more information.
>>> tea_variety=[ 'black','green','white']
>>> print(tea_variety)
['black', 'green', 'white']
>>> print(tea_variety[0])
re information.
>>> tea_variety=[ 'black','green','white']
>>> print(tea_variety)
['black', 'green', 'white']
>>> print(tea_variety[0])
>>> print(tea_variety)
['black', 'green', 'white']
>>> print(tea_variety[0])
black
>>> print(tea_variety[1-])
  File "<python-input-3>", line 1
>>> print(tea_variety[0])
black
>>> print(tea_variety[1-])
  File "<python-input-3>", line 1
black
>>> print(tea_variety[1-])
  File "<python-input-3>", line 1
    print(tea_variety[1-])
>>> print(tea_variety[1-])
  File "<python-input-3>", line 1
    print(tea_variety[1-])
    print(tea_variety[1-])
                        ^
SyntaxError: invalid syntax
>>> print(tea_variety[1:1])
[]
>>> print(tea_variety[1:1])
[]
[]
>>> teaa_variety[2]='herbal'
>>> teaa_variety[2]='herbal'
Traceback (most recent call last):
Traceback (most recent call last):
  File "<python-input-5>", line 1, in <module>
  File "<python-input-5>", line 1, in <module>
    teaa_variety[2]='herbal'
    ^^^^^^^^^^^^
    ^^^^^^^^^^^^
NameError: name 'teaa_variety' is not defined. Did you NameError: name 'teaa_variety' is not defined. Did you mean: 'tea_variety'?
>>> tea_variety[2]='herbal'
mean: 'tea_variety'?
>>> tea_variety[2]='herbal'
>>> tea_variety[2]='herbal'
>>> print(tea_variety)
['black', 'green', 'herbal']
>>> print(tea_variety)
['black', 'green', 'herbal']
>>> tea_variety[1:3]
['green', 'herbal']
>>> tea_variety[1:3]='lemon'
>>> tea_variety
['black', 'l', 'e', 'm', 'o', 'n']
>>> tea_variety[1:3]=['lemon']
>>> tea_variety
['black', 'lemon', 'm', 'o', 'n']
>>> tea_variety[1"1]
  File "<python-input-14>", line 1
    tea_variety[1"1]
                 ^
SyntaxError: unterminated string literal (detected at line 1)
>>> tea_variety[1:1]
[]
>>> tea_variety[1:1]=['test','test']
>>> tea_variety
['black', 'test', 'test', 'lemon', 'm', 'o', 'n']
>>>  for tea in tea_variety
  File "<python-input-18>", line 1
    for tea in tea_variety
IndentationError: unexpected indent
>>>  for tea in tea_variety:
  File "<python-input-19>", line 1
    for tea in tea_variety:
IndentationError: unexpected indent
>>> for tea in tea_variety:
...     print(tea)
...     
black
test
test
lemon
m
o
n
>>> for tea in tea_variety:
...     print(tea,end='-')                             
...     
>>> k-test-test-lemon-m-o-n-

 tea_variety=["black","green","white"]
>>> tea_variety
['black', 'green', 'white']
>>> if "oolong" in tea_variety:
...     print('yes')
... 
>>> tea_variety.append('oolong')
>>> tea_variety
['black', 'green', 'white', 'oolong']
>>> if "oolong" in tea_variety:
...     print('yes')
... 
yes

>>> tea_variety=["black","green","white"]
>>> tea_variety
['black', 'green', 'white']
>>> tea_variety.pop()
'white'
>>> tea_variety
['black', 'green']
>>> tea_variety.remove('green')
>>> tea_variety
['black']
>>> tea_variety.insert(1,'green')
>>> tea_variety
['black', 'green']
>>> tea_variety_copy=tea_variety.copy()
>>> tea_variety
['black', 'green']
>>> tea_variety_copy.append('lemon')
>>> tea_variety
['black', 'green']
>>> tea_variety_copy
['black', 'green', 'lemon']
>>> squard_nums=[x**2 for x in range(10)]
>>> squard_nums
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
>>> cube_nums=[y**3 for y in range(10)]
>>> cube_nums
[0, 1, 8, 27, 64, 125, 216, 343, 512, 729]
>>> 