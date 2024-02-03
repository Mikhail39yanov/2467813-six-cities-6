/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { UserType } from '../../const/index.js';
import { TUser, TUserType } from '../../types/index.js';
import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { createSHA256 } from '../../utils/index.js';

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  },
})
export class UserEntity extends defaultClasses.TimeStamps implements TUser {
  @prop({
    type: String,
    required: true,
    trim: true,
    minlength: [1, 'Min length for name path is 1'],
    maxlength: [15, 'Max length for name path is 15'],
  })
  public name: string;

  @prop({
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  })
  public email: string;

  @prop({
    type: String,
    required: false,
    trim: true,
    match: [/\.(jpg|png)(\?.*)?$/i, 'The user`s image must include an extension .jpg or .png'],
    default: 'https://placehold.jp/673ab7/ffffff/50x50.png?text=AVATAR',
  })
  public avatarPath?: string;

  @prop({
    type: String,
    required: true,
    enum: {
      values: [UserType.simple, UserType.pro],
      message: '{VALUE} is not supported',
    },
  })
  public userType: TUserType;

  @prop({
    required: true,
  })
  private password?: string;

  constructor(userData: TUser) {
    super();

    this.email = userData.email;
    this.avatarPath = userData.avatarPath;
    this.name = userData.name;
    this.userType = userData.userType;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
