# objecttypes/ data types

NUMBERS
STRINGS
TUPLES
dictionary
LIST
SET
FILE
BOOLEAN
NONE
FUNCTIONS

ADVANCE : decoraters ,generators, iterators 


>>> 12
12
>>> 12+12
24
>>> 2.5*5
12.5
>>> 2**8
256
>>> 2**1000
10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376
>>> import math
>>> math.pi
3.141592653589793
>>> import random
>>> random.random()
0.23232278919668325
>>> random.choice(1,5,9,78,558)
Traceback (most recent call last):
  File "<python-input-9>", line 1, in <module>
    random.choice(1,5,9,78,558)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^
TypeError: Random.choice() takes 2 positional arguments but 6 were given
>>> username="name"
>>> len(username)
4
>>> username[4]
Traceback (most recent call last):
  File "<python-input-12>", line 1, in <module>
    username[4]
    ~~~~~~~~^^^
IndexError: string index out of range
>>> username[0]
'n'
>>> username[-1]
'e'
>>> username[-1:2]
''
>>> username[1:2]
'a'
>>> dir(username)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'removeprefix', 'removesuffix', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'start
swith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> 
>>> mylist=[12,"ankit",788]
>>> mylist
[12, 'ankit', 788]
>>> mylist[0]
12
>>> mylist[-1]
788

>>> myD = {'one':'1','two':'2'}
>>> myD
{'one': '1', 'two': '2'}

>>> myD['one']
'1'
>>> mytup =(1,2,3)
>>> mytup[0]
1
>>> len(mytup)

h1=[1,2,3]
>>> h2=h1[:]
>>> h1
[1, 2, 3]
>>> h2
[1, 2, 3]
>>> import copy

>>> h2 =copy.copy(h1)



