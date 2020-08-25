-- select * from customers where birth_date is null;

-- Working with the Foreign Key constraints

-- Primary Key & foreign Key
1. create table demo1 (id int not null primary key, employee_name varchar(10));
   describe demo1;

--

--  Table with Foreign Key
1. create table demo2 (id int not null, street_name varchar(20), first_name varchar(10), primary key(id), foreign key(id) references demo1(id));
   show create table demo2;

-- Delete the foreign key constraint from table
1. Alter table demo2 drop foreign key id;

-- Remove Primary Key 
1. Alter table demo1 drop primary key;

-- Add Primary key in existing table
1. alter table demo2 add primary key (first_name);

-- Add column in existing table
1. alter table demo1 add (branch varchar(20) default "Cse");

-- Add a unique constraint to existing table
1. alter table demo2 modify name varchar(20) unique;

-- To check the column constraints
1. show create table order_items; 
   describe customers;

-- Check Storage Engines
1. show engines;


-- Create table with Engine
1. CREATE TABLE Cars(Id INTEGER PRIMARY KEY, Name VARCHAR(50), Cost INTEGER) ENGINE='MyISAM';
-- show create table Cars;
-- describe cars;
2. SELECT ENGINE FROM information_schema.TABLES WHERE TABLE_SCHEMA='mydb' AND TABLE_NAME='Cars';

-- to change the table Engine 
1. ALTER TABLE Cars ENGINE='innodb';
 show create table Cars;
