from utils.data_handling import statistics_calculation
from utils.data_handling.movement import Movement


def handle_data(data : list[Movement]):
    return statistics_calculation.calculateStatistics(data)