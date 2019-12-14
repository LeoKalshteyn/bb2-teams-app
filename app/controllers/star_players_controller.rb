class StarPlayersController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @star_players = StarPlayer.all
    render json: @star_players, only: [:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills], status: 200
  end

  def show
    render json: @star_player, status: 200
  end

  def create
    @star_player = StarPlayer.create(star_player_params)
    render json: StarPlayerSerializer.new(@star_player), status: :created
  end

  private

  def star_player_params
    params.require(:star_player).permit(:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills, :team_id)
  end

  def set_params
    @star_player = StarPlayer.find(params[:id])
  end

end
