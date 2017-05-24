class Api::V1::BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def create
    @bike = Bike.new(bike_params(:brand, :style, :cc, :year))
    if @bike.save
      render json: @bike
    else
      render plain: "bike didn't save"
    end
  end

  private

  def bike_params(*args)
    params.permit(*args)
  end
end
