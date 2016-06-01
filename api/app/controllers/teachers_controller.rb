class TeachersController < ApplicationController
  def index
    render json: @teachers = Teacher.all
  end

  def show
    @teacher = Teacher.find(params[:id])
    @badges = @teacher.badges
    @badges.order('votes DESC')
    data = {teacher: @teacher, badges: @badges}
    render json: data
  end

  def create
  end

  def update
  end

  def delete
  end
end
