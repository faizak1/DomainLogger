# DomainLogger
Chrome Extension to Log Your Most Used Domains

<img src = "https://img.shields.io/github/license/faizak1/DomainLogger"> <img src = "https://img.shields.io/github/issues/faizak1/DomainLogger">
![Build Status](https://github.com/faizak1/DomainLogger/actions/workflows/build.yml/badge.svg)
[![codecov](https://codecov.io/gh/faizak1/DomainLogger/branch/main/graph/badge.svg?token=cde5d698-c560-4f4d-a0bf-bb4b64a09271)](https://codecov.io/gh/faizak1/DomainLogger)

## Overview
This Chrome extension acts as an activity log by indicating how long a user spends on each domain site (Github, Amazon, Youtube, Courseworks, etc).

Problem Statement: While iPhone and Macs typically have screentime data, they do not specify details such as the domain the user spent more time in. But this is a unique problem and a good solution would benefit students who wish to see how long they spend on educational sites, shopping sites, social media, etc so that they can adjust their patterns upon learning this information to achieve their goals or at the very least, they can be more aware of how much time they are spending for distractions thanks to the constant logging of this Chrome extension.

Solution: When you start the browser window, from that point 'domain-logger' monitors your tabs and domain activity in that window. It logs the duration of each domain you are visiting. When you actively visit a tab, the timer for that domain will keep going, until you switch to another tab with a different domain (at that point the timer will start for that new domain). Ultimately, the user should be able to see which domains they spent the longest time in during the past 24 hours. It solves the problem at hand since the user will now be more aware of which domains they spend the most time on, which can help them become more productive with their screen time.

## How to Run The Extension
1. Download this repo
2. Go to chrome://extensions/
3. Turn on the "Developer Mode" toggle on the top right corner
4. Click on "load unpacked" and select the folder which has this extension
5. Open a new tab and click on the "Extensions" gear on the top right corner of the chrome window
6. Click on the "Domain Logger" Extension to see the list of domains you have open in that window along with the number of tabs associated with that domain

## Sample Output of the Domain Logger Chrome Extension (thus far)
As you can see, the websites are in lexicographical order, the "visits" attribute shows the number of tabs for that domain. The remaining features will be added in the next iterations of the project.
<img width="1430" alt="Homework 3" src="https://user-images.githubusercontent.com/52360459/219991346-88b258bb-5ebb-4a92-80d5-db3791421628.png">

## To Run Tests and See Code Coverage
npm test -- --coverage
