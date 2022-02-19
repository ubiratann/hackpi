import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "avatar" })
export class Avatar {

    @PrimaryColumn({ type: 'numeric', primary: true })
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    image: string;

}
