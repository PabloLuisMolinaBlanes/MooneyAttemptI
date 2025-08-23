import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import base64
import io
from utils.plotting.plots.mean_plot import generate_mean_plot
from utils.plotting.plots.timeseries_decomposition import generate_seasonal_decompose


def plot_data(df : pd.DataFrame, mean : float):
    return generate_mean_plot(df, mean)

def plot_autodecomposition(df: pd.DataFrame):
    return generate_seasonal_decompose(df)