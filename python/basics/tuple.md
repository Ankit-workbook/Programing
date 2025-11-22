>>> tea_types=( 'black','green','white')
>>> tea_types
('black', 'green', 'white')
>>> tea_types[0]
'black'
>>> tea_types[-1]
'white'
>>> tea_types[0]='lemon'
Traceback (most recent call last):
  File "<python-input-4>", line 1, in <module>
    tea_types[0]='lemon'
    ~~~~~~~~~^^^
TypeError: 'tuple' object does not support item assignment
>>> len(tea_types)
3
>>> more_tea=('herbal,'earl')
  File "<python-input-6>", line 1
    more_tea=('herbal,'earl')
                           ^
SyntaxError: unterminated string literal (detected at line 1)
>>> more_tea=('herbal','earl')
>>> all_tea=more_tea+tea_types
>>> all_types
Traceback (most recent call last):
  File "<python-input-9>", line 1, in <module>
    all_types
NameError: name 'all_types' is not defined. Did you mean: 'tea_types'? 
>>> all_tea
('herbal', 'earl', 'black', 'green', 'white')
>>> 

>>> alltea=('herbal','black','earl','green')
>>> alltea
('herbal', 'black', 'earl', 'green')
>>> if'green'in alltea:
...     print('i have tea')
...     
i have tea
