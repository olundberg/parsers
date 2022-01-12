"""Parser for data from hockeyettan"""
import pandas as pd
from bs4 import BeautifulSoup
import datetime

header = "Subject,Start Date,Start Time,End Date,End Time,All day event,Description,Location\n"
output_file = "Pitea.csv"

filename = "Matcher - Hockeyettan.se.html"
with open(filename) as fp:
    soup = BeautifulSoup(fp, "html.parser")


games = soup.find_all("div", {"class": "game-list-item"})

games_list = []
for game in games:
    game_list = []
    for div in game:
        try:
            game_list.append(div.text.strip())
        except:
            pass

    idx = [0, 1, 8]
    game_list = [game_list[i] for i in idx]
    game_list[0] = datetime.datetime.strptime(game_list[0], "%Y-%m-%d %H:%M")
    games_list.append(game_list)
    print(game_list)


with open(output_file,"w") as fp:
    fp.write(header)
    delta_time = datetime.timedelta(hours=2.5)

    for game_list in games_list:
        fp.write(f"{game_list[1]} - {game_list[2]},")  # Subject
        fp.write(f"{game_list[0].strftime('%m/%d/%Y')},")  # Start Date
        fp.write(f"{game_list[0].strftime('%H:%M %p')},")  # Start Time
        fp.write(f"{game_list[0].strftime('%m/%d/%Y')},")  # End Date
        fp.write(f"{(game_list[0]+delta_time).strftime('%H:%M %p')},")  # End Time
        fp.write(f"FALSE,")  # All day event
        fp.write(f",")  # Description
        fp.write(f",")  # Location
        fp.write("\n")  #
