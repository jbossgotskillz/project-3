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
    <link rel="stylesheet" type="text/css" href="/main/index.css">

</head>

<body>

    <nav class="navbar my-4">
        <div class="row container-fluid">
            <div class="col-2">
                <img src="/main/gigatech_robot.jpg" height="150" alt="app symbol">
            </div>
            <div class="col-10">
              <p class="navbar-brand my-auto">Taskbot</p>
            </div>
        </div>
    </nav>
    
    <div id="root"></div>

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
        <img src="/main/gigatech_logo.jpg" class="logo" alt="company logo">
        <p>Gigetech - human tested, robot approved</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <script src="/main/scripts.js"></script>
    <script src="/main/index.js"></script>

</body>
