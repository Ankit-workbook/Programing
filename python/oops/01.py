class  Car:
    def __init__(self,userbrand,usermodel):
        self.brand = userbrand
        self.model = usermodel
        
        
    def get_brand(self):
        return self.brand   
    
    def full_name(self):
        return f'{self.brand}{self.model}'    

# class Electiccar(Car):
#     def__init__(self, brand, model, battery):
#         super().__init__(brand, model)
#         self.battery=battery

        
# my_tesla=Electiccar("tesla","modelx",'85Kwh')
# print(my_tesla.brand)
    

my_car=Car("tata","kia")
print(my_car.brand)
print(my_car.model)
print(my_car.full_name())


my_newcar=Car("audi","bmw")
print(my_newcar.brand)

print(my_newcar.get_brand())
