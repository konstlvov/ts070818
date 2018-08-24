"use strict";
// function getAverage(...a: [number, string]): string {
//     const total = a + b + c;
//     /*  let count = 2;
//       if (typeof c !== 'undefined') {
//           total += c;
//           count++;
//       }*/
//     const average = total / 3;
//     return `The average is ${average}`;
// }
//
// const result: number = getAverage(2, 1, 1);
// type JSONData = {
//     id: string;
//     account: {}
// };
// let a;
// a = 1;
// a = 's';
//
// function transformData(data: JSONData): void {}
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// interface IYPoint {
//     y: number;
// }
//
// class Point {
//
//     public readonly x: number;
//     protected y: number;
//     private z: number;
//
//     public constructor(x: number, y: number, z: number) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
//
//     public sum(): number {
//         //this.x = 1;
//         return 3;
//     }
// }
//
// const point: Point = new Point(1, 2, 3);
//
//
// class Mypoint extends Point {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//         this.
//     }
// }
//
// class Singleton {
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
//
//     private static instance: Singleton;
//
//
//     private constructor() {}
//
//
// }
//
// const instance: Singleton = Singleton.getInstance();
//
//
// abstract class Base {
//
//     public title!: string;
//
//     public abstract sum(): void;
//
//     public multi(): number {
//         return 1;
//     }
// }
//
// class A extends Base {
//     public sum(): void {}
// }
// const user: IUser;
// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
function logMethod(target, key, descriptor) {
    var originalDescriptorValue = descriptor.value;
    return __assign({}, descriptor, { value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var b = args.map(function (a) { return JSON.stringify(a); })
                .join();
            var result = originalDescriptorValue(args);
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + b + ") => " + r);
            return result;
        } });
}
var MathLib = /** @class */ (function () {
    function MathLib() {
    }
    MathLib.prototype.areaOfCircle = function (r) {
        return Math.PI * Math.pow(r, 2);
    };
    __decorate([
        logMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], MathLib.prototype, "areaOfCircle", null);
    return MathLib;
}());
var lib = new MathLib();
lib.areaOfCircle(10);
lib.areaOfCircle(2);
