from utils.plotting import plotter
import pandas as pd


def handle_mean_plot(df : pd.DataFrame, mean: float):
    return plotter.plot_data(df, mean)

def handle_auto_plot(df : pd.DataFrame):
    return plotter.plot_autodecomposition(df)