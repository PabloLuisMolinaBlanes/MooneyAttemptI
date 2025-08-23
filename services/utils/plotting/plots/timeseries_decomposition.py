import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import base64
import io
from statsmodels.tsa.seasonal import seasonal_decompose
from dateutil.parser import parse

def generate_seasonal_decompose(df: pd.DataFrame):
    matplotlib.use('Agg')
    additive_decomposition = seasonal_decompose(df['amount'], model='additive', period=1)
    plt.figure()
    additive_decomposition.plot()
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    b64_string = base64.b64encode(buffer.getvalue())
    plt.figure().clear()
    plt.close()
    plt.clf()
    plt.cla()
    buffer.close()
    return b64_string.decode('ascii')