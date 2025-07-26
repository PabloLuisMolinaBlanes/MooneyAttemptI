from typing import TypedDict
import json

class Movement:
    def __init__(self, concept : str, amount : float, label : str, date: str) -> None:
        self.concept = concept
        self.amount = amount
        self.label = label
        self.date = date
    
    @classmethod
    def from_json(cls, json_string : str):
        json_dict = json.loads(json_string)
        return cls(**json_dict)
    
    def to_dict(self):
        return self.__dict__
    
    def __repr__(self) -> str:
        return f'Movement {self.concept} of amount {self.amount} $, with label {self.label} and date {self.date}'