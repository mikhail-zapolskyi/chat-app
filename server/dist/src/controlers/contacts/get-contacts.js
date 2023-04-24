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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../model");
const mongoose_1 = __importDefault(require("mongoose"));
const getContacts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const id = new mongoose_1.default.Types.ObjectId(userId);
    try {
        // FIND USER AND AGGREGATE CONTACT LIST WITH CONTACT ID AND ROOM ID
        const rawContactList = yield model_1.User.aggregate([
            { $match: { _id: id } },
            {
                $lookup: {
                    from: "contactList",
                    localField: "contactList",
                    foreignField: "_id",
                    as: "contactList",
                },
            },
            { $unwind: "$contactList" },
            {
                $lookup: {
                    from: "users",
                    localField: "contactList.users",
                    foreignField: "_id",
                    as: "users",
                },
            },
            {
                $lookup: {
                    from: "rooms",
                    localField: "contactList.roomId",
                    foreignField: "_id",
                    as: "contactList.roomId",
                },
            },
            {
                $project: {
                    _id: "$contactList._id",
                    users: {
                        $filter: {
                            input: "$users",
                            as: "user",
                            cond: { $ne: ["$$user._id", id] },
                        },
                    },
                    roomId: "$contactList.roomId._id",
                },
            },
        ]);
        // PULLS STRINGS FROM ARRAY TO DELIVER CONTACT OBJECT
        const contactList = rawContactList.map((contact) => {
            const { _id, email, onlineStatus, lastTimeOnline } = contact.users[0];
            return {
                id: contact._id,
                contactId: _id,
                email,
                onlineStatus,
                roomId: contact.roomId[0],
                lastTimeOnline,
            };
        });
        return res.status(200).json({ contacts: contactList || [] });
    }
    catch (error) {
        next(error);
    }
});
exports.default = getContacts;
//# sourceMappingURL=get-contacts.js.map