<<<<<<< HEAD

class Car:
    def __init__(self, color, max_speed, acceleration, tyre_friction):
        self.color= color
        self.max_speed= max_speed
        self.acceleration= acceleration
        self.tyre_friction= tyre_friction
        self.is_engine_started= False 
        self.current_speed=0 

    def start_engine(self):
        self.is_engine_started=True

    def stop_engine(self):
        self.is_engine_started=False

    def accelerate(self):
        if not self.is_engine_started:
            print("Car has not started yet")
        else:
            self.current_speed+= self.acceleration
            if self.current_speed> self.max_speed:
                self.current_speed=self.max_speed

    def apply_brakes(self):
        self.current_speed-= self.tyre_friction
        if self.current_speed<0:
            self.current_speed=0 

    def sound_horn(self):
        if self.is_engine_started:
            print("Beep Beep")
        else:
            print("Car has not started yet")


class RaceCar(Car):
    def __init__(self, color, max_speed, acceleration, tyre_friction, nitro):
        super().__init__(color, max_speed, acceleration, tyre_friction)
        self.nitro=nitro

    def accelerate(self):
        if self.nitro>0 and self.is_engine_started:
            self.current_speed+=20 
            self.nitro-=1 
        super().accelerate()

    def sound_horn(self):
        if self.is_engine_started:
            print("Peep Peep\nBeep Beep")
        else:
            print("Car has not started yet")


racecar = RaceCar(color="Red", max_speed=250, acceleration=50, tyre_friction=30, nitro=4)
racecar.start_engine()
racecar.accelerate()  
print(racecar.current_speed)  
print(racecar.nitro)  
racecar.accelerate()  
print(racecar.current_speed)  
print(racecar.nitro)  
racecar.accelerate()  
print(racecar.current_speed)  
print(racecar.nitro) 
racecar.apply_brakes()  
print(racecar.current_speed) 
print(racecar.nitro)  
racecar.accelerate()  
print(racecar.current_speed) 
print(racecar.nitro)  
racecar.sound_horn()
=======

class Car:
    def __init__(self, color, max_speed, acceleration, tyre_friction):
        self.color= color
        self.max_speed= max_speed
        self.acceleration= acceleration
        self.tyre_friction= tyre_friction
        self.is_engine_started= False 
        self.current_speed=0 

    def start_engine(self):
        self.is_engine_started=True

    def stop_engine(self):
        self.is_engine_started=False

    def accelerate(self):
        if not self.is_engine_started:
            print("Car has not started yet")
        else:
            self.current_speed+= self.acceleration
            if self.current_speed> self.max_speed:
                self.current_speed=self.max_speed

    def apply_brakes(self):
        self.current_speed-= self.tyre_friction
        if self.current_speed<0:
            self.current_speed=0 

    def sound_horn(self):
        if self.is_engine_started:
            print("Beep Beep")
        else:
            print("Car has not started yet")


class RaceCar(Car):
    def __init__(self, color, max_speed, acceleration, tyre_friction, nitro):
        super().__init__(color, max_speed, acceleration, tyre_friction)
        self.nitro=nitro

    def accelerate(self):
        if self.nitro>0 and self.is_engine_started:
            self.current_speed+=20 
            self.nitro-=1 
        super().accelerate()

    def sound_horn(self):
        if self.is_engine_started:
            print("Peep Peep\nBeep Beep")
        else:
            print("Car has not started yet")


racecar = RaceCar(color="Red", max_speed=250, acceleration=50, tyre_friction=30, nitro=4)
racecar.start_engine()
racecar.accelerate()  
print(racecar.current_speed)  
print(racecar.nitro)  
racecar.accelerate()  
print(racecar.current_speed)  
print(racecar.nitro)  
racecar.accelerate()  
print(racecar.current_speed)  
print(racecar.nitro) 
racecar.apply_brakes()  
print(racecar.current_speed) 
print(racecar.nitro)  
racecar.accelerate()  
print(racecar.current_speed) 
print(racecar.nitro)  
racecar.sound_horn()
>>>>>>> b8065e3 (ASPIRE)
