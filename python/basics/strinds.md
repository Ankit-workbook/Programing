>>> chai='lemon'
>>> chai
'lemon'
>>> first_char=chai[0]
>>> chai='masala chai'
>>> chai
'masala chai'
>>> slice_chai=chai[0:6]
>>> print(slice_chai)
masala
>>> chai[0:6]
'masala'
>>> chai[-1]
'i'
>>> numlist='0123654987'
>>> numlist[:]
'0123654987'
>>> numlist[3:]
'3654987'
>>> numlist[:7]
'0123654'
>>> print(chai.lower)
<built-in method lower of str object at 0x0000025A87E7E130>
>>> print(chai.lower())
masala chai
>>> print(chai.upper())
MASALA CHAI

>>> print(chai.strip())
masala chai
>>> print(chai.replace('masal','ginger'))
gingera chai
>>> print(chai.replace('masala','ginger'))
ginger chai 
>>> print(chai.split(','))
['masala chai ']
>>> chai=['lemon','ginger','masala','mint']
>>> print(chai.split(','))
Traceback (most recent call last):
  File "<python-input-23>", line 1, in <module>
    print(chai.split(','))
          ^^^^^^^^^^
AttributeError: 'list' object has no attribute 'split' 
>>> print(chai)
['lemon', 'ginger', 'masala', 'mint']
>>> print(chai.split(","))
Traceback (most recent call last):
Traceback (most recent call last):
  File "<python-input-25>", line 1, in <module>        
    print(chai.split(","))
  File "<python-input-25>", line 1, in <module>        
    print(chai.split(","))
    print(chai.split(","))
          ^^^^^^^^^^
AttributeError: 'list' object has no attribute 'split' 
          ^^^^^^^^^^
AttributeError: 'list' object has no attribute 'split' 
>>> chai='lemon','ginger','masala','mint'
>>> chai='lemon','ginger','masala','mint'
>>> print(chai.split(","))
>>> print(chai.split(","))
Traceback (most recent call last):
Traceback (most recent call last):
  File "<python-input-27>", line 1, in <module>        
  File "<python-input-27>", line 1, in <module>        
    print(chai.split(","))
          ^^^^^^^^^^
    print(chai.split(","))
          ^^^^^^^^^^
AttributeError: 'tuple' object has no attribute 'split'AttributeError: 'tuple' object has no attribute 'split'>>> chai='lemon,ginger,masala,mint'
>>> chai='lemon,ginger,masala,mint'
>>> print(chai.split(","))
>>> print(chai.split(","))
['lemon', 'ginger', 'masala', 'mint']
>>> chai=['masala chai']
>>> print(chai.find("chai"))
Traceback (most recent call last):
  File "<python-input-31>", line 1, in <module>        
['lemon', 'ginger', 'masala', 'mint']
>>> chai=['masala chai']
>>> print(chai.find("chai"))
Traceback (most recent call last):
  File "<python-input-31>", line 1, in <module>        
    print(chai.find("chai"))
>>> chai=['masala chai']
>>> print(chai.find("chai"))
Traceback (most recent call last):
  File "<python-input-31>", line 1, in <module>        
    print(chai.find("chai"))
  File "<python-input-31>", line 1, in <module>        
    print(chai.find("chai"))
          ^^^^^^^^^
    print(chai.find("chai"))
          ^^^^^^^^^
          ^^^^^^^^^
AttributeError: 'list' object has no attribute 'find'  
AttributeError: 'list' object has no attribute 'find'  
>>> chai='masala chai'
>>> chai='masala chai'
>>> print(chai.find("chai"))
7
>>> print(chai.count("chai"))
1
>>> chai_type='masala'
>>> quantity=2
>>> order='i order {} cups of {} chai'
>>> print(order.format(quantity,chai_type))
i order 2 cups of masala chai
>>> 

>>> chai_variety=['lemon','masala','ginger']
>>> chai_variety
['lemon', 'masala', 'ginger']
>>> pint(''.join(chai_variety))
Traceback (most recent call last):
  File "<python-input-41>", line 1, in <module>        
    pint(''.join(chai_variety))
    ^^^^
NameError: name 'pint' is not defined. Did you mean: 'print'?
>>> print(''.join(chai_variety))
lemonmasalaginger
>>> print(' '.join(chai_variety))
lemon masala ginger
>>> print(' - '.join(chai_variety))
lemon - masala - ginger
>>> print(len(chai))
11
>>> for letter in chai:
...     print(letter)
...     
m
a
s
a
l
a
 
c
h
a
i
>>> chai='he said,\'masala chai is awesome''
  File "<python-input-47>", line 1
    chai='he said,\'masala chai is awesome''
                                           ^
SyntaxError: unterminated string literal (detected at line 1)
>>> chai='he said,\'masala chai is awesome\''
>>> chai
"he said,'masala chai is awesome'"
>>> print(chai)
he said,'masala chai is awesome'
>>> chai='masala\nchai'
>>> chai
'masala\nchai'
>>> print(chai)
masala
chai
>>> chai=r'masala\nchai'
>>> print(chai)
masala\nchai
>>> print('masala' in chai)
True
>>>