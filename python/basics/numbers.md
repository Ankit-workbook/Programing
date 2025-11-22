
>>> x=2
>>> y=3
>>> z=4
>>> x+y*z
14
>>> (x+y)*z
20
>>> 40+2.23
42.23
>>> 'hi'+23
Traceback (most recent call last):
  File "<python-input-6>", line 1, in <module>
    'hi'+23
    ~~~~^~~
TypeError: can only concatenate str (not "int") to str 
>>> int(2.2)
2
>>> float(40.0)
40.0
>>> float(40)
40.0
>>> 'hi'+'hello'
'hihello'
>>> x,y,z
(2, 3, 4)
>>> x+1,y*4
(3, 12)
>>> 

repr() : use for clear representation and debugging and mainly use by developer. 
str() :  represent as readable for human.
print() : internally it use str() to get object and print it

>>> 1<2
True
>>> 4.0!=5.0
True
>>> 4.0!==5.0


  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
>>> x+1,y*4
(3, 12)
>>> 1<2
True
>>> 4.0!=5.0
True
>>> 4.0!==5.0
  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
False
>>> 1==2<3
False
>>> x+1,y*4
(3, 12)
>>> 1<2
True
>>> 4.0!=5.0
True
>>> 4.0!==5.0
  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
False
>>> x+1,y*4
(3, 12)
>>> 1<2
True
>>> 4.0!=5.0
True
>>> 4.0!==5.0
  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
>>> 1<2
True
>>> 4.0!=5.0
True
>>> 4.0!==5.0
  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
>>> 4.0!=5.0
True
>>> 4.0!==5.0
  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
False
>>> 1==2<3
>>> 4.0!==5.0
  File "<python-input-15>", line 1
    4.0!==5.0
         ^
SyntaxError: invalid syntax
>>> x<y and x>z
False
>>> 1==2<3
>>> 1==2<3
False
False
>>> import math
>>> math.floor(3.5)
3
>>> math.floor(-3.5)
-4
>>> math.trunc(2.8)
2
>>> math.trunc(-2.8)
-2
>>> 9999999999999999999999999999999999999999999+1      
10000000000000000000000000000000000000000000
>>> 2666666666666169*2.1
5599999999998955.0
>>> 2+1j
(2+1j)
>>> 2+1j *3
(2+3j)
>>> 0o20
16
>>> 0xff
255
>>> 0b1000
8
>>> bin(64)
'0b1000000'
>>> int('64',8)
52
>>> 
>>> import random
>>> random.random()
0.8850885781767666
>>> random.randint(1,10)
7
>>> random.randint(1,100)
12
>>> 

>>> import random
>>> random.random()
0.8850885781767666
>>> random.randint(1,10)
7
>>> random.randint(1,100)
12
>>> l1=[1,2,2,5,6,8,96,52,6]
>>> random.shuffle(l1)
>>> l1
[6, 1, 96, 5, 8, 2, 52, 2, 6]
>>> l1
[6, 1, 96, 5, 8, 2, 52, 2, 6]
>>> l1
[6, 1, 96, 5, 8, 2, 52, 2, 6]
>>> 

>>> from decimal import Decimal
>>> Decimal('0.1')+Decimal('0.1')
Decimal('0.2')
>>> 0.1+0.1+0.1
0.30000000000000004
>>> >>> setone ={1,2,3,4}
>>> setone ={1,2,3,4}
>>> setone & {1,3}
>>> setone & {1,3}
{1, 3}
>>> setone | {1,3}
{1, 2, 3, 4}
>>> setone - {1,3}
{2, 4}
>>> type({})
<class 'dict'>
>>> type(true)
Traceback (most recent call last):
  File "<python-input-19>", line 1, in <module>
    type(true)
         ^^^^
NameError: name 'true' is not defined. Did you mean: 'True'?
>>> type(True)
<class 'bool'>
>>> True is 1
<python-input-21>:1: SyntaxWarning: "is" with 'int' literal. Did you mean "=="?
  True is 1
False
>>> True is 1
<python-input-22>:1: SyntaxWarning: "is" with 'int' literal. Did you mean "=="?
  True is 1
False
>>> True+4
5
>>> 