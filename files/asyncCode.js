var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var context = { label: 0, sent: function () { if (optA[0] & 1) throw optA[1]; return optA[1]; }, trys: [], ops: [] }, generatorGuard, opt_1, optA, generatorR;
    return generatorR = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (generatorR[Symbol.iterator] = function () { return this; }), generatorR;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (generatorGuard) throw new TypeError("Generator is already executing.");
        while (context) try {
            if (generatorGuard = 1, opt_1 && (optA = opt_1[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(optA = optA.call(opt_1, op[1])).done) return optA;
            if (opt_1 = 0, optA) op = [0, optA.value];
            /*
            1: start
            2: return 结束
            3: break 
            4: yield
            5: 
            6: 
            7: endfinally
            */
            switch (op[0]) {
                case 0: case 1: optA = op; break;
                case 4: context.label++; return { value: op[1], done: false };
                case 5: context.label++; opt_1 = op[1]; op = [0]; continue;
                case 7: op = context.ops.pop(); context.trys.pop(); continue;
                default:
                    if (!(optA = context.trys, optA = optA.length > 0 && optA[optA.length - 1]) && (op[0] === 6 || op[0] === 2)) { context = 0; continue; }
                    if (op[0] === 3 && (!optA || (op[1] > optA[0] && op[1] < optA[3]))) { context.label = op[1]; break; }
                    if (op[0] === 6 && context.label < optA[1]) { context.label = optA[1]; optA = op; break; }
                    if (optA && context.label < optA[2]) { context.label = optA[2]; context.ops.push(op); break; }
                    if (optA[2]) context.ops.pop();
                    context.trys.pop(); continue;
            }
            op = body.call(thisArg, context);
        } catch (e) { op = [6, e]; opt_1 = 0; } finally { generatorGuard = optA = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};