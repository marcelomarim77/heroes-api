import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({
    name: 'heroes'
})
export class Heroes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
