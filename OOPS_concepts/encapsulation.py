class Car:
    def __init__(self, name, price) -> None:
        pass
        self.name= name
        self.price= price 

    def display(self, year):
        print("The car delivery date {}".format(year))

car_obj= Car("swift","400000")
car_obj.display(2024)
