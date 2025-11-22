>>> f =open('inner.py')
>>> f.readline()
'import time\n'
>>> f.readline()
'print("chai is here")\n'
>>> f.readline()
'username="ankit"\n'
>>> f.readline()
'print(username)'
>>> f.readline()
''
>>> f =open('inner.py')
>>> f.__next__()
'import time\n'
>>> f.__next__()
'print("chai is here")\n'
>>> f.__next__()
'username="ankit"\n'
>>> f.__next__()
'print(username)'
>>> f.__next__()
Traceback (most recent call last):
  File "<python-input-11>", line 1, in <module>        
    f.__next__()
    ~~~~~~~~~~^^
StopIteration

>>> for line in open('inner.py'):
...     print(line)
... 
import time

print("chai is here")

username="ankit"

print(username)
>>> f =open('inner.py')
>>> while True:
...     line=f.readline()
...     if not line:break
...     print(line,end='')
...     
import time
print("chai is here")
username="ankit"
>>> t(username)