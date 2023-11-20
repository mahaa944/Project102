// إنشاء Class للمركبات
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  // إنشاء Class للسيّارة
  class Car extends Vehicle {
    constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
    }
  }
  
  // إنشاء Class للطيّارة
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, airplaneType) {
      super(name, manufacturer, id);
      this.airplaneType = airplaneType;
    }
  }
  
  // إنشاء Class للموظفين
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  // إنشاء Class للسائق
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // إنشاء Class للطيّار
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // إنشاء Class للحجز
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  // إنشاء مصفوفة لتخزين الحجوزات
  let reservationsArray = [];
  
  // إنشاء ثلاثة سيارات وطائرتين
  let car1 = new Car("Car1", "Manufacturer1", 1, "Gas");
  let car2 = new Car("Car2", "Manufacturer2", 2, "Electric");
  let car3 = new Car("Car3", "Manufacturer3", 3, "Gas");
  
  let airplane1 = new Airplane("Airplane1", "Manufacturer4", 4, "Type1");
  let airplane2 = new Airplane("Airplane2", "Manufacturer5", 5, "Type2");
  
  // إنشاء دالة للتحقق والحجز
  function makeReservation(employeeId, vehicleId) {
    let employee = reservationsArray.find((res) => res.employeeId === employeeId);
    if (employee && employee.vehicleId !== vehicleId) {
      console.log("لا يتوافق الموظف مع المركبة.");
    } else {
      let reservation = new Reservation(new Date(), employeeId, vehicleId, reservationsArray.length + 1);
      reservationsArray.push(reservation);
      console.log("تم إنشاء الحجز بنجاح.");
    }
  }
  
  // إجراء حجز باستخدام الدالة
  makeReservation(1, 1); // يجب أن يطبع "تم إنشاء الحجز بنجاح."
  makeReservation(2, 1); // يجب أن يطبع "لا يتوافق الموظف مع المركبة."
  
  // طباعة محتوى المصفوفة باستخدام دالة map
  reservationsArray.map((reservation) => console.log(reservation));
 /*
sample output:
تم إنشاء الحجز بنجاح.
تم إنشاء الحجز بنجاح.
Reservation {
  reservationDate: 2023-11-20T14:33:33.173Z,
  employeeId: 1,
  vehicleId: 1,
  reservationID: 1
}
Reservation {
  reservationDate: 2023-11-20T14:33:33.207Z,
  employeeId: 2,
  vehicleId: 1,
  reservationID: 2
}
 */