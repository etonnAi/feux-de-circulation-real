function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.A, function () {
    passer = 1
})
function attendrejaune2 () {
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function attendrejaune () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Fermer () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function passerblanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
let piéton = 0
let passer = 0
let temp = 0
basic.forever(function () {
    if (piéton == 1 && temp < 5) {
        basic.showNumber(Math.round(5 - temp))
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    temp += 0.025
    Fermer()
    if (temp < 5) {
        rouge()
        if (piéton == 1) {
            if (temp > 4) {
                if (temp * 5 % 1 < 0.5) {
                    attendrejaune()
                }
            } else {
                passerblanc()
            }
        } else {
            attendrejaune()
        }
    } else if (temp < 10) {
        vert()
        attendrejaune()
    } else if (temp < 12) {
        jaune()
        attendrejaune()
    } else {
        temp = 0
        if (passer == 1) {
            piéton = 1
            passer = 0
        } else {
            piéton = 0
        }
    }
})
