import { TUserType } from './user.dto';

export default class UserWithTokenDto {
  public token!: string;
  public email!: string;
  public name!: string;
  public avatarPath!: string;
  public userType!: TUserType;
}
