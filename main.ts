basic.forever(function () {
    // 가스센서 뜨거움 주의
    // MQ3 알코올
    // 0~1023 범위의 아날로그 값
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P1))
    basic.pause(1000)
})
