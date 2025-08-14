from utils.plotting import plotter
import pandas as pd


def handle_plot(df : pd.DataFrame, mean: float):
    return plotter.plot_data(df, mean)