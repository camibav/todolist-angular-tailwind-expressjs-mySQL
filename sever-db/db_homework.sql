create database db_homework;
use db_homework;
create table homework(
id int auto_increment primary key,
tarea varchar(500) not null,
fecha varchar(15) not null

);

insert into homework(tarea,fecha) values('Hacer ejercicio','25 marzo');
select *from homework