let item = false
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 25 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        basic.pause(1000)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        basic.pause(1000)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 150)
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (item == false) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
        basic.pause(800)
    }
})
