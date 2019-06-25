# destroy phase

Cupcake.destroy_all
Eater.destroy_all

eaters = [
  {name: 'Dan'},
  {name: 'Pat'},
  {name: 'Ross'}
]

Eater.create eaters

# a Cupcake has to be created w/ an Eater present!

cupcakes = [
  {name: 'blueberry' ,price: 3, eater_id: Eater.all.sample.id },
  {name: 'strawberry' ,price: 3, eater_id: Eater.all.sample.id },
  {name: 'plain' ,price: 8, eater_id: Eater.all.sample.id },
  {name: 'dust' ,price: 3, eater_id: Eater.all.sample.id },
  {name: 'chocolate' ,price: 7, eater_id: Eater.all.sample.id }
]

Cupcake.create cupcakes
