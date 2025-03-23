let cmd = ""
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "0") {
        basic.showNumber(0)
    } else if (cmd == "1") {
        basic.showNumber(1)
    }
})
basic.forever(function () {
    serial.writeString("!1:TEMP:" + input.temperature() + "#")
    basic.pause(30000)
})
