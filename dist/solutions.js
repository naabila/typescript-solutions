"use strict";
function multiplyValue(value, multiplier) {
    const finalMultiplier = multiplier !== null && multiplier !== void 0 ? multiplier : 2;
    return value * finalMultiplier;
}
function processInput(input) {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        return input ? "Active" : "Inactive";
    }
}
function formatCoordinate(coordinate) {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    return arrays.reduce((result, currentArray) => result.concat(currentArray), []);
}
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true &&
            course.students >= minStudents;
    });
}
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}
