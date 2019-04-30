Rails.application.routes.draw do
  resources :pages
  get 'page/home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users,
             controllers: {
                 sessions: 'users/sessions',
                 confirmations: 'users/confirmations',
                 unlocks: 'users/unlocks',
                 registrations: 'users/registrations',
                 passwords: 'users/passwords'
             },
             path: '/',
             path_names: {
                 sign_in: 'login',
                 sign_out: 'logout'
             }

  devise_scope :user do
    authenticated :user do
      root 'home#index', as: :authenticated_root
    end

    unauthenticated :user do
      root 'users/sessions#new', as: :unauthenticated_root
    end

    authenticate :user do
      # Shows all users.
      get '/users', to: 'users/registrations#index', as: :user_registrations

      controller :page do
        get 'home', as: :home_page
        get 'email', as: :email_page
        get 'map', as: :map_page
      end
    end
  end
end
