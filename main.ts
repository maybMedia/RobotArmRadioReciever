radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    instruction = receivedNumber
})
let instruction = 0
radio.setGroup(55)
let pin0Dir = 90
let pin1Dir = 90
let pin2Dir = 90
let pin3Dir = 15
Servo.Servo(4, pin0Dir)
Servo.Servo(5, pin1Dir)
Servo.Servo(2, pin2Dir)
Servo.Servo(6, pin3Dir)
basic.forever(function on_forever() {
    
    if (instruction == 1) {
        if (pin0Dir > 0) {
            pin0Dir += -5
            Servo.Servo(4, pin0Dir)
            basic.showArrow(ArrowNames.East)
        } else {
            basic.showIcon(IconNames.No)
        }
        
    } else if (instruction == 2) {
        if (pin0Dir < 180) {
            pin0Dir += 5
            Servo.Servo(4, pin0Dir)
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showIcon(IconNames.No)
        }
        
    } else if (instruction == 11) {
        if (pin1Dir < 180) {
            pin1Dir += 1
            Servo.Servo(5, pin1Dir)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
        }
        
    } else if (instruction == 12) {
        if (pin1Dir > 0) {
            pin1Dir += -1
            Servo.Servo(5, pin1Dir)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
        }
        
    } else if (instruction == 21) {
        if (pin2Dir >= 0) {
            pin2Dir = 100
            Servo.Servo(2, pin2Dir)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Scissors)
        }
        
    } else if (instruction == 22) {
        pin2Dir = 0
        Servo.Servo(2, pin2Dir)
        basic.showIcon(IconNames.Scissors)
    } else if (instruction == 31) {
        if (pin3Dir >= 0) {
            pin3Dir += -2
            Servo.Servo(6, pin3Dir)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.EighthNote)
        }
        
    } else if (instruction == 32) {
        if (pin3Dir < 180) {
            pin3Dir += 2
            Servo.Servo(6, pin3Dir)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.QuarterNote)
        }
        
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
        basic.showString("A")
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(1)
        basic.showString("B")
        basic.pause(100)
    } else {
        basic.clearScreen()
    }
    
})
