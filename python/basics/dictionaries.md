>>> chaitypes['masala']='fresh'
>>> chaitypes
{'masala': 'fresh', 'zesty': 'good'}
>>> chaitypes
{'masala': 'fresh', 'zesty': 'good'}
>>> for chai in chaitypes:
...     print(chai)
...     
masala
zesty
>>> for chai in chaitypes:
...     print(chai,chaitypes[chai])                                    
...     
masala fresh
zesty good
>>> for key,values in chaitypes.items():
...     print(key,value)
... 
Traceback (most recent call last):
  File "<python-input-11>", line 2, in <module>
    print(key,value)
              ^^^^^
NameError: name 'value' is not defined. Did you mean: 'values'?        
>>> for key,values in chaitypes.items():
...     print(key, value)
... 
Traceback (most recent call last):
  File "<python-input-12>", line 2, in <module>
    print(key, value)
               ^^^^^
NameError: name 'value' is not defined. Did you mean: 'values'?        
>>> for key,value in chaitypes.items():                                
...     print(key, value)
...     
masala fresh
zesty good
>>> if'masala' in chaitypes:                                           
... print('hi')
... 
  File "<python-input-14>", line 2
    print('hi')
    ^^^^^
IndentationError: expected an indented block after 'if' statement on line 1
>>> if'masala' in chaitypes:
...    print('hi')                                                     
...    
hi
>>> chaitypes
{'masala': 'fresh', 'zesty': 'good'}
>>> chaitypes['earl']='citrus'
>>> chaitypes
{'masala': 'fresh', 'zesty': 'good', 'earl': 'citrus'}
>>> chaitypes.pop('masala')
'fresh'
>>> chaitypes
{'zesty': 'good', 'earl': 'citrus'}
>>> chaitypes
{'zesty': 'good', 'earl': 'citrus'}
>>> chaitypes={'masala':'great','ginger':'good'}
>>> chaitypes
{'masala': 'great', 'ginger': 'good'}
>>> del chaitypes["ginger"]
>>> chaitypes
{'masala': 'great'}
>>> chaitypes_copy=chaitypes.copy()
>>> teashop={
... 'chai':{'masala':'spicy','ginge':'zesty'},
... 'tea':{'green':'good','black':'strong'}}
>>> print(teashop)
{'chai': {'masala': 'spicy', 'ginge': 'zesty'}, 'tea': {'green': 'good', 'black': 'strong'}}
>>> teashop['chai']
{'masala': 'spicy', 'ginge': 'zesty'}
>>> squarenum={x:x**2 for x in range (6)}
>>> squarenum
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
>>> squarenum.clear()
>>> squarenum
{}
>>> keys=['masala','ginger']
>>> keys
['masala', 'ginger']
>>> defaultvalue='deklicious'
>>> new_dict=dict.fromkeys(keys,defaultvalue)
>>> new_dict
{'masala': 'deklicious', 'ginger': 'deklicious'}
>>> new_dict=dict.fromkeys(keys,keys)
>>> new_dict
{'masala': ['masala', 'ginger'], 'ginger': ['masala', 'ginger']}       
>>> 