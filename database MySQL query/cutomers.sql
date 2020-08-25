    SELECT  name,unit_price,(unit_price* 1.1)
    as "new price"
    From products;

-- AND
    select * from customers
    where
    birth_date < "1990-01-01" and points>1000; 

-- OR
    select * from customers 
    where state = "VA" Or state="FL" or state ="GA";

-- IN
1.  select * from customers 
    where state in ('VA','GA','FL'); 
    
2.  select * from products
    where quantity_in_stock in (49,38,72);   //return in products with QIS equal to 49,38,72

-- between
1.  select * from customers 
    where points between 1000 and 3000; 
    
2.  select * from customers
    where birth_date between "1990/01/01" AND "2000/01/01"; // slect customer born between 1990

-- LIKE
1.  select * from customers 
    where address ="TRAIL" or "AVENUE" 
    AND phone Like "%9"; 
    
2.  select * from customers 
    where last_name regexp "e[b-l]"; ^, $, |, [], [-]
    
3.  select * from customers 
    where first_name regexp "elka|ambur";
    
4.  select * from customers 
    where last_name regexp "ey$|on$";
    
5.  select * from customers
    where last_name regexp "^my|se";
    
6.  select * from customers 
    where last_name regexp "b[ru]";

-- IS Null
1.  select * from orders 
    where shipper_id is null;

-- Order by //select all items from id=2 and sort them total price in desc
1.  select 
    first_name,
    last_name, 
    (10*10)+points as point 
    from customers order by points, first_name; 
    
2.  select * from order_items 
    where order_id = 2 and unit_price*quantity
    order by order_id desc; 
    
3.  select *,
    quantity*unit_price as total_price
    from order_items
    where order_id = 2 
    order by total_price desc;

-- LIMIT //select the top three loyal customers
1. select * from customers 
   limit 4,6;
   
2. select * from customers
   order by points Desc limit 3;

-- join 
1. select * from orders 
   inner join 
   customers on customers.customer_id = orders.customer_id; //select orders from order_id with customer name
   
2. select order_id,
   o.customer_id,
   first_name,
   last_name 
   from orders o join customers c on o.customer_id = c.customer_id;
   
3. select * from order_items
   join products on order_items.product_id = products.product_id;
   
4. select order_id,
   p.product_id,
   o.quantity, 
   o.unit_price,
   name from order_items o join products p on o.product_id = p.product_id; 

-- adding two different database column 
1. select * from order_items
   o join sql_inventory.products p on o.product_id = p.product_id;

-- self join 
1. select e.employee_id,
   e.first_name,
   m.first_name as manager from sql_hr.employees e join sql_hr.employees m on e.reports_to = m.employee_id;

-- join three tables
1. select o.order_id, 
   o.order_date,
   c.first_name, 
   c.last_name,
   os.name as status from orders o join customers c on o.customer_id = c.customer_id
   join order_statuses os on o.status = os.order_status_id;
   
2. select p.date,
   p.amount, 
   c.name, 
   pm.name,
   p.invoice_id from sql_invoicing.payments p join sql_invoicing.payment_methods pm on p.payment_method = pm.payment_method_id 
   join sql_invoicing.clients c on p.client_id = c.client_id; //select name amount and payment of three table

-- join two tables with there two column each 2 table ke 2 columns ko match.
1. select * from order_items
   oi join order_item_notes oin on oi.order_Id = oin.order_Id and oi.product_id = oin.product_id;

-- outer join //left & right name
1. select c.customer_id, 
   c.first_name, 
   o.order_id from customers c left join orders o on c.customer_id=o.customer_id order by c.customer_id desc;
   
2. select c.customer_id,
   c.first_name,
   o.order_id, 
   sh.name as shipper from customers c left join orders o on c.customer_id= o.customer_id left join shippers sh on o.shipper_id=sh.shipper_id order by c.customer_id;

-- UNION // used to combine row with multiple table
1. select order_id,
   order_date, "Active" as status 
   from orders where order_date>="2019-01-01" UNION select order_id, order_date, "Archives" as status from orders where order_date < "2019-01-01";

-- find the customers who have less than 2000, 3000 and greater thn 4000 
1. select customer_id,
   first_name,
   points, "Bronze" as type 
   from customers where points < 2000
   
   union
   
   select customer_id,first_name,points, "silver" as type from customers where points between 2000 and 3000
   
   union
   
   select customer_id, first_name,points, "GOLD" as type from customers where points >3000 order by first_name;

