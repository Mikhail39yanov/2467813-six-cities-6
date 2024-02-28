import { TValueOf } from '../user/user.dto';

export const CityType = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const HouseType = {
  apartment: 'apartment',
  house: 'house',
  room: 'room',
  hotel: 'hotel',
} as const;

export const AmenitiesType = {
  Breakfast: 'Breakfast',
  'Air conditioning': 'Air conditioning',
  'Laptop friendly workspace': 'Laptop friendly workspace',
  'Baby seat': 'Baby seat',
  Washer: 'Washer',
  Towels: 'Towels',
  Fridge: 'Fridge',
} as const;

export type TCityType = TValueOf<typeof CityType>;
export type THouseType = TValueOf<typeof HouseType>;
export type TAmenitiesType = TValueOf<typeof AmenitiesType>;

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public city!: TCityType;
  public previewImage!: string;
  public listImages!: string[];
  public isPremium!: boolean;
  public houseType!: THouseType;
  public rooms!: number;
  public guests!: number;
  public rentalCost!: number;
  public amenities!: TAmenitiesType[];
  public latitude!: number;
  public longitude!: number;
  public userId!: string;
}
