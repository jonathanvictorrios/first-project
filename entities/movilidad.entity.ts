import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'p_usuarios_prod', name: 'carga_movilidad' })
export class movilidad {
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    establecimiento!:string;
    @Column()
    km!:number;
    @Column()
    periodo!:string;
    @Column()
    comprobante!:string;
    @Column()
    fecha!:Date;
    @Column()
    dni!:number;
}