import { Bson } from "deps";

interface UserSchema {
    _id: Bson.ObjectId;
    username: string;
    password: string;
    hunter: string
  }