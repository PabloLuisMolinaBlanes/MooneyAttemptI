import matplotlib
import matplotlib.pyplot as plt
import json
from utils.data_handling.movement import Movement

import numpy as np
import pandas as pd

pandas_dataframe = pd.DataFrame()

def calculateStatistics(data : list[Movement]):
    pandas_dataframe = pd.DataFrame([movement.__dict__ for movement in data])
    return pandas_dataframe.to_string()