use example
db.getCollectionInfos()
 
-- particular collection
use example
db.getCollectionInfos( { name: "employees" } )



-- sales collection
db.sales.insertMany([
  { "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("2"), "date" : ISODate("2014-03-01T08:00:00Z") },
  { "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : NumberInt("1"), "date" : ISODate("2014-03-01T09:00:00Z") },
  { "_id" : 3, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : NumberInt( "10"), "date" : ISODate("2014-03-15T09:00:00Z") },
  { "_id" : 4, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" :  NumberInt("20") , "date" : ISODate("2014-04-04T11:21:39.736Z") },
  { "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("10") , "date" : ISODate("2014-04-04T21:23:13.331Z") },
  { "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("5" ) , "date" : ISODate("2015-06-04T05:08:13Z") },
  { "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("10") , "date" : ISODate("2015-09-10T08:43:00Z") },
  { "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("5" ) , "date" : ISODate("2016-02-06T20:20:13Z") },
])

-- count the no of document in sales
db.sales.aggregate([ { $group:{ _id: null, count: { $sum: 1} }}])
 
 -- count the items in sales document
 db.sales.aggregate([ { $group: {_id: "$item", count: { $sum: 1} }}])
 
 -- retriev the distinct items value from the sales
 db.sales.aggregate( [ { $group: {_id: "$item"} } ] )
 
 
 -- count the quantity
 db.sales.aggregate([{ $count: "quantity"}])
 
 -- count the emplo age and eye color gt 25
 db.emp.aggregate([
 "stage 1"//
 {$match: {age: {$gte: 25}}},
 "stage 2"//
 {$group: {$id: {eyeColor: "$eyeColor", age: "$age"}}},
 "stage 3"//
 {$count: "eyeColorAndAge"}
 ])
 
 -- find the eyecolor and FavFruit col from the collection
 db.collection.aggregate([
 //stage 1
 { $group: {_id: {eyeColor: "$eyeColor", favoriteFruit: "$favouriteFruit", age: "$age"} } } ])
 
 -- find the employee who's age is gt 25
 db.persons.aggregate([ { $match: { age: {$gt: 25}} } ])
 
 -- find the recors those have active status true
 db.person.aggregate([{$match: {isActive: true}}])
 
 -- find the document where size of the "tags" array is 3
 db.persons.aggregate([{ $match: {tags: {$size: 3} } } ])
 
 
 -- Group by Item Having¶
 -- calculating the total sale amount per item and returning only the items with total sale amount greater than or equal to 100:
 db.sales.aggregate(
  [
    // First Stage
    {
      $group :
        {
          _id : "$item",
          totalSaleAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } }
        }
     },
     // Second Stage
     {
       $match: { "totalSaleAmount": { $gte: 100 } }
     }
   ]
 )
 
 
 
 -- SORTING
 -- sort the name in asc order
 db.emp.aggregate([{$sort: {name: 1}}])
 
 -- sort the name, age eyecolor
 db.emp.aggregate([{ $sort: {age: 1, gender: 1, eyeColor: 1 }}])
 
 -- sort by the age
 db.emp.aggregate([ {$group: {_id: "$age"} }, {$sort: {_id: 1}}])
 
 -- sort and group the query byeyecolor, favvfruit
 db.emp.aggregate([{$match: {eyeColor: {$ne: "blue"}}},{$group: {_id: {eyeColor: "$eyeColor",favoritefruit: "$favfruit"} } },{$sort: {"_id.eyeColor":1, "_id.favouritefruit": -1}}])
 -- 
 
 -- LIMIT 
 db.emp.aggregate([
 // stage 0
 {$limit:100},
 //stage 1
 {$match: {eyeColor: {$ne: "blue"}}},
 //stage 2
 {$group: {_id: {eyeColor: "$eyeColor",
				favoritefruit: "$favfruit"} } },
 //stage 3
 {$sort: {"_id.eyeColor":1, "_id.favouritefruit": -1}}
 ])
 
 -- find the number of countries have age greater than 27
 db.pers.aggregate([
 {$limit: 100},
 {$match: { age: {$gt: 27}} },
 {$group: {_id: "$company.location.country" } }
 ])
 
 {"_id": "Ger"}
 {"_id": "Aus"}
 {"_id": "Ind"}
 {"_id": "Fra"}
 
 
 
 -- Reg Expression
 db.getCollection('person').find({})
 
 find the name have combination of aur
 db.person.find({name: { $regex: /Aur/i } }) find combination of aur
 db.person.find({name: { $regex: /^Aur/i } }) starting with