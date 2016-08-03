require 'rubygems'
require 'sinatra'
require 'bundler/setup'



get '/' do 
	File.read('index.html')
end

post '/' do
	require 'pony'
	name  = params[:name]
	mail = params[:mail]
	subject = params[:subject]
	body  = params[:body]

Pony.options = {
  :via => :smtp,
  :via_options => {
    :address              => 'smtp.gmail.com',
    :location 			  => '/c/sendmail/./sendmail',
    :ssl 				  => true,
    :arguments			  => '-t',
    :port                 => '465',
    # :enable_starttls_auto => true,
    :user_name            => 'stokes8671@gmail.com',
    :password             => "Iamsuccessful1",
    :authentication       => :plain, # :plain, :login, :cram_md5, no auth by default
    :domain               => "localhost",
    # :tls				  => true
  }
}


	Pony.mail(
		:to => 'stokes8671@gmail.com', 
		:from => name + '<' + mail + '>',
		:reply_to => mail,
		:subject => subject,
		:body => body)
		
	

	redirect '/success'

end

get '/success' do
	File.read('success.html')


end