import { IsNumber, IsString, IsUUID } from "class-validator";
import { Avatar } from "../entities/avatar.entity";

export class AvatarDto  implements Readonly<AvatarDto>{
    @IsUUID()
    @IsNumber()
    id: number;
    
    @IsString()
    image: string;
  
    public static from(dto: Partial<AvatarDto>) {
      const avatar = new AvatarDto();
      avatar.id = dto.id;
      avatar.image = dto.image;
      return avatar;
    }
  
    public static fromEntity(entity: Avatar) {
      return this.from({
        id: entity.id,
        image: entity.image
      });
    }
  
    public toEntity(user: Avatar = null) {
      const avatar = new Avatar();
      avatar.id = this.id;
      avatar.image = this.image;
      return avatar;
    }
}
