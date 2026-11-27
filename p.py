'''import turtle
t = turtle.Turtle()
t.color("orange")
t.pensize(5)

# Star banane ka logic
for i in range(5):
    t.forward(200)
    t.right(144) # Star ke liye 144 degree ka angle chahiye hota hai
turtle.done()

import turtle
t = turtle.Turtle()
t.color("pink")
t.pensize(4)
for i in range(5):
    t.right(144)
    t.forward(200)
turtle.done()   ''' 
import turtle

turtle.tracer
t = turtle.Turtle()
t.speed(0)
t.color("red", "pink")
t.pensize(3)

t.begin_fill()
t.left(140)
t.forward(113)

for i in range(200):
    t.right(1)
    t.forward(1)

t.left(120)

for i in range(200):
    t.right(1)
    t.forward(1)

t.forward(113)
t.end_fill()

t.penup()
t.goto(-120, -40)
t.pendown()
t.color("black")
t.write("Sorry Ammi ❤️", font=("Arial", 24, "bold"))

turtle.update()
t.hideturtle()
turtle.done()
