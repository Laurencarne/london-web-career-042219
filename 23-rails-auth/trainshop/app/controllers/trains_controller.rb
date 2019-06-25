class TrainsController < ApplicationController
  before_action :find_train, only: [:edit, :show, :update, :destroy]
  before_action :find_conductors, only: [:new, :edit, :create, :update]
  before_action :authorized?
  skip_before_action :authorized?, only: [:index]

  def index
    @trains = Train.all
  end

  def show
  end

  def new
    @train = Train.new
  end

  def create
    @train = Train.new(train_params)
    if @train.valid?
      @train.save
      redirect_to @train
    else
      flash[:errors] = @train.errors.full_messages
      redirect_to new_train_path
    end
  end

  def edit
    # byebug
  end

  def update
    @train.update(train_params)
    if @train.valid?
      redirect_to @train
    else
      flash[:errors] = @train.errors.full_messages
      flash[:notice] = "Hello, I am a train"
      redirect_to edit_train_path
    end
  end

  def destroy
    @train.destroy
    redirect_to trains_path
  end

  private

  def train_params
    params.require(:train).permit(:name, :price, :conductor_id, {passenger_ids: []})
  end

  def find_train
    @train = Train.find(params[:id])
  end

  def find_conductors
    @conductors = Conductor.all
  end
end
