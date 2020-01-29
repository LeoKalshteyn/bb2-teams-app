class StarPlayersController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @star_players = Team.find(params[:team_id]).star_players
    render json: @star_players, status: 200
  end

  def show
    StarPlayer.find(params[:id])
    render json: @star_player, status: 200
  end

  private

  def star_player_params
    params.require(:star_player).permit(:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills, :team_id)
  end

  def set_params
    @star_player = StarPlayer.find(params[:id])
  end

end
