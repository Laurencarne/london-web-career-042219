require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  # index
  get '/dishes' do
    @dishes = Dish.all.sort_by { |dish| dish.price }
    erb :'dishes/index'
  end

  #show
  get '/dishes/:id' do
    @dish = Dish.find(params[:id])
    erb :'dishes/show'
  end

end
