import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import base64
import io

def generate_mean_plot(df: pd.DataFrame, mean: float):
    x = range(df['amount'].size)
    plt.figure()
    sns.lineplot(x=x, y=df['amount'])
    plt.axhline(y=mean)
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    b64_string = base64.b64encode(buffer.getvalue())
    plt.figure().clear()
    plt.close()
    plt.clf()
    plt.cla()
    buffer.close()
    return b64_string.decode('ascii')