import matplotlib
import matplotlib.pyplot as plt
import json
from utils.data_handling.movement import Movement

import numpy as np
import pandas as pd

pandas_dataframe = pd.DataFrame()

def calculateStatistics(data : list[Movement]):
    pandas_dataframe = pd.DataFrame([movement.__dict__ for movement in data])
    mean = round(pandas_dataframe['amount'].mean(), 2)
    sd = round(pandas_dataframe['amount'].std(), 2)
    count_by_label = pandas_dataframe.groupby('label').count().apply(list).to_dict()
    json_data =	{
        "mean": mean,
        "sd": sd,
        "count_by_label": count_by_label['amount']
    }
    return json.dumps(json_data)