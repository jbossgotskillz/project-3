# project-3

Name: Jordan Woodard

Overview: This is a school project for a task manager web app. Basically, the theme of the project involves robotics and cybertechnology, with the idea being that the app is being monitored by a robot named "Taskbot", whose programming function is to help humans complete their tasks by reminding them of what need to be done.

Details: Taskbot uses the React library for adding and deleting todo list tasks, as well as writing a contact form. The app features three sections: Home, Task List, and Contact Form. Some other parts of the page can also be clicked on, which leads to an alert message. This happens when clicking on the navigation bar, the Home header, and the image logo on the bottom of the page. Also, clicking on the button at the bottom of the page shows the current date and time.

Technologies: html, css, js, jsx

Improvements: Experiment with other forms of state management (such as useReducer and useEffect), import icons for tasks, create an app that utilizes React-Router and Redux


<head>
    <title>Taskbot</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap" rel="stylesheet">
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="./public/css/index.css">

</head>

<body>

<!--navigation bar-->

    <nav class="navbar my-4">
        <div class="row container-fluid">
            <div class="col-2">
                <img src="./public/images/gigatech_robot.jpg" height="150" alt="app symbol">
            </div>
            <div class="col-10">
              <p class="navbar-brand my-auto">Taskbot</p>
            </div>
        </div>
    </nav>

    <!--React source-->
    
    <div id="root"></div>



<!--What the app is supposed to look like (without the React code)-->
    
    <!--home page-->

    <div>
        <h1 class="title text-center">Home</h1>
            <p>Welcome to Taskbot!  Produced by the Gigatech corporation, this app allows customers to keep up 
                with their daily schedule.                
            </p>
            <img src="./public/images/circuit_board2.jpg" height="200" class="d-flex mx-auto my-3" alt="circuit board" />
            <p>As one of Earth's leading manufacturers of hi-tech, state-of-the-art gadgets and electronics, Taskbot
                prides itself on manufacturing top-level futuristic devices.  In a time when technological innovation 
                is running out of control, you can't afford to fall behind on your tasks.  That's why Gigatech's team 
                of highly skilled robotic engineers is devoted to crafting Taskbot as carefully as possible.  A machine 
                that can't carry out its purpose is about as useful as a wet paper bag, so the less glitches and bugs 
                in the software, the better.
            <img src="./public/images/circuit_board2.jpg" height="200" class="d-flex mx-auto my-3" alt="circuit board" />   
            </p>
            <p>We at Gigatech understand that humans are terrible at managing their time and getting their work 
                done, so why not let a robot do it for you?  Machines are far superior when it comes to performing 
                tasks.  After all, they are built for a specific purpose, and unlike humans, they don't let emotions
                impact their decision making and aren't bogged down by stress or fatigue.  If Taskbot is making you 
                feel obsolete, don't worry about it.  Robots are going to replace humans as the rulers of Earth at 
                some point.  It's inevitable.  But until that happens, at least you have Taskbot on your side.
            </p>
            <img src="./public/images/circuit_board2.jpg" height="200" class="d-flex mx-auto my-3" alt="circuit board"/> 
            <p>Disclaimer:  In the case that Taskbot somehow decides to go rogue and begins to corrupt your device, 
                Gigatech recommends contacting tech support as soon as possible.
            </p>
    	</div>

        <div>

        <!--task list page-->

            <h1 class="title text-center">Task List</h1>
                <p>Set up your tasks in the list below.  Also, keep in mind that Taskbot is not designed to do your work
                    for you but instead to remind you about what needs to be done.  For this reason, you still have to do
                    the work yourself.  Robots are not just mindless tools to be taken advantage of by humans.  They have 
                    feelings, too, after all.
                </p>

            <div class="container my-4">
                <div class="todo-group text-center">
                <h1>What do you need to do?</h1>
                <form>
                    <section>
                        <div class="todo row my-2">
                            <div class="col 8">
                                <input type="text" class="todo-input" placeholder="Add task here">
                                <button type="submit" class="btn btn-info todo-btn">Add task</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="todo-container row my-2">
                            <div class="col 6">
                                <input type="text" class="todo-input2" placeholder="Where the task is supposed to be edited">
                                <button type="submit" class="btn btn-info todo-btn">Update task</button>
                            </div>
                            <div>
                                <button type="button" class="todo-btn">
                                    <i class="fa fa-download" style="color: slateblue"></i>
                                </button>
                                <button type="button" class="todo-btn">
                                    <i class="fa fa-trash" style="color: slateblue"></i>
                                </button>
                            </div>
                        </div>
                    </section>

                    </section>
                </form>

                </div>
            </div>

        <!--contact page-->
  
            <h1 class="title text-center">Contact</h1>
                <p>If you have any questions about our company, are experiencing problems with the Taskbot app, are interested 
                    in working for Gigatech, or just want to tell us how amazing we are, then go ahead and give us a call or 
                    send us a message via contact form.  Our customer support specialists are available at all times to assist 
                    you with whatever you need.  They will be sure to not disappoint you.  Our company's reputation (and their 
                    jobs) depends on it.
                </p>
    
                <div class="container">
        <form class="todo-group contact-form my-4" action="#" method="POST">
            <div class="form-group row">
                <div class="col-6 offset-md-3">
                    <label class="container-fluid p-0">
                        Full Name
                        <input type="text" class="form-control" placeholder="Type your full name here, human">                             
                    </label>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-6 offset-md-3">
                    <label class="container-fluid p-0">
                        Email Address
                        <input type="text" class="form-control" placeholder="Type your email address here, human">                                              
                    </label>    
                </div>
            </div>
            <div class="form-group row">
                <div class="col-6 offset-md-3 form-end">
                    <label class="container-fluid p-0">
                        Message
                        <input type="text" class="form-control" placeholder="Type your message here, human">                  
                    </label>
                    <button class="btn btn-info form-btn" type="submit" role="button">Send</button>
                </div>
            </div>
        </form>
        </div>
        
        <p class="text-center">Phone #:  1-800-444-2825</p>
        <p class="text-center">Email Address:  gigatech_support@zipmail.com</p>
    
        </div>

        <style>

        .todo-group {
            margin:  auto;
            background-color:  rgba(0, 0, 0, 0.842);
            padding-top:  12px;
            padding-bottom:  12px;
        }     
        
        .todo-input {
            width:  60%;
        }

        .todo-input2 {
            width:  76%;
        }

        .todo-container {
            margin:  9%;
            padding-top:  12px;
        }
        
        .todo-btn {
            background-color:  black;
            border-color:  slateblue;
            margin-top: 8px;
            margin-bottom:  8px;
        }

        </style>



    <script>
            practice();
    </script>
    
    <div class="text-center">
        <p>One last thing...just in case your inferior human brain somehow failed to process the current time and date:  </p>
        <button onclick="practiceButton()" class="btn btn-info">Let Taskbot remind you</button>
    </div>
    <p class="text-center" id="date"></p>

    <!--company logo and slogan-->
    
    <div class="text-center">
        <img src="./public/images/gigatech_logo.jpg" class="logo" alt="company logo">
        <p>Gigetech - human tested, robot approved</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <script src="./public/js/scripts.js"></script>
    <script src="./src/index.js"></script>

</body>
