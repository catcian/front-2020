

// 收音机
interface IRadio {
  switchRadio(trigger: boolean): void
}

// 电池
interface IBattery {
  checkBatteryStatus(): void
}

// 接口之间可以继承
interface IRadioWithBattery extends IRadio {
  checkBatteryStatus(): void
}

class Car implements IRadio {
  switchRadio(trigger: boolean){

  }
}

// IRadio, IBattery = IRadioWithBattery
class CellPhone implements IRadioWithBattery {
  switchRadio(trigger: boolean){

  }

  checkBatteryStatus(){

  }
}



// 