# Work-Day-Scheduler

# LINKS SECTION
Link to GitHub Repository: https://github.com/ManoLo2ManoLo/Work-Day-Scheduler.git
Link to Application: https://manolo2manolo.github.io/Work-Day-Scheduler/

# PURPOSE OF APPLICATION
The purpose of this application is to serve as a day planner for the user. User will enter their hourly task into the textarea and click the button that corresponds to the textarea, and it will insert their task into local storage. If they were to refresh the page or were to close it and reopen it at a later time, information will be pulled from the local storage and printed ontop their allocated timeslots as soon as the document is open. So the user can tell what hour they are in, the textarea are color coded in accordance to whether the time is in the past, present, or future. Hours that had already pass will be presented as gray, the current hour is presented as red, and the future is present in the color green. 

# ADDITIONAL INFORMATION ABOUT THE CODE
ID's and Classes are in military time hours, as it is easier to deal with number increases. For example instead of going from 12 to 1 (when it goes from 12pm to 1pm), it goes from 12 to 13. 

# LICENSE
Copyright (c) 2021 ManoLo2ManoLo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# CREDIT
This code had a starter code provdied by Rutger Coding Bootcamp. It was edit and revised by Manuel Canas-Menendez to reach its full potential as a day planner.

# NECESSARY FILES
index.html (the structure of the webpage)
    assets folder
        css folder 
            style.css (the styling of the webpage)
        js folder
            script.js (the functionality of the webpage)

# SCREENSHOTS

In this image, this is what the user would see if they were to load up the planner. A bunch of blank textarea with color cordinated boxes based on time.
![Screenshot (306)](https://user-images.githubusercontent.com/88364269/134758956-9273cd66-2abf-4cd7-b143-d759b8d312b2.png)

In this image, you can see that the user enters their plans in the text area, after that it will be printed into local storage(shown in next picture). It will also be printed exactly how it was typed if user reopen application or refreshes page.
![Screenshot (307)](https://user-images.githubusercontent.com/88364269/134758983-c235478b-11a0-435b-9118-ec1b0ce04665.png)

In this image, you can see that the console log, where the key is the hour (in military time), and the value (the user inputted task) that is paired with the key.
![Screenshot (309)](https://user-images.githubusercontent.com/88364269/134759010-3116f806-9562-4b5f-9cd8-4ea70ea06c56.png)
