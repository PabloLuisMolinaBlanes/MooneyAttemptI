import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import base64
import io
from utils.plotting.plots.mean_plot import generate_mean_plot


def plot_data(df : pd.DataFrame, mean : float):
    return generate_mean_plot(df, mean)