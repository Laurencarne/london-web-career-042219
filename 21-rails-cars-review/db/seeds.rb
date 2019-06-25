Car.destroy_all
Brand.destroy_all
Owner.destroy_all
Mechanic.destroy_all

Brand.create [
    { :name => 'audi' },
    { :name => 'vw' },
    { :name => 'fiat' },
    { :name => 'volvo' },
    { :name => 'bmw' },
    { :name => 'vauxhall' },
    { :name => 'jeep' },
    { :name => 'lada' },
    { :name => 'mini' },
    { :name => 'ford' },
    { :name => 'alfa romeo' },
    { :name => 'aston martin' },
    { :name => 'chevrolet' },
    { :name => 'dodge' },
    { :name => 'honda' },
    { :name => 'hyundai' },
    { :name => 'mazda' },
    { :name => 'mercedes' },
    { :name => 'land rover' },
    { :name => 'nissan' },
    { :name => 'tesla' },
    { :name => 'renault' }
]

Mechanic.create [
    { :name => 'sam' },
    { :name => 'dan' },
    { :name => 'nico' },
    { :name => 'joe' }
]

Owner.create [
    { :name => 'ian' },
    { :name => 'sarah' },
    { :name => 'jo' },
    { :name => 'lucy' },
    { :name => 'stu' },
    { :name => 'sofia' },
    { :name => 'mani' },
    { :name => 'gabe' }
]

10.times do 
    Car.create(:owner => Owner.all.sample, :brand => Brand.all.sample, :mechanic => Mechanic.all.sample)
end
