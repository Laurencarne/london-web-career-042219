class AnswersController < ApplicationController

    def new
        session[:score] ||= 0
        @user = session[:user_id] ? User.find(session[:user_id]) : nil
        @instructor = Instructor.all.sample
        @answer = Answer.new
        @options = Cookie.options(@instructor.cookie)
    end
    
    def create
        question = Question.create({instructor_id: params[:answer][:instructor_id]})
        answer = Answer.create(answer_params)
        answer.question = question
        if answer.save
            flash[:notice] = answer.correct ? 'well done!' : 'wrong!'
            session[:score] += answer.correct ? 1 : 0
            session[:user_id] = answer.user.id
            redirect_to new_answer_path
        else
            flash[:errors] = ["Something went wrong"]
            redirect_to new_answer_path
        end
    end

    private

    def answer_params
        params.require(:answer).permit(:cookie_id, :user_id, :user_name)
    end
end
