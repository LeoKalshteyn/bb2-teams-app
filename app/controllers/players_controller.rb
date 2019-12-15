class PlayersController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @players = Player.all
    render json: @players, only: [:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills], status: 200
  end

  def show
    render json: @player, status: 200
  end

  def create
    @player = Player.create(player_params)
    render json: PlayerSerializer.new(@player), status: :created
  end

  private

  def player_params
    params.require(:player).permit(:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills, :team_id)
  end

  def set_params
    @player = Player.find(params[:id])
  end

end