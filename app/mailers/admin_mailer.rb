class AdminMailer < ApplicationMailer
    before_action :set_user, only: [:approve_trader, :new_user_email]
    def new_user_email
        mail(to: "dinndev@gmail.com", subject: "New trader requesting for an approval")
    end

    def approve_trader
        
    end

    private

    def set_user
        @user = params[:user]
    end
end
