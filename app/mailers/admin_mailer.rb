class AdminMailer < ApplicationMailer
    def new_user_email
        @user = params[:user]
        mail(to: "dinndev@gmail.com", subject: "New trader requesting for an approval")
    end
end
