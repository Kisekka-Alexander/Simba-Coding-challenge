# Simba-Coding-challenge
 React-Django-Todo
### Project Installation 
 
 After successful installation and setup of the software requirements, follow these steps to install the project using the terminal.
1. Clone the repository to a destination directory of your choice
    ```sh
    $ git clone https://github.com/Kisekka-Alexander/Simba-Coding-challenge.git
    ```
2. Navigate to the backend folder 
    - Create migrations and migrate
      ```sh 
      $ python manage.py makemigrations
      $ python manage.py migrate
      ```
    - Create super user account
      ```sh
      $ python manage.py createsuperuser --email <your-email> --username <your-username>
      ```
    - Run to start the application 
      ```sh 
      $ python manage.py runserver
      ```
3. Navigate to the frontend folder and run the frontend app also.
    
    - Run to start the application 
      ```sh 
      $ npm start
      ```
4. In a browser of your choice go to `http:localhost:3000`

