import math

def circle(radius):
   area=math.pi*radius**2
   circum=math.pi*2*radius
   return  area,circum
   
a,c=circle(5)

print("area:",a,"circumference:",c)



def circle_stats(radius):
    area=math.pi*radius**2
    circumference=2*math.pi*radius
    return round(area,2),round(circumference,2)

print(circle_stats(5))
   