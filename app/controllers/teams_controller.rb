class TeamsController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @teams = Team.all
    render json: @teams, only: [:name, :image], status: 200
  end

  def search
    render status: 200, json: Team.where("team_name = ?", params["name"])
  end

  def specific
    render status: 200, json: Team.where("name LIKE ?", "%#{params[:term]}")
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
