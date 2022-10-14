import { Bson } from "deps";

interface UserSchema {
    _id: Bson.ObjectId;
    username: string;
    hashedPassword: string;
    roles: number;
    hunter: string;
    refreshToken: string
}

interface LinkSchema {
  _id: Bson.ObjectId;
  hunter: string;
  prey: string;
  action: string
}

interface PreySchema {
  _id: Bson.ObjectId;
  prey: string;
  stolenData: any;
}

export type {UserSchema, LinkSchema, PreySchema};