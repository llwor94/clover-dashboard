Community Clover Bot
==========

Purpose
----------
A bot that will help members of the Clover DevRel team manage questions on the Clover Developer Community forum (https://community.clover.com/index.html). Currently, the bot simply provides a list of ten questions that do not have an accepted answer and puts them in a dedicated Slack channel. 

How to Use
----------

In your root directory:

`> git clone git@github.com:kristalinc/devrel-izzy.git`

Once you've set up an environment for Python 2.7 using your preferred tool, you'll need to install the libraries locally to a "lib" folder. This is to mimic what Google has or will set up for you.

`> pip install -r requirements -t lib/`

Download and install Cloud SDK: https://cloud.google.com/appengine/docs/standard/python/download

Once you're done with that, in the same directory as `app.yaml`, run the server locally:  

`> dev_appserver.py app.yaml`

In your browser, go to http://localhost:8080. You should see "Hello World". 

http://localhost:8080 - Hello World  
http://localhost:8080/hottest - List of hottest questions on Community  
http://localhost:8080/overview - dashboard overview of Clover App Market  

To push your local code live:  

`> gcloud app deploy`

Future Releases
----------
Nothing just yet!

Got a suggestion? Let me know! (@frankfaustino in Slack)
