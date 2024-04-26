class Mobile:
    def __init__(self, mobile_name, model) -> None:
        self.mobile_name= mobile_name 
        self.model= model 
        
    
    def make_order(self, price):
        print("Mobile phone successfully ordered...at "+ format(price))
        

mobi_obj_1= Mobile("I-phone", "15")
mobi_obj_1.make_order(120000)

mobi_obj_2= Mobile("Samsung", "S22 Ultra")
mobi_obj_2.make_order(80000)

print(type(mobi_obj_1))
print(type(mobi_obj_2))

print(id(mobi_obj_1))
print(id(mobi_obj_2))

print(mobi_obj_1.mobile_name)
print(mobi_obj_1.model)

print(mobi_obj_2.mobile_name)
print(mobi_obj_2.model)




