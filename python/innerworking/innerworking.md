basic of shell in python 


>>> 2+2
4
>>> 'ankit'*2
'ankitankit'
>>> ankit=45
>>> ankit
45
>>> import os
>>> os.getcwd()
'C:\\Users\\ashaa\\Desktop\\python'
>>> for c in "chai":
...     print(c)
...     
c
h
a
i
>>> import sys
>>> sys.platform
'win32'
>>> 
>>> username
'ankit'
>>> username='yadav'
>>> username
'yadav'
>>> x=10
>>> y=x
>>> x
10
>>> y
10
>>> x=18
>>> y
10
>>> 



>>> import sys
>>> sys.getrefcount(24601)
3
>>> sys.getrefcount('h')
4294967295
>>> sys.getrefcount('a')
4294967295
>>> 

   mutable 

>>> l1 = [1,2,3,]
>>> l2 = l1     l2 is assinged as l1 that's why it is mutable while changing the index
>>> l1
[1, 2, 3]
>>> l2
[1, 2, 3]
>>> l1[0]=23
>>> l1
[23, 2, 3]
>>> l2
[23, 2, 3]
>>> 

  immutable because two list 
  
>>> p1=[1,2,3]
>>> p2=p1
>>> p2=[1,2,3]
>>> p1[0]=55
>>> p1
[55, 2, 3]
>>> p2
[1, 2, 3]
>>> 