def on_received_number(receivedNumber):
    global instruction
    instruction = receivedNumber
radio.on_received_number(on_received_number)

instruction = 0
radio.set_group(55)
pin0Dir = 90
pin1Dir = 90
pin2Dir = 90
pin3Dir = 15
Servo.servo(4, pin0Dir)
Servo.servo(5, pin1Dir)
Servo.servo(2, pin2Dir)
Servo.servo(6, pin3Dir)

def on_forever():
    global pin0Dir, pin1Dir, pin2Dir, pin3Dir
    if instruction == 1:
        if pin0Dir > 0:
            pin0Dir += -5
            Servo.servo(4, pin0Dir)
            basic.show_arrow(ArrowNames.EAST)
        else:
            basic.show_icon(IconNames.NO)
    elif instruction == 2:
        if pin0Dir < 180:
            pin0Dir += 5
            Servo.servo(4, pin0Dir)
            basic.show_arrow(ArrowNames.WEST)
        else:
            basic.show_icon(IconNames.NO)
    elif instruction == 11:
        if pin1Dir < 180:
            pin1Dir += 1
            Servo.servo(5, pin1Dir)
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.NO)
    elif instruction == 12:
        if pin1Dir > 0:
            pin1Dir += -1
            Servo.servo(5, pin1Dir)
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.NO)
    elif instruction == 21:
        if pin2Dir >= 0:
            pin2Dir = 100
            Servo.servo(2, pin2Dir)
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.SCISSORS)
    elif instruction == 22:
        pin2Dir = 0
        Servo.servo(2, pin2Dir)
        basic.show_icon(IconNames.SCISSORS)
    elif instruction == 31:
        if pin3Dir >= 0:
            pin3Dir += -2
            Servo.servo(6, pin3Dir)
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.EIGHTH_NOTE)
    elif instruction == 32:
        if pin3Dir < 180:
            pin3Dir += 2
            Servo.servo(6, pin3Dir)
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.QUARTER_NOTE)
    elif input.button_is_pressed(Button.A):
        radio.send_number(0)
        basic.show_string("A")
        basic.pause(100)
    elif input.button_is_pressed(Button.B):
        radio.send_number(1)
        basic.show_string("B")
        basic.pause(100)
    else:
        basic.clear_screen()
basic.forever(on_forever)
