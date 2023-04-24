"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_1 = require("../service/index");
const userSchema = new mongoose_1.Schema({
    name: { type: String },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide an email"],
    },
    avatar: String,
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    contactList: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "ContactList",
        },
    ],
    onlineStatus: { type: Boolean, default: false },
    lastTimeOnline: { type: Date },
}, {
    collection: "users",
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        },
    },
});
userSchema.pre("save", function (done) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified("password")) {
            const hashPassword = yield index_1.Password.hash(this.password);
            this.password = hashPassword;
        }
        done();
    });
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map