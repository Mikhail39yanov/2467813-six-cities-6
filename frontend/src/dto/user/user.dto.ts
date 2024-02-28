export const UserType = {
  simple: 'обычный',
  pro: 'pro',
} as const;
export type TValueOf<T> = T[keyof T];
export type TUserType = TValueOf<typeof UserType>;

export default class UserDto {
  public id!: string;
  public email!: string;
  public name!: string;
  public avatarPath!: string;
  public userType!: TUserType;
}
