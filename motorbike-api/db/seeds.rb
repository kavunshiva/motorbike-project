# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bike.create(
  brand: "BMW",
  style: "dirt",
  cc: 250,
  year: 2015
)

Bike.create(
  brand: "Yamaha",
  style: "sport",
  cc: 1000,
  year: 2008
)

Bike.create(
  brand: "Harley-Davidson",
  style: "chopper",
  cc: 883,
  year: 2016
)

Bike.create(
  brand: "Suzuki",
  style: "chopper",
  cc: 500,
  year: 1969
)
