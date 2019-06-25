class DogsController < ApplicationController

  def index
    @dogs = Dog.all
  end

  def adoption_dogs
    @dogs = Dog.all.select{|dog| dog.employees.length == 0}
  end

  def adoption_form
    @dog = Dog.find(params[:id])
  end

  def adopt_dog
    @dog = Dog.find(params[:dog_id])
    @employee = Employee.find(params[:employee_id])
    @dog.employees << @employee
    @dog.save
    redirect_to adoption_dogs_path
  end

end
