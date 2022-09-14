/* Your Code Here */
const employee = {
familyName: "simpson",
firstName: "bartholomew",
payPerHour: 3,
timeInEvents: [
    {
        date: "2014-02-28",
        hour: 1400,
        type: "TimeIn"
    }
],
timeOutEvents: [
    {
        date: "2014-02-28",
        hour: 1600,
        type: "TimeOut"
    }
],
title: "scamp"
}

function createEmployeeRecord(newEmployee){
    const newEmployeeObj = {}
    newEmployeeObj.firstName = newEmployee[0]
    newEmployeeObj.familyName = newEmployee[1]
    newEmployeeObj.title = newEmployee[2]
    newEmployeeObj.payPerHour = newEmployee[3]
    newEmployeeObj.timeInEvents = []
    newEmployeeObj.timeOutEvents = []
    console.log(newEmployeeObj)
    return newEmployeeObj
}

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

const createEmployeeRecords = function (employees) {
    const employeeRecords = []
    employees.forEach((employee) => {
        employeeRecords.push(createEmployeeRecord(employee))
    })
    return employeeRecords
}

const createTimeInEvent = function (dateStamp) {
    const timeInObject = {}
    
    timeInObject.type = 'TimeIn'
    timeInObject.hour = parseInt(dateStamp.split(' ')[1])
    timeInObject.date = dateStamp.split(' ')[0]
    console.log(timeInObject)
    this.timeInEvents.push(timeInObject)
    
    return this
}

const createTimeOutEvent = function (dateStamp) {
    const timeOutObject = {}
    
    timeOutObject.type = 'TimeOut'
    timeOutObject.hour = parseInt(dateStamp.split(' ')[1])
    timeOutObject.date = dateStamp.split(' ')[0]

    this.timeOutEvents.push(timeOutObject)
    
    return this
}

const hoursWorkedOnDate = function (date) {
    let timeIn
    let timeOut
    this.timeInEvents.forEach(timeInEvent => {
        if (timeInEvent.date === date){
            timeIn = timeInEvent.hour
        }
    })
    this.timeOutEvents.forEach(timeOutEvent => {
        if (timeOutEvent.date === date){
            timeOut = timeOutEvent.hour
        }
    })
    return (timeOut - timeIn)/100
}

const wagesEarnedOnDate = function (date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

const findEmployeeByFirstName = function (srcArray, nameInput) {
    const matchignNameObj = srcArray.find(obj => obj.firstName === nameInput)
    return matchignNameObj
}

const calculatePayroll = function(employeeRecords) {
    let payroll = 0
    employeeRecords.forEach((employee) => {
        payroll += allWagesFor.call(employee)
    })
    return payroll
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

