class DogsController < ApplicationController

  # index
  get '/dogs' do 
    @dogs = Dog.all
    erb :'dogs/index'
  end

  # new
  get '/dogs/new' do
    @toys = Toy.all
    @owners = Owner.all
    erb :'dogs/new'
  end

  # show
  get '/dogs/:id' do 
    @dog = Dog.find(params[:id])
    erb :'dogs/show'
  end

  # create
  post '/dogs' do
    dog = Dog.create params[:dog]
    redirect "/dogs/#{dog.id}"
  end

  # edit
  get '/dogs/:id/edit' do
    @toys = Toy.all
    @owners = Owner.all
    @dog = Dog.find(params[:id])
    erb :'dogs/edit'
  end

  # update
  patch '/dogs/:id' do
    if params[:dog][:toy_ids] == nil
      params[:dog][:toy_ids] = []
    end
    dog = Dog.find(params[:id])
    dog.update(params[:dog])
    redirect "/dogs/#{dog.id}"
  end

  # delete
  delete '/dogs/:id' do
    Dog.find(params[:id]).destroy
    redirect '/dogs'
  end

end
