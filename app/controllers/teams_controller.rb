class TeamsController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @teams = Team.all.sort_by &:created_at
    render json: @teams, status: 200
  end

  def show
    record = Team.find(params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end

  private

  def team_params
    params.require(:team).permit(:name, :image)
  end

  def set_params
    @team = Team.find(params[:id])
  end

end
