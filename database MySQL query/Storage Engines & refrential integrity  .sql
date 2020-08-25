-- select p.date, p.amount, c.name, pm.name,  p.invoice_id from sql_invoicing.payments p join sql_invoicing.payment_methods pm on p.payment_method = pm.payment_method_id join sql_invoicing.clients c on p.client_id = c.client_id;
-- select * from customers where birth_date is null;

-- Working with the Foreign Key constraints

-- Primary Key & foreign Key
-- create table demo1 (id int not null primary key, employee_name varchar(10));
-- describe demo1;

--

-- create table with Foreign Key
-- create table demo2 (id int not null, street_name varchar(20), first_name varchar(10), primary key(id), foreign key(id) references demo1(id));
-- show create table demo2;

-- Delete the foreign key constraint from table
-- Alter table demo2 drop foreign key id;

-- Remove Primary Key 
-- Alter table demo1 drop primary key;

-- Add Primary key in existing table
-- alter table demo2 add primary key (first_name);

-- Add column in existing table
-- alter table demo1 add (branch varchar(20) default "Cse");

-- Add a unique constraint to existing table
-- alter table demo2 modify name varchar(20) unique;

-- To check the column constraints
-- show create table order_items; 
-- describe customers;

-- Check Storage Engines
-- show engines;


-- Create table with Engine
-- CREATE TABLE Cars(Id INTEGER PRIMARY KEY, Name VARCHAR(50), Cost INTEGER) ENGINE='MyISAM';
-- show create table Cars;
-- describe cars;
-- SELECT ENGINE FROM information_schema.TABLES WHERE TABLE_SCHEMA='mydb' AND TABLE_NAME='Cars';

-- to change the table Engine 
-- ALTER TABLE Cars ENGINE='innodb';
-- show create table Cars;
