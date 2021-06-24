# Machine Learning Algorithm Visualizer 


### Algorithm Support
- Linear Regression
- Polynomial Regression
- Logistic Regression

## Setting Up Locally 
### Backend
Navigate to the backend/ directory
1. Create a virtual environment
2. Install all the requirements for the backend

```pip install -r requirements.txt```

3. Start Development Server

```python manage.py runserver```

4. Open a websocket connection on different terminal for real-time data

```python -m websockets ws://localhost:8000/ws/visualizer/```

### Frontend
Navigate to the frontend directory and type the command in a different terminal

```npm install```

