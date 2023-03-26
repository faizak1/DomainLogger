# DomainLogger

Chrome Extension to Delete Tabs by Domain, and to See a Log Table showing Each Parent Domain and its Corresponding Number of Tabs within a Chrome Window

<img src = "https://img.shields.io/github/license/faizak1/DomainLogger"> <img src = "https://img.shields.io/github/issues/faizak1/DomainLogger">
![Build Status](https://github.com/faizak1/DomainLogger/actions/workflows/build.yml/badge.svg)
[![codecov](https://codecov.io/github/faizak1/DomainLogger/branch/main/graph/badge.svg?token=RUW388KYJF)](https://codecov.io/github/faizak1/DomainLogger)

## Overview

This Chrome extension helps users identify each domain that they have opened in the current Chrome window and delete all tabs under that domain in just one click. Users can also see how many tabs they have open under each parent domain (whether it is Github, Amazon, Youtube, Courseworks, etc) and simply delete all tabs related to the domain they specify, by clicking the "Delete" link corresponding to the particular parent domain they wish to delete.

Problem Statement: While users can close tabs individually when clearing out their window, this process can become tedious especially for students who can easily have dozens of tabs open while they are studying, watching youtube, shopping online, etc. They can easily get distracted and switch from one tab to another instead of focusing on the task at hand. Using this chrome extension, with a few simple clicks users can easily remove all domains from their Chrome Window that can be distractions to their current task, which can result in higher productivity. Another advantage of this extension is that if current RAM usage is high, users can reduce this easily with this extension to remove tabs from domains that are no longer needed wih a few simple clicks, thereby reducing the RAM usage of Chrome (which can be utilized for other processes).

Solution: When you start the browser window and unpack this Chrome Extension in "Developer Mode", from that point 'Domain Logger' keeps track of your tabs and domain activity in that window. It categorizes all subdomains that you are visiting under its respective parent domain, logs the total number of tabs under that domain, and gives the option to delete all tabs under that domain with just one click. For each tab you open under a parent domain and for each tab you close under a parent domain, the count will automatically adjust accordingly. This extension solves the problem since the user will now be able to easily close all irrelavent domains when trying to concentrate, which can help them minimize distraction and become more productive.

## Features

This project has the following features:

1. User-friendly interface to display all information to user in an easy-to-use manner
2. Logs each parent domain in the current chrome window
3. Displays the number of tabs corresponding to each domain
4. Displays a "delete" link for each domain in the log table to delete all tabs under that domain
5. Real-time monitoring of labs, logs in the domain table update accordingly when adding or deleting any tab
6. Thorough documentation for this Domain Logger Chrome extension

## Commands

This project has the following commands:

- `npm install`: install dependencies
- `npm run build`: compile the babel modules
- `npm run eslint`: run static analysis with `eslint`
- `npm run prettier`: autoformat the code with `prettier`
- `npm run test`: run the test suite, written using `jest`

For more information on npm cli commands, click [here](https://docs.npmjs.com/cli/v9/)
For more information on testing using jest, click [here](https://jestjs.io/)

## How to Use The Extension

1. Download this repo
2. Go to chrome://extensions/
3. Turn on the "Developer Mode" toggle on the top right corner
4. Click on "load unpacked" and select the folder which has this extension
5. Click on the "Extensions" gear on the top right corner of the chrome window
6. Click on the "Domain Logger" Extension to see the list of domains you have open in that window along with the number of tabs associated with that domain

## Sample Output

As you can see, the websites are in lexicographical order in the "domain" column, the "visits/tabs" column shows the number of tabs for that domain, and the "delete tabs" feature allows users to delete all tabs of the particular domains.

<strong> Here is a sample initial output before clicking "Delete w<span>ww.</span>youtube.com" </strong>

<img width="1431" alt="HW6_OutputBeforeDeleteYoutubeTabs" src="https://user-images.githubusercontent.com/52360459/227747678-ec13fe65-13c0-4c40-8c79-bb85ab6d49d4.png">

<br> </br>
<strong> Here is a sample output after clicking "Delete w<span>ww.</span>youtube.com" </strong>

<img width="1432" alt="HW6_OutputAfterDeleteYoutubeTabs" src="https://user-images.githubusercontent.com/52360459/227747686-785b85fd-1688-47c6-91f2-c29c63e7a851.png">

As you can see, there were 3 Youtube tabs in the initial "before" output as shown in the extension. As expected, all 3 of the Youtube tabs were deleted in just one click after clicking the link "Delete w<span>ww.</span>youtube.com". After clicking on the Domain Logger extension again, we can see that youtube entry has been removed from the table as shown in the "after" output.

## To Run Tests and See Code Coverage

npm test -- --coverage
