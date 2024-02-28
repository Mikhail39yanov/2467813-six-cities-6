import UserDto from '../user/user.dto';
import { TAmenitiesType, TCityType, THouseType } from './create-offer.dto';

export default class OfferDto {
  public id!: string;
  public title!: string;
  public description!: string;
  public publicationDate!: Date;
  public city!: TCityType;
  public previewImage!: string;
  public listImages!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public houseType!: THouseType;
  public rooms!: number;
  public guests!: number;
  public rentalCost!: number;
  public amenities!: TAmenitiesType[];
  public latitude!: number;
  public longitude!: number;
  public commentCount!: number;
  public user!: UserDto;
}
