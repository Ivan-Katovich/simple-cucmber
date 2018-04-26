# test framework
Protractor cucumber simple framework

## Setup framework

Preconditions: Ruby, Python, Node.js

Open a command window and run:

    npm install 

Then you should update and run local webdriver-manager using tasks:

    npm run wd-update
    npm run wd-start  
    
The main task for tests running is:

    npm run protractor
    
The main parameters for test running is:

    --tags=@wip,@text-checking (it runs only tests tagged as @wip and @text-checking in the example, but tags can be different)
    