class CupcakesController < ApplicationController
  before_action :find_cupcake, only: [:show, :edit, :update, :destroy]

  def index
    @cupcakes = Cupcake.all
  end

  def show
  end

  def new
    @cupcake = Cupcake.new
  end

  def create
    cupcake = Cupcake.create cupcake_params
    redirect_to cupcake
  end

  def edit
  end

  def update
    @cupcake.update cupcake_params
    redirect_to @cupcake
  end

  def destroy
    @cupcake.destroy
    redirect_to cupcakes_path
  end

  private

  def find_cupcake
    @cupcake = Cupcake.find params[:id]
  end

  def cupcake_params
    params.require(:cupcake).permit(:name, :price)
  end
end
