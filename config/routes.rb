Rails.application.routes.draw do
  get '/current_user', to: 'current_user#index'
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :stocks, exept: [:index]
  get 'portfolio', to: "user#portfolio"
  resources :transactions, only: [:index]
  get 'stock_list', to: 'stocks#stock_list'
  post 'sell', to: "transactions#sell"
  post 'buy', to: "transactions#buy"
  get 'pending_traders', to: "users#pending_traders"
  get 'all_transactions', to: "users#show_all_transactions"
  get 'user_lists', to: "users#user_lists"
  post 'approve_user', to: "users#approve_user"

  
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
