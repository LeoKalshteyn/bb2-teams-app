class PlayersController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @players = Team.find(params[:team_id]).players
    render json: @players, status: 200
  end

  def show
    record = Player.find(params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end

  private

  def player_params
    params.require(:player).permit(:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills, :team_id)
  end

  def set_params
    @player = Player.find(params[:id])
  end

end
