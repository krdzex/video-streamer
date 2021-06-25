# Video streamer appliaction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting application

To start video-streamer application you need to run scrip: 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
"npm start" will also run scripts for json-server that will watch our data on port 3001 and it will start MediaServer for watching stream in app.\
This will make things easyer for user to start app and they dont need to run scripts one by one.


## Login on video streamer application

After you run app you will see home screen. If you are planning to create,edit or delete your own stream first you will need to Login on page using Google service.\
All you need to do is click on buttom in top right corner and login using your google gmail and password.

**Note: If you dont have google gmail just make one using this link  [google registration](https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail&hl=en&dsh=S1594407328%3A1624635079012332&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp)**

## How to make own stream

After you login on app you will see create stream button. When you press it you will see form that will ask you for your stream title and stream description.\
Dont forget that your stream title and stream description cant be empty!
After you successfully created your stream you will be able to see it on your main page. When you click on title it will open your stream and u will probably see video player that is trying to load.\
That is because we still didnt setup our stream in OBS.

**Note: In your url last number is ID of ur stream. Remamber that number because you will need it when we setup stream in OBS**

## How to setup your stream in OBS

Firstly to do this you need have OBS app on your PC.\
If you dont have it then just download it on this link  [OBS download](https://obsproject.com)
After you run OBS the following things: 
1. In top left corner click on file button and then settings.
2. Then click on Stream button on left side and on the right side you should see settings for your Stream.
3. On settings side find Stream key and put value of your stream ID.
4. Click apply and ok
5. In buttom right corner press Start Streaming

After that you should be able to see your stream in video streamer app.

Enyoj! :)
