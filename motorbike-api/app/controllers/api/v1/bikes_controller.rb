class Api::V1::BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def create
  end
end
