Rails.application.routes.draw do
  get '/flats', to: 'pages#flats'
  get '/flats/:id', to: 'pages#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
