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

export type {UserSchema, LinkSchema};