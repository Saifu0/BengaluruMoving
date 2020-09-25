from channels.generic.websocket import AsyncWebsocketConsumer
import json
import sklearn
import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from math import *


class Classification(AsyncWebsocketConsumer):

    async def connect(self):
        self.groupname = 'dashboard'
        await self.channel_layer.group_add(
            self.groupname,
            self.channel_name,
        )

        await self.accept()

    async def disconnect(self, close_code):

        await self.channel_layer.group_discard(
            self.groupname,
            self.channel_name
        )

    async def receive(self, text_data):
        datapoint = json.loads(text_data)
        print(datapoint)
        x_train = datapoint['x_train']
        y_train = datapoint['y_train']

        await self.channel_layer.group_send(
            self.groupname,
            {
                'type': 'deprocessing',
                'value': [x_train, y_train]

            }
        )

    async def deprocessing(self, event):
        x_train = event['value'][0]
        y_train = event['value'][1]

        if len(x_train) == 0:
            return

        if len(set(y_train)) <= 1:
            return

        clf = LogisticRegression()
        clf.fit(np.array(x_train), np.array(y_train))

        w = clf.coef_
        b = clf.intercept_

        x = np.array([0, 1])
        y = -(x*w[0][0] + b)/w[0][1]

        await self.send(text_data=json.dumps({'y1': y[0], 'y2': y[1], 'intercept': clf.intercept_.tolist(), 'slope': clf.coef_.tolist()}))


# theta = clf.coef_.tolist()
# b = clf.intercept_.tolist()

# getting the x co-ordinates of the decision boundary
# plot_x = np.array([0, 1])
# getting corresponding y co-ordinates of the decision boundary
# plot_y = (-1/theta[0][1]) * (theta[0][0] * plot_x + b[0])
