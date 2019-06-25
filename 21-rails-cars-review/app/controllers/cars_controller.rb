class CarsController < ApplicationController

    def index
        @cars = Car.all
    end
    
    def new
        @car = Car.new
    end

    def create
        @car = Car.create car_params
        redirect_to cars_path
    end

    private

    def car_params
        params.require(:car).permit(:owner_id, :mechanic_id, :brand_id)
    end
end
