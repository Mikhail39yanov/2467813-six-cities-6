import { TUserType } from './user.dto';

export default class CreateUserWithIdDto {
  public id!: string;
  public email!: string;
  public avatarPath!: string;
  public name!: string;
  public userType!: TUserType;
  public password!: string;
}
