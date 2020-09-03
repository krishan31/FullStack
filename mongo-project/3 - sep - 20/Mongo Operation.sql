-- collection is Capped or not
 db.collection.isCapped()
 -- get collection info
 db.getCollectionInfos()
 
-- Insert Documents
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

db.collection.insertOne()
db.collection.insertMany()

-- Read Operation
db.inventory.find( {} )

-- selects from the inventory collection all documents where the status equals "D"
db.inventory.find( { status: "D" } )

-- select documents from the inventory collection where status equals either "A" or "D"
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

-- retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

-- retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

--  selects all documents in the collection where the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p:
db.inventory.find( {
     status: "A",
     $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )





-- //insert records in inventory collection
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
   { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
   { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
   { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
   { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
]);

-- find the records which have foeld tags red and blank
db.inventory.find( { tags: ["red", "blank"] } )

-- find the records that contains both the elements "red" and "blank", without regard to order or other elements in the array
db.inventory.find( { tags: { $all: ["red", "blank"] } } )
-- db.inventory.find( { tags: "red" } ) //have tags red

-- find the record where the array dim_cm contains at least one element whose value is greater than 25.
db.inventory.find( { dim_cm: { $gt: 25 } } )
-- db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } ) //AND

-- "AND" find the record where the dim_cm array contains at least one element that is both greater than ($gt) 22 and less than ($lt) 30
db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )  

-- find the records where the second element in the array dim_cm is greater than 25
db.inventory.find( { "dim_cm.1": { $gt: 25 } } )

-- find the records where the array tags has 3 elements.
db.inventory.find( { "tags" : { $size: 3 } } )

-- Update Operations
db.inventory.updateMany(
   { "qty": { $lt: 50 } },
   {
     $set: { "size.uom": "in", status: "P" },
     $currentDate: { lastModified: true }
   }
)


-- Delete Operations
db.inventory.deleteMany({})
db.inventory.deleteOne({"status": "D"})
