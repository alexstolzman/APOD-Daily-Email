# APOD-Daily-Email
A script to send the current Astronomy Photo of the Day via email on a daily basis.

I used axios to access NASA's Astronomy Photo of the Day API, and nodemailer to create and send the email containing the image, explanation, and a link to the site.

For the scheduling task I used Windows Task Scheduler to creat a reoccuring task that runs the script every day.

