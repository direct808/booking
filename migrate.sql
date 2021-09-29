drop table if exists number;
create table  number
(
    id serial,
    title varchar
);

alter table number owner to postgres;

drop table if exists booking;
create table booking
(
    id serial,
    "from" date,
    "to" date,
    "numberId" integer,
    "price" decimal
);

alter table  booking owner to postgres;

