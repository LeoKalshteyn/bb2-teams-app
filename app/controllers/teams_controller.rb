class TeamsController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @teams = Team.all
    render json: @teams, only: [:name, :image], status: 200
  end

  def show
    render json: @team, status: 200
  end

  private

  def team_params
    params.require(:team).permit(:name, :image)
  end

  def set_params
    @team = Team.find(params[:id])
  end

end
