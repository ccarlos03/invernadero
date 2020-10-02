basic.forever(function () {
    if (input.temperature() < 23) {
        basic.showNumber(input.temperature())
        for (let index = 0; index <= 3; index++) {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        if (input.temperature() > 25) {
            basic.showNumber(input.temperature())
            for (let index = 0; index <= 3; index++) {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            basic.showNumber(input.temperature())
        }
    }
})
